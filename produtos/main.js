const Products = require('./produtos')

const initApp = () => {
    
    Products.Init()

    //var comm = process.argv[4];
    var inputData = process.argv[2];

    console.log(Products.GetById(inputData))

    //console.log(comm)
    console.log(inputData)

    switch (inputData) {
        case 'get':
            console.log('Products(data)')
            break;
        case 'list':
            console.log(Products.List())
            break;
        case 'add':
            Products.Insert({ id: Math.random(3), name: 'novo produto' }, () =>{
                console.log('Adicionado')
            })
            break;
        case 'update':
    
            break;
        case 'delete':

            break;
        default:
            break;
    }
    //console.log(Products(input))
}

initApp();