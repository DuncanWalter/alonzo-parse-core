
export let operations = {
    '^' : (l, r) => Math.pow(l, r),
    '*' : (l, r) => l * r,
    '/' : (l, r) => l / r,
    '%' : (l, r) => l % r,
    '!' : (l, r) => { throw "not yet implemented" },
    '+' : (l, r) => l + r,
    '-' : (l, r) => l - r,
    '<' : (l, r) => l < r,
    '>' : (l, r) => l > r,
    '<=': (l, r) => l <= r,
    '>=': (l, r) => l >= r,
    '&' : (l, r) => l && r,
    '|' : (l, r) => l || r,
    '=' : (l, r) => l == r,
    '->': (l, r) => !l || r,
    ':' : (l, r) => r ? l : undefined,
    ':=': (l, r) => { throw "not yet implemented" },
};

let symbolOrder = ['^','*','/','%','!','+','-','<','>','<=','>=','!=','=','&','|','->',':',':='];
export let symbolTable = symbolOrder.reduce((acc, sym, ind)=>{acc[sym]=ind; return acc;}, {});


