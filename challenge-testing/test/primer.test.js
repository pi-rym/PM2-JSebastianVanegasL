/*
-CarritoCompra deberia ser una clase
-carritoCompra deberia ser una instancia de la clase Carrito Compra
-deberia guardar prooducto en una lista
-deberia tener un metodo llamado agregarProducto
-deberia tener un metodo  llamado calcularTotal
-deberia tener un metodo  llamado aplicarDescuento
-El metodo agregarProducto deberia poder agregar un producto a la lista 
-El metodo calcular Total deberia poder calcular el total de la compra
El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra
*/

const CarritoCompra = require('../index')

describe("clase CarritoCompra", ()=>{
    let carritoCompra;
    beforeEach(()=>{
        carritoCompra = new CarritoCompra();
    })
    describe('Sobre el constructor de la clase CarritoCompra', ()=>{
        it('CarritoCompra deberia ser una clase', ()=>{
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })
        it('carritoCompra deberia ser una instancia de la clase Carrito Compra', ()=>{
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })
        it('deberia guardar prooducto en una lista', ()=>{
            expect(carritoCompra.products).toEqual([])
        })
        it('deberia tener un metodo llamado agregarProducto', ()=>{
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })
        it('deberia tener un metodo  llamado calcularTotal', ()=>{
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })
        it('deberia tener un metodo  llamado aplicarDescuento', ()=>{
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })
        
        
    })
})

describe('ultimo dos metodos', ()=>{
    let carritoCompra;
    beforeEach(()=>{
        carritoCompra = new CarritoCompra();
    })
    const product1 = {
        name:'teclado negro',
        price: 1000,
        quantity: 5
        
    }
    const product2 = {
        name:'mouse negro',
        price: 500,
        quantity: 10
        
    }
    it('El metodo agregarProducto deberia poder agregar un producto a la lista ', ()=>{
        carritoCompra.agregarProducto(product1)
        expect(carritoCompra.products).toContain(product1)
    })
    it('El metodo calcular Total deberia poder calcular el total de la compra', ()=>{
        carritoCompra.agregarProducto(product1)
        carritoCompra.agregarProducto(product2)

        const totalEx = product1.price * product1.quantity + product2.price * product2.quantity
        const total = carritoCompra.calcularTotal()

        expect(total).toBe(totalEx)
    })
    it('El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra', ()=>{
        carritoCompra.agregarProducto(product1)
        carritoCompra.agregarProducto(product2)

        const subT = product1.price * product1.quantity + product2.price * product2.quantity

        const porcentajeD = 25

        const totalExpect = subT - (subT * (porcentajeD/100))

        const total = carritoCompra.aplicarDescuento(porcentajeD)

        expect(totalExpect).toBe(total)
    })
})



