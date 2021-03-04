const p= 'Tinc un cotxe de color blau.';
console.log(p.replace('blau', 'verd'));
console.log (p.replace (/\o/g,'u'));

/*Otra forma de substituir las o por las u:
var pArray = p.split("");
for (var i = 0; i < 9; i++) {
    if( pArray[i]==='o' ){ 
        pArray[i]='u';
       
    }
 console.log(p.toString());
}*/

