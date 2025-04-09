//'use strict'

f = 1;
NaN = 1;
Infinity = 0;
function f(a, a) { console.log('outer f', a); }
delete f; // error  ->객체 뭐시기에서만 가능
{
    f(100);
    function f(a) { console.log('block f', a); }
}
f(200);
