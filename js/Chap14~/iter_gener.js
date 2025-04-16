// ex1 sol
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
console.log('\n'.repeat(2));

const gener = add();
const {value} = gener.next();
console.log(value);

rl.on('line', answer => {
    // console.log('line.answer>>', answer);
    const { value, done } = gener.next(+answer);    //or Number(answear)
    console.log(value);
    if (answer === 'bye') rl.close();

    if(done) {
        console.log('Total is ', value);
        rl.close();
    }
    else {
        console.log(value);
    }
    
}).on('close', () => {
    process.exit();
});

function* add() {
    const a = yield 'first number?';
    const b = yield 'second number?';
    return a + b;
}