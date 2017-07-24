
// Syntax Trees are recursively defined by simple
// nodes. They should always be canonically serializable. 
export type SyntaxNode = {

    // SyntaxNodes can store an arbitrary number of child nodes.
    // TODO consider adding a named child functionality to augment
    // partial application.
    children: Array<SyntaxNode>;

    // SyntaxNodes can contain known / constant values.
    value: ?string;

    // SyntaxNodes are aware of their value type
    // As they are serializable, they only store a string definition
    domain: string;

    // SyntaxNodes can represent in-scope names.
    alias: ?string;

    

}


// // SyntaxNodes are little more than named tuples. 
    // constructor(alias: ?string, domain: string, value: ?string, ...children: Array<SyntaxNode<mixed>>){
    //     this.children = children;
    //     this.alias = alias;
    //     this.domain = domain;
    //     this.value = value;
    // }