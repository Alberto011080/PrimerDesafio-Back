class ProductManager{
    constructor(){
        this.products = [];
    }
    getProducts(){
        return this.products
    }
    //añadimos productos
    addProduct({ title, description, price, thumbnail, code, stock }) {
        // Verificar si el código ya existe
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log("El código del producto ya está en uso.");
    }
         // Generar un ID único
    const id = this.generateUniqueId();

         // Crear el nuevo producto
    const newProduct = {
             id,
             title,
             description,
             price,
             thumbnail,
             code,
             stock
    };

   // Agregar el nuevo producto al array de productos
   this.products.push(newProduct);

   return newProduct;
    }


    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
        throw new Error("Producto no encontrado.");
    }
    return product;
    }
    // Método privado para generar un ID único
    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Obtener productos (debería devolver un arreglo vacío)
console.log(productManager.getProducts()); // []

// Añadir un producto
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

// Obtener productos nuevamente (debería mostrar el producto añadido)
console.log(productManager.getProducts());

try {
    productManager.addProduct({
        title: "producto repetido",
        description: "Este es un producto repetido",
        price: 300,
        thumbnail: "Otra imagen",
        code: "abc123",
        stock: 30
    });
} catch (error) {
    console.error(error.message); // El código del producto ya está en uso.
}

// Obtener un producto por su ID
console.log(productManager.getProductById(productManager.getProducts()[0].id));

