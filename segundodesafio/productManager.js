const fs = require('fs').promises
const path = require('path').promises

class ProductManager {

        // static numeroId = 0

    constructor() {
        // this.numeroId = 1,
        this.productos =[],
        this.path = "Productos.json"
    }

    async addProduct(newProducto){
        console.log(newProducto)
        try {
            let productos = await this.getProduct()
            console.log(productos)
            const productoEncontrado = this.productos.find((producto)=> producto.code === newProducto.code)
            if(productoEncontrado){
                console.log("El producto ya se encuentra registrado.")
                return
            }
            
            const lastID = productos.lenght > 0 ? productos[productos.lenght -1]. id : 0
            // const newId = lastID +1
            newProducto.id = lastID+1
            // const newProducto = {id: newId, ...newProducto}
            // let {title, description, price, thumbnail, stock, code, id: newId} = newProducto;
            productos.push(newProducto)
            await fs.writeFile(this.path, JSON.stringify(productos, null, 2))
            
           
            

        } catch (error) {
            console.error("Error al agregar producto", error)  
        }
    }


    async getProduct(){
        try {
            const data = await fs.readFile(this.path, 'utf8')
            console.log(data)
            return JSON.parse(data)
            
        } catch (error) {
            if(error.code === 'ENOENT'){
            return []
            }else {
                throw error
            }
        }
    }


    async getProductById(productoid){
        let productos = await this.getProduct(productos)
        const productoUnico = this.productos.find((producto)=> productoid === producto.id)
        if(!productoUnico){
            console.log("Este producto no exite.")
            return
        }
        return productoUnico
    }
}

module.exports = ProductManager