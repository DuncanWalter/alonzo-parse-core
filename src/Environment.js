import type { NameSpace } from './NameSpace'
import type { SyntaxNode } from './SyntaxNode'

export type DomainPlugin = {
    parse: (string) => SyntaxNode,
    stringify: (SyntaxNode) => string,
    prettify: (SyntaxNode) => string,
    interpret: (string) => SyntaxNode,
};

export type Environment = {
    plugins: {[string]: Promise<DomainPlugin>}
};

export function load(environment: Environment, space: NameSpace): void {
    Object.keys(space.domains).forEach(key => {
        if(environment.plugins[key] === undefined){
            environment.plugins[key] = installPlugin(key);
        }
    });
};



