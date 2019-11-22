class Product {
    /* inializador */
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;

    }
}
/* En esta clase habra metodo para agregar a la ui */
class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        /* crea nuevo elemento */
        const element = document.createElement('div');
        /* alt 96 ` */
        element.innerHTML = `
            <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto</strong>: ${product.name}
                <strong>Precio</strong>: ${product.price}
                <strong>Año</strong>: ${product.year}
                <a href="#" name="delete" class="btn btn-danger">Borrar</a>
            </div>
            
            </div>
            `
            ;
            /* agrega un elemento hijo productlist que es */
            productList.appendChild(element);
            
    }
    resetForm(){
        document.getElementById("product-form").reset();
    }
    deleteProduct(element) {
        /* si este tiene el nombre delete */
        if (element.name === 'delete') {
            /* ME POSICIONO en el elmento padre para eliminar toda la card */
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Producto elimiando","info");
        }
    }
    showMessage(message,cssClass) {
        const div= document.createElement('div');
        /* le agrega una clase de css */
        div.className= `alert alert-${cssClass} mt-4`;
        /* creamos un texto dentro del div */
        div.appendChild(document.createTextNode(message));
        /* mostrar en el dom */

        const container= document.querySelector('.container');/* guardo todo el container */
        const app= document.querySelector('#App');/* guardo todo lo del app el michi(id) */
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        },3000);
    }
}
/* cuando el usuario interactura con el html */
/* Eventos de mi app, dom events */


/* capturar eventos del formulario (SUBMIT) y ejecuta una function*/
document.getElementById("product-form")
.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;
    

    /* console.log(new Product(name,price,year));
    agrega los datos al objeto */
    const product = new Product(name, price, year);

    /* ahora llamo al metodo addproduct */
    const ui = new UI();
    if (name ===""|| price ===""|| year==="") {
        return ui.showMessage("Complete los datos,por favor","danger");
    }
    ui.addProduct(product);
    /* limpia los campos */
    ui.resetForm();
    ui.showMessage("Producto Agregado","success");

    /* cancelar refresh al obtener datos */
    e.preventDefault();


});

/* capturar elemento del product list click*/
document.getElementById("product-list").addEventListener('click',function(e){

 const ui= new UI();
 ui.deleteProduct(e.target);/* muestra lo que esta dando clic */
})