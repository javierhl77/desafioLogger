const {faker} = require('@faker-js/faker');

const generarUsuarios = () => {
     const numeroProductos = parseInt(faker.string.numeric());
     let productos = [];

     for (i=0; i < numeroProductos; i++){
        productos.push(generarProductos());
     }
    return {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        productos
        
    }

}

const generarProductos = () => {
     
    
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        stock: faker.datatype.number(),
        description: faker.commerce.productDescription(),
        thumbnail: faker.image.imageUrl(),
        }

}

module.exports = generarUsuarios;