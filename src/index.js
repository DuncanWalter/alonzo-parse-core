import antlr4 from 'antlr4'
import { Parser, Lexer } from './grammar/grammar'
import Visitor from './Visitor'
import type { Scope } from './Visitor'
import XRegExp from 'xregexp'
import Decimal from 'decimal.js'
const InputStream = antlr4.InputStream;
const TokenStream = antlr4.CommonTokenStream;

// ||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//|| \\
// ||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=|| \\
// ||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=|| \\
// ||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\|| \\

// Syntax Trees will be serializable and live on both sides
// of the wire. They are merely a context free representation 
// of written math.

// Semantic trees will be the server side magic tree

// TODO: convert to decimal.js numbers
// TODO: don't let scope literals hang around like they do now
const scope: Scope = {
    domains: {
        number: {
            pattern: /[0-9]+(\.[0-9]+)?(?!@})/,
            parser: parseInt,
            signatures: {}, // TODO fill in
        },
        bool: {
            pattern: /(true)|(false)/,
            parser: str=>str==='true',
            signatures: {}, // TODO fill in
        },
    },
    variables: {
        x: 13,
        y: false,
        z: -3,
    },
}



export type Interpreter = (string, Scope, Array<number | bool>) => number | bool;


// A high level, recursively extensible algebra parser
// TODO: convert output to syntax tree
export let algebra: Interpreter = (input, scope, literals) => {

    let augmentedInput = Object.keys(scope.domains).reduce((acc, key)=>{
        var domain = scope.domains[key];
        var output = XRegExp.replace(acc, domain.pattern, 
            (match)=>{
                var i = literals.length;
                literals.push(domain.parser(match));
                return '{@'+i.toString(36)+'@}';
            }, 'all'
        );
        // console.log(output);
        return output;
    }, input);

    let chars  = new InputStream(augmentedInput);
    let lexer  = new Lexer(chars);
    let tokens = new TokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let tree = parser.value(); // grammar rule entry point is value
    return (new Visitor(scope, literals)).visit(tree);
};

export function test() {
    var i = 0;
    console.log("BENCHMARK TESTING:")
    console.log(new Date());
    while(i++ < 10000){
        algebra("((x+(23:3+4*2^2=19)*4)/2)>45&y", scope, []);
    }
    console.log(new Date()); 
}


// console.log(algebra(rawInput, scope));










