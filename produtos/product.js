const os = require('os');
var user = os.userInfo();

console.log(`minha aplicação de produtos- por ${user.username}`);

console.log(module);

const product = require('./product2')

console.log(module);

const callback = function (err) {
    if (err) throw err;
    console.log('Saved!');
}

console.log(process.argv);
console.log(process.argv[2]);

console.log(process.argv[3]);

console.log(process.argv[4] == "bob" ? "sim" : "nao");
