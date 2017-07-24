// Generated from .\src\grammar\Algebra.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var AlgebraVisitor = require('./AlgebraVisitor').AlgebraVisitor;

var grammarFileName = "Algebra.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003 3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0006\u0002\u0015\n\u0002\r\u0002\u000e\u0002\u0016\u0003\u0002\u0005",
    "\u0002\u001a\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002\"\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002*\n\u0002",
    "\f\u0002\u000e\u0002-\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0002\u0003\u0002\u0005\u0002\u0004\u0006\u0002",
    "\u0004\u0003\u0002\b\u0018\u0004\u0002\u0013\u0013\u0019\u001c\u0002",
    "7\u0002!\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002\u0006",
    "0\u0003\u0002\u0002\u0002\b\t\b\u0002\u0001\u0002\t\n\u0007\u0003\u0002",
    "\u0002\n\u000b\u0007\u001f\u0002\u0002\u000b\"\u0007\u0004\u0002\u0002",
    "\f\"\u0007\u001e\u0002\u0002\r\u000e\u0005\u0006\u0004\u0002\u000e\u000f",
    "\u0005\u0002\u0002\u0006\u000f\"\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0007\u0005\u0002\u0002\u0011\u0014\u0005\u0002\u0002\u0002\u0012\u0013",
    "\u0007\u0006\u0002\u0002\u0013\u0015\u0005\u0002\u0002\u0002\u0014\u0012",
    "\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0014",
    "\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0019",
    "\u0003\u0002\u0002\u0002\u0018\u001a\u0007\u0006\u0002\u0002\u0019\u0018",
    "\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0007\u0002\u0002\u001c\"",
    "\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e\u001f",
    "\u0005\u0002\u0002\u0002\u001f \u0007\u0007\u0002\u0002 \"\u0003\u0002",
    "\u0002\u0002!\b\u0003\u0002\u0002\u0002!\f\u0003\u0002\u0002\u0002!",
    "\r\u0003\u0002\u0002\u0002!\u0010\u0003\u0002\u0002\u0002!\u001d\u0003",
    "\u0002\u0002\u0002\"+\u0003\u0002\u0002\u0002#$\f\u0007\u0002\u0002",
    "$%\u0005\u0004\u0003\u0002%&\u0005\u0002\u0002\b&*\u0003\u0002\u0002",
    "\u0002\'(\f\u0005\u0002\u0002(*\u0005\u0002\u0002\u0006)#\u0003\u0002",
    "\u0002\u0002)\'\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002+)",
    "\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\u0003\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002./\t\u0002\u0002\u0002/\u0005",
    "\u0003\u0002\u0002\u000201\t\u0003\u0002\u00021\u0007\u0003\u0002\u0002",
    "\u0002\u0007\u0016\u0019!)+"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{@'", "'@}'", "'('", "','", "')'", "':='", 
                     "':'", "'->'", "'='", "'|'", "'&'", "'!='", "'>='", 
                     "'<='", "'>'", "'<'", "'-'", "'+'", "'%'", "'/'", "'*'", 
                     "'^'", "'~'", "'!'", "'#'", "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "WS", "NAME", "ID", "BOOL" ];

var ruleNames =  [ "value", "infix", "unary" ];

function AlgebraParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

AlgebraParser.prototype = Object.create(antlr4.Parser.prototype);
AlgebraParser.prototype.constructor = AlgebraParser;

Object.defineProperty(AlgebraParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

AlgebraParser.EOF = antlr4.Token.EOF;
AlgebraParser.T__0 = 1;
AlgebraParser.T__1 = 2;
AlgebraParser.T__2 = 3;
AlgebraParser.T__3 = 4;
AlgebraParser.T__4 = 5;
AlgebraParser.T__5 = 6;
AlgebraParser.T__6 = 7;
AlgebraParser.T__7 = 8;
AlgebraParser.T__8 = 9;
AlgebraParser.T__9 = 10;
AlgebraParser.T__10 = 11;
AlgebraParser.T__11 = 12;
AlgebraParser.T__12 = 13;
AlgebraParser.T__13 = 14;
AlgebraParser.T__14 = 15;
AlgebraParser.T__15 = 16;
AlgebraParser.T__16 = 17;
AlgebraParser.T__17 = 18;
AlgebraParser.T__18 = 19;
AlgebraParser.T__19 = 20;
AlgebraParser.T__20 = 21;
AlgebraParser.T__21 = 22;
AlgebraParser.T__22 = 23;
AlgebraParser.T__23 = 24;
AlgebraParser.T__24 = 25;
AlgebraParser.T__25 = 26;
AlgebraParser.WS = 27;
AlgebraParser.NAME = 28;
AlgebraParser.ID = 29;
AlgebraParser.BOOL = 30;

AlgebraParser.RULE_value = 0;
AlgebraParser.RULE_infix = 1;
AlgebraParser.RULE_unary = 2;

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AlgebraParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;


 
ValueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function DomainPragmaContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DomainPragmaContext.prototype = Object.create(ValueContext.prototype);
DomainPragmaContext.prototype.constructor = DomainPragmaContext;

AlgebraParser.DomainPragmaContext = DomainPragmaContext;

DomainPragmaContext.prototype.ID = function() {
    return this.getToken(AlgebraParser.ID, 0);
};
DomainPragmaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitDomainPragma(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TransformContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TransformContext.prototype = Object.create(ValueContext.prototype);
TransformContext.prototype.constructor = TransformContext;

AlgebraParser.TransformContext = TransformContext;

TransformContext.prototype.unary = function() {
    return this.getTypedRuleContext(UnaryContext,0);
};

TransformContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
TransformContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitTransform(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function N_tupleContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N_tupleContext.prototype = Object.create(ValueContext.prototype);
N_tupleContext.prototype.constructor = N_tupleContext;

AlgebraParser.N_tupleContext = N_tupleContext;

N_tupleContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
N_tupleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitN_tuple(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ApplicationContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ApplicationContext.prototype = Object.create(ValueContext.prototype);
ApplicationContext.prototype.constructor = ApplicationContext;

AlgebraParser.ApplicationContext = ApplicationContext;

ApplicationContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
ApplicationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitApplication(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MonupleContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MonupleContext.prototype = Object.create(ValueContext.prototype);
MonupleContext.prototype.constructor = MonupleContext;

AlgebraParser.MonupleContext = MonupleContext;

MonupleContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
MonupleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitMonuple(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableContext.prototype = Object.create(ValueContext.prototype);
VariableContext.prototype.constructor = VariableContext;

AlgebraParser.VariableContext = VariableContext;

VariableContext.prototype.NAME = function() {
    return this.getToken(AlgebraParser.NAME, 0);
};
VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OperationContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OperationContext.prototype = Object.create(ValueContext.prototype);
OperationContext.prototype.constructor = OperationContext;

AlgebraParser.OperationContext = OperationContext;

OperationContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

OperationContext.prototype.infix = function() {
    return this.getTypedRuleContext(InfixContext,0);
};
OperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};



AlgebraParser.prototype.value = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ValueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, AlgebraParser.RULE_value, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DomainPragmaContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 7;
            this.match(AlgebraParser.T__0);
            this.state = 8;
            this.match(AlgebraParser.ID);
            this.state = 9;
            this.match(AlgebraParser.T__1);
            break;

        case 2:
            localctx = new VariableContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 10;
            this.match(AlgebraParser.NAME);
            break;

        case 3:
            localctx = new TransformContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 11;
            this.unary();
            this.state = 12;
            this.value(4);
            break;

        case 4:
            localctx = new N_tupleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            this.match(AlgebraParser.T__2);
            this.state = 15;
            this.value(0);
            this.state = 18; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 16;
            		this.match(AlgebraParser.T__3);
            		this.state = 17;
            		this.value(0);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 20; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===AlgebraParser.T__3) {
                this.state = 22;
                this.match(AlgebraParser.T__3);
            }

            this.state = 25;
            this.match(AlgebraParser.T__4);
            break;

        case 5:
            localctx = new MonupleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 27;
            this.match(AlgebraParser.T__2);
            this.state = 28;
            this.value(0);
            this.state = 29;
            this.match(AlgebraParser.T__4);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 41;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 39;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new OperationContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, AlgebraParser.RULE_value);
                    this.state = 33;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 34;
                    this.infix();
                    this.state = 35;
                    this.value(6);
                    break;

                case 2:
                    localctx = new ApplicationContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, AlgebraParser.RULE_value);
                    this.state = 37;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 38;
                    this.value(4);
                    break;

                } 
            }
            this.state = 43;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function InfixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AlgebraParser.RULE_infix;
    return this;
}

InfixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfixContext.prototype.constructor = InfixContext;


InfixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitInfix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AlgebraParser.InfixContext = InfixContext;

AlgebraParser.prototype.infix = function() {

    var localctx = new InfixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, AlgebraParser.RULE_infix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AlgebraParser.T__5) | (1 << AlgebraParser.T__6) | (1 << AlgebraParser.T__7) | (1 << AlgebraParser.T__8) | (1 << AlgebraParser.T__9) | (1 << AlgebraParser.T__10) | (1 << AlgebraParser.T__11) | (1 << AlgebraParser.T__12) | (1 << AlgebraParser.T__13) | (1 << AlgebraParser.T__14) | (1 << AlgebraParser.T__15) | (1 << AlgebraParser.T__16) | (1 << AlgebraParser.T__17) | (1 << AlgebraParser.T__18) | (1 << AlgebraParser.T__19) | (1 << AlgebraParser.T__20) | (1 << AlgebraParser.T__21))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AlgebraParser.RULE_unary;
    return this;
}

UnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryContext.prototype.constructor = UnaryContext;


UnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AlgebraVisitor ) {
        return visitor.visitUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AlgebraParser.UnaryContext = UnaryContext;

AlgebraParser.prototype.unary = function() {

    var localctx = new UnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, AlgebraParser.RULE_unary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AlgebraParser.T__16) | (1 << AlgebraParser.T__22) | (1 << AlgebraParser.T__23) | (1 << AlgebraParser.T__24) | (1 << AlgebraParser.T__25))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


AlgebraParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.value_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

AlgebraParser.prototype.value_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.AlgebraParser = AlgebraParser;
