grammar Algebra;

WS: [ \t\r\n]+ -> skip ; 

value
: '{@' ID '@}'                      #domainPragma
| NAME                              #variable
| value infix value                 #operation
| unary value                       #transform
| value value                       #application
| '(' value (',' value)+ ','? ')'   #n_tuple   
| '(' value ')'                     #monuple
;

NAME: [_a-zA-Z\-][_0-9a-zA-Z\-]* ;

ID: [0-9a-zA-Z]+ ;

BOOL: 'true' | 'false' ; 

infix
: ':='
| ':' 
| '->'
| '=' 
| '|' 
| '&' 
| '!='
| '>='
| '<='
| '>' 
| '<' 
| '-' 
| '+' 
| '%' 
| '/' 
| '*' 
| '^'  
;

unary
: '-'
| '~'
| '!'
| '#'
| '.'
;