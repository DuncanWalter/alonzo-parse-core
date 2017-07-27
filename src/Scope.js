import type { SyntaxNode } from './SyntaxNode'
import type { NameSpace } from './NameSpace'
import XRegExp from 'xregexp'

let pattern = /\/(.+)\//;

// The runtime scope of a parse call (like a block scope in programming)
export type Scope = {
    variables: {[string]: SyntaxNode},
    literals: Array<SyntaxNode>,
    domains: {[string]: RegExp},
}

// TODO integrate the runtime environment
export function createScope(space: NameSpace, environment?: any): Scope {
    let obj = {};
    obj.literals = [];
    obj.variables = {};
    obj.domains = {};
    Object.keys(space.domains).forEach(key => {
        obj.domains[key] = RegExp(pattern.exec(space.domains[key].pattern)[1] + '(?!@})');
        console.log(obj.domains[key]);
    });
    Object.keys(space.variables).forEach(key => {
        obj.variables[key] = space.domains[space.variables[key].domain].parser(space.variables[key].value); // TODO whip out the Domains parser
    });
    return obj;
}