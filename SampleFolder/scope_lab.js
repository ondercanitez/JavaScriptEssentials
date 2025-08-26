'use strict'; // so assigning to undeclared variables throws errors

{
  let a = 1;     // block-scoped
  const b = 2;   // block-scoped, read-only binding
  var c = 3;     // function/global-scoped (leaks out of this block)

  console.log('inside start:', { a, b, c });


  a = 10;                     
  try { b = 20; }             
  catch (e) { console.log('inside b reassignment error:', e.name, e.message); }
  c = 30;                     

  console.log('inside end  :', { a, b, c });
}


console.log('--- outside block ---');

try { a = 100; }              
catch (e) { console.log('outside a error:', e.name, e.message); }

try { b = 200; }              
catch (e) { console.log('outside b error:', e.name, e.message); }

console.log('c before :' , c); 
c = 300;                        
console.log('c after  :' , c);


try { console.log('a is', a); } 
catch (e) { console.log('outside read a error:', e.name, e.message); }
try { console.log('b is', b); } 
catch (e) { console.log('outside read b error:', e.name, e.message); }
