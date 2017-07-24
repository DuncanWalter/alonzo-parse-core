// Generated from .\src\grammar\Algebra.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002 \u0098\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0006\u001c",
    "|\n\u001c\r\u001c\u000e\u001c}\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0007\u001d\u0084\n\u001d\f\u001d\u000e\u001d\u0087\u000b\u001d",
    "\u0003\u001e\u0006\u001e\u008a\n\u001e\r\u001e\u000e\u001e\u008b\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0097\n\u001f\u0002\u0002",
    " \u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= \u0003\u0002\u0006",
    "\u0005\u0002\u000b\f\u000f\u000f\"\"\u0006\u0002//C\\aac|\u0007\u0002",
    "//2;C\\aac|\u0005\u00022;C\\c|\u0002\u009b\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
    "\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
    "\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002",
    "\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0003",
    "?\u0003\u0002\u0002\u0002\u0005B\u0003\u0002\u0002\u0002\u0007E\u0003",
    "\u0002\u0002\u0002\tG\u0003\u0002\u0002\u0002\u000bI\u0003\u0002\u0002",
    "\u0002\rK\u0003\u0002\u0002\u0002\u000fN\u0003\u0002\u0002\u0002\u0011",
    "P\u0003\u0002\u0002\u0002\u0013S\u0003\u0002\u0002\u0002\u0015U\u0003",
    "\u0002\u0002\u0002\u0017W\u0003\u0002\u0002\u0002\u0019Y\u0003\u0002",
    "\u0002\u0002\u001b\\\u0003\u0002\u0002\u0002\u001d_\u0003\u0002\u0002",
    "\u0002\u001fb\u0003\u0002\u0002\u0002!d\u0003\u0002\u0002\u0002#f\u0003",
    "\u0002\u0002\u0002%h\u0003\u0002\u0002\u0002\'j\u0003\u0002\u0002\u0002",
    ")l\u0003\u0002\u0002\u0002+n\u0003\u0002\u0002\u0002-p\u0003\u0002\u0002",
    "\u0002/r\u0003\u0002\u0002\u00021t\u0003\u0002\u0002\u00023v\u0003\u0002",
    "\u0002\u00025x\u0003\u0002\u0002\u00027{\u0003\u0002\u0002\u00029\u0081",
    "\u0003\u0002\u0002\u0002;\u0089\u0003\u0002\u0002\u0002=\u0096\u0003",
    "\u0002\u0002\u0002?@\u0007}\u0002\u0002@A\u0007B\u0002\u0002A\u0004",
    "\u0003\u0002\u0002\u0002BC\u0007B\u0002\u0002CD\u0007\u007f\u0002\u0002",
    "D\u0006\u0003\u0002\u0002\u0002EF\u0007*\u0002\u0002F\b\u0003\u0002",
    "\u0002\u0002GH\u0007.\u0002\u0002H\n\u0003\u0002\u0002\u0002IJ\u0007",
    "+\u0002\u0002J\f\u0003\u0002\u0002\u0002KL\u0007<\u0002\u0002LM\u0007",
    "?\u0002\u0002M\u000e\u0003\u0002\u0002\u0002NO\u0007<\u0002\u0002O\u0010",
    "\u0003\u0002\u0002\u0002PQ\u0007/\u0002\u0002QR\u0007@\u0002\u0002R",
    "\u0012\u0003\u0002\u0002\u0002ST\u0007?\u0002\u0002T\u0014\u0003\u0002",
    "\u0002\u0002UV\u0007~\u0002\u0002V\u0016\u0003\u0002\u0002\u0002WX\u0007",
    "(\u0002\u0002X\u0018\u0003\u0002\u0002\u0002YZ\u0007#\u0002\u0002Z[",
    "\u0007?\u0002\u0002[\u001a\u0003\u0002\u0002\u0002\\]\u0007@\u0002\u0002",
    "]^\u0007?\u0002\u0002^\u001c\u0003\u0002\u0002\u0002_`\u0007>\u0002",
    "\u0002`a\u0007?\u0002\u0002a\u001e\u0003\u0002\u0002\u0002bc\u0007@",
    "\u0002\u0002c \u0003\u0002\u0002\u0002de\u0007>\u0002\u0002e\"\u0003",
    "\u0002\u0002\u0002fg\u0007/\u0002\u0002g$\u0003\u0002\u0002\u0002hi",
    "\u0007-\u0002\u0002i&\u0003\u0002\u0002\u0002jk\u0007\'\u0002\u0002",
    "k(\u0003\u0002\u0002\u0002lm\u00071\u0002\u0002m*\u0003\u0002\u0002",
    "\u0002no\u0007,\u0002\u0002o,\u0003\u0002\u0002\u0002pq\u0007`\u0002",
    "\u0002q.\u0003\u0002\u0002\u0002rs\u0007\u0080\u0002\u0002s0\u0003\u0002",
    "\u0002\u0002tu\u0007#\u0002\u0002u2\u0003\u0002\u0002\u0002vw\u0007",
    "%\u0002\u0002w4\u0003\u0002\u0002\u0002xy\u00070\u0002\u0002y6\u0003",
    "\u0002\u0002\u0002z|\t\u0002\u0002\u0002{z\u0003\u0002\u0002\u0002|",
    "}\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002",
    "\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080\b\u001c\u0002\u0002",
    "\u00808\u0003\u0002\u0002\u0002\u0081\u0085\t\u0003\u0002\u0002\u0082",
    "\u0084\t\u0004\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086:\u0003\u0002\u0002\u0002\u0087",
    "\u0085\u0003\u0002\u0002\u0002\u0088\u008a\t\u0005\u0002\u0002\u0089",
    "\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b",
    "\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c",
    "<\u0003\u0002\u0002\u0002\u008d\u008e\u0007v\u0002\u0002\u008e\u008f",
    "\u0007t\u0002\u0002\u008f\u0090\u0007w\u0002\u0002\u0090\u0097\u0007",
    "g\u0002\u0002\u0091\u0092\u0007h\u0002\u0002\u0092\u0093\u0007c\u0002",
    "\u0002\u0093\u0094\u0007n\u0002\u0002\u0094\u0095\u0007u\u0002\u0002",
    "\u0095\u0097\u0007g\u0002\u0002\u0096\u008d\u0003\u0002\u0002\u0002",
    "\u0096\u0091\u0003\u0002\u0002\u0002\u0097>\u0003\u0002\u0002\u0002",
    "\u0007\u0002}\u0085\u008b\u0096\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function AlgebraLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

AlgebraLexer.prototype = Object.create(antlr4.Lexer.prototype);
AlgebraLexer.prototype.constructor = AlgebraLexer;

AlgebraLexer.EOF = antlr4.Token.EOF;
AlgebraLexer.T__0 = 1;
AlgebraLexer.T__1 = 2;
AlgebraLexer.T__2 = 3;
AlgebraLexer.T__3 = 4;
AlgebraLexer.T__4 = 5;
AlgebraLexer.T__5 = 6;
AlgebraLexer.T__6 = 7;
AlgebraLexer.T__7 = 8;
AlgebraLexer.T__8 = 9;
AlgebraLexer.T__9 = 10;
AlgebraLexer.T__10 = 11;
AlgebraLexer.T__11 = 12;
AlgebraLexer.T__12 = 13;
AlgebraLexer.T__13 = 14;
AlgebraLexer.T__14 = 15;
AlgebraLexer.T__15 = 16;
AlgebraLexer.T__16 = 17;
AlgebraLexer.T__17 = 18;
AlgebraLexer.T__18 = 19;
AlgebraLexer.T__19 = 20;
AlgebraLexer.T__20 = 21;
AlgebraLexer.T__21 = 22;
AlgebraLexer.T__22 = 23;
AlgebraLexer.T__23 = 24;
AlgebraLexer.T__24 = 25;
AlgebraLexer.T__25 = 26;
AlgebraLexer.WS = 27;
AlgebraLexer.NAME = 28;
AlgebraLexer.ID = 29;
AlgebraLexer.BOOL = 30;

AlgebraLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

AlgebraLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

AlgebraLexer.prototype.literalNames = [ null, "'{@'", "'@}'", "'('", "','", 
                                        "')'", "':='", "':'", "'->'", "'='", 
                                        "'|'", "'&'", "'!='", "'>='", "'<='", 
                                        "'>'", "'<'", "'-'", "'+'", "'%'", 
                                        "'/'", "'*'", "'^'", "'~'", "'!'", 
                                        "'#'", "'.'" ];

AlgebraLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, "WS", "NAME", 
                                         "ID", "BOOL" ];

AlgebraLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "T__11", "T__12", "T__13", 
                                     "T__14", "T__15", "T__16", "T__17", 
                                     "T__18", "T__19", "T__20", "T__21", 
                                     "T__22", "T__23", "T__24", "T__25", 
                                     "WS", "NAME", "ID", "BOOL" ];

AlgebraLexer.prototype.grammarFileName = "Algebra.g4";



exports.AlgebraLexer = AlgebraLexer;

