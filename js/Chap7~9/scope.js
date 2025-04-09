const x = 1;
function printX() {
    console.log(x); //Lexical : 1, Dynamic : 100
}
function set100(){
    const x = 100;
    printX();
}

set100();