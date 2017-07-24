import { Visitor as BaseVisitor } from './grammar/grammar'
import { operations, symbolTable } from './infixHack'
import { Parser } from './grammar/grammar'

export type OperationSignature = { 
    args: Array<string>,
    ret: string,
}

export type DomainSignature = {
    // TODO: add a domain dependency list string[] (be sure to not do the C++ expo import)
    // TODO: add application and subscopes for type signatures and applications
    pattern: RegExp,
    parser: (string) => number | bool, // TODO remove
    signatures: {[opName: string]: (OperationSignature|Array<OperationSignature>) },
}

// Scopes are the lexical scope of domains and operations. They should allow for the 
// fast computation of a valid domain parsing order and be serializable. They should also
// contain all signatures of a domain.
// ScopeOf(Domain) - create a lexical scope from an actual domain definition
// include(Scope) - append a scope to this one, logically ordering adoption order
// Remember that parse order with dependencies is precisely backwards;
// if A needs B, then A must parse first such that its parser may utilize B's parser.
// TODO split this into a file, convert to nameSpace (scope got a new meaning)
// TODO create some sort of import model for dynamically loading parsers... This is a tough requirement
export type NameSpace = {
    domains: {[string]: DomainSignature},
    variables: {[string]: string},
}

export type Scope = {
    variables: {[string]: number | bool},
    // literals: Array<number | bool>,
    
}

export default function Visitor(scope: Scope, literals: Array<number | bool>){
    // scope.literals = scope.literals === undefined ? [] : scope.literals;
    this.scope = scope;
    this.literals = literals;
}

const proto = new BaseVisitor();
Visitor.prototype = Object.assign(proto, {
    // 
    visitVariable(ctx){
        // console.log(ctx.children[0].getText());
        return this.scope.variables[ctx.children[0].getText()];
    },
    // Let's add recursive grammars... because that's not complicated at all
    visitDomainPragma(ctx){
        // console.log(ctx.children[1].getText());
        return this.literals[parseInt(ctx.children[1].getText(), 36)];
    },
    // 
    visitN_tuple(ctx){
        // Catch and filter out terminal tokens
        return ctx.children.map(child => this.visit(child));
    },
    //
    visitTransform(ctx){
        return "not implemented";
    },
    //
    visitMonuple(ctx){
        return this.visit(ctx.children[1]);
    },
    // Infix operation visits are a nightmare due to operator
    // precedence.
    visitOperation(ctx){
        let sym = ctx.children[1].children[0].getText();
        let l = ctx.children[0];
        let r = ctx.children[2];
        let p = ctx.parentCtx;
        if(r instanceof Parser.OperationContext){
            let next = r.children[1].children[0].getText();
            if(symbolTable[sym] <= symbolTable[next]){
                // console.log('injecting right');
                ctx.children[2] = r.children[0];
                r.children[0].parentCtx = ctx;
                r.children[0] = ctx;
                r.parentCtx = p;
                ctx.parentCtx = r;
                (p||{}).children = (p||{children:[]}).children.map((child)=>child===ctx?r:child);
                return this.visit(r);
            }
        }
        if(l instanceof Parser.OperationContext){
            let last = l.children[1].children[0].getText();
            if(symbolTable[sym] < symbolTable[last]){
                // console.log('injecting left');
                ctx.children[0] = l.children[2];
                l.children[2].parentCtx = ctx;
                l.children[2] = ctx;
                l.parentCtx = p;
                ctx.parentCtx = l;
                (p||{}).children = (p||{children:[]}).children.map((child)=>child===ctx?l:child);
                return this.visit(l);
            }
        }
        if(p instanceof Parser.OperationContext){
            if(p.children[0] === ctx && symbolTable[p.children[1].children[0].getText()] < symbolTable[sym]){ 
                // console.log('ingesting right');
                p.children[0] = r;
                r.parentCtx = p;
                ctx.children[2] = p; 
                ctx.parentCtx = p.parentCtx; 
                p.parentCtx = ctx;
                (ctx.parentCtx||{}).children = (ctx.parentCtx||{children:[]}).children.map(
                    (child)=>child===p?ctx:child
                );
            } 
            if(p.children[2] === ctx && symbolTable[p.children[1].children[0].getText()] < symbolTable[sym]){ 
                // console.log('ingesting left');
                p.children[2] = l; 
                l.parentCtx = p;
                ctx.children[0] = p; 
                ctx.parentCtx = p.parentCtx; 
                p.parentCtx = ctx; 
                (ctx.parentCtx||{}).children = (ctx.parentCtx||{children:[]}).children.map(
                    (child)=>child===p?ctx:child
                );
            }
        }
        let parent = ctx.parentCtx;
        let lRes = this.visit(ctx.children[0]);
        if(parent !== ctx.parentCtx){ return lRes; }
        let rRes = this.visit(ctx.children[2]);
        if(parent !== ctx.parentCtx){ return rRes; }
        let res = operations[sym](lRes, rRes);
        // console.log(ctx.children[1].children[0].getText() + ": " + res);
        return res;
    },
    //
    visitApplication(ctx){

    }
});
