/*let producto = parseInt(prompt('Que producto deseas comprar? 1.ocean - 2.lipa - 3.amelie - 4.chula'))
let seguirComprando = true 
let totalCompra = 0
let decision
*/
//arreglo de productos
const productosArray = []

//OBJETO Y CLASE

class NuevoProducto {
  constructor(nombre, precio, stock, id){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.id = id
  }
}

const ocean= new NuevoProducto('Ocean',6000,20, 1);
productosArray.push(ocean);
const lipa = new NuevoProducto('Lipa', 7500, 8, 2);
productosArray.push(lipa);
const amelie = new NuevoProducto('Amelie', 7500, 5, 3);
productosArray.push(amelie);
const chula = new NuevoProducto('Chula', 6000,10);
productosArray.push(chula);

//console.log(productosArray)

//DOM

const selectProd = document.getElementById ('lista')

productosArray.forEach(elemento=>{
        const optionProd = document.createElement ('option')
        optionProd.innerText = `${elemento.nombre} : $${elemento.precio}`
        optionProd.setAttribute('id', `${elemento.id}`)
        selectProd.append(optionProd)
})

//EVENTOS 
const carrito = []

const button = document.getElementById('button')
const finalizar = document.getElementById('finalizar')

button.onclick = () => {
        const indexProd = selectProd.selectedIndex
        const prooductoSeleccionado = productosArray [indexProd]
        carrito.push(prooductoSeleccionado)
}



finalizar.onclick = () => Swal.fire({
        title: 'Elegiste ${carrito.length} productos. El total de tu compra es ${total}',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff ',
      })

/*let total = 0
        carrito.forEach (prod =>{
                total = total + prod.precio
})

*/

//STORAGE Y JSON
const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('titulo')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')

const infoUsuario = {}

//evento 

formularioUsuario.onsubmit = (e) =>{
        e.preventDefault ()
        infoUsuario.nombre = nombreUsuario.value
        infoUsuario.apellido = apellidoUsuario.value
        localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !==""){
        titulo.innerText = `Hola ${infoUsuarioStorage.nombre}, bienvenida de nuevo! `
}




/*
while(seguirComprando===true){}
        if (producto === ocean.id){
                totalCompra = totalCompra + ocean.precio
        }   else if (producto=== lipa.id){
                totalCompra = totalCompra + lipa.precio
        }   else if (producto=== amelie){
                totalCompra = totalCompra + amelie.precio
        }   else if (producto=== chula){
                totalCompra = totalCompra + chula.precio
        }
totalCompra = totalCompra + productosArray[producto-1].precio
decision = parseInt (prompt ('Quieres seguir comprando? 1.Si - 2.No'))
if(decision===1){
    producto = parseInt(prompt('Que producto deseas comprar? 1.Ocean - 2.Lipa - 3.Amelie -4.Chula'))
} else{
    seguirComprando = false
}
}
const totalCompraConDescuento = descuento (totalCompra)
alert(`El total de tu compra es ${totalCompra}`)
//funcion descuento
function descuento(valor){
let descuento = 0
if(valor<=6500){
    descuento = 5
} else if(valor >7000){
    descuento = 10
}
let valorDescuento = valor * (descuento/100)
let valorFinal = valor - valorDescuento
return valorFinal
}*/