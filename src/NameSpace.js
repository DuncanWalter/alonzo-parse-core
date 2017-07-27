import type { SyntaxNode } from './SyntaxNode'

export type OperationSignature = { 
    args: Array<string>,
    ret: string,
}

export type DomainSignature = {
    // TODO: add a domain dependency list string[] (be sure to not do the C++ expo import)
    // TODO: add application and subscopes for type signatures and applications
    pattern: string, // TODO string
    parser: (string) => SyntaxNode, // TODO remove
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
    variables: {[string]: {value: string, domain: string}},
}