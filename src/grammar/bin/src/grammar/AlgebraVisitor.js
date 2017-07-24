// Generated from .\src\grammar\Algebra.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by AlgebraParser.

function AlgebraVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

AlgebraVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
AlgebraVisitor.prototype.constructor = AlgebraVisitor;

// Visit a parse tree produced by AlgebraParser#domainPragma.
AlgebraVisitor.prototype.visitDomainPragma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#transform.
AlgebraVisitor.prototype.visitTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#n_tuple.
AlgebraVisitor.prototype.visitN_tuple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#application.
AlgebraVisitor.prototype.visitApplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#monuple.
AlgebraVisitor.prototype.visitMonuple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#variable.
AlgebraVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#operation.
AlgebraVisitor.prototype.visitOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#infix.
AlgebraVisitor.prototype.visitInfix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AlgebraParser#unary.
AlgebraVisitor.prototype.visitUnary = function(ctx) {
  return this.visitChildren(ctx);
};



exports.AlgebraVisitor = AlgebraVisitor;