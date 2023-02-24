/*let productos = [ 
	{ id: 1, nombre: "camisa blanca", precio: 1250, seccion: "verano" },
	{ id: 2, nombre: "camisa verde", precio: 1150, seccion: "invierno" },
	{ id: 3, nombre: "camisa amarilla", precio: 1350, seccion: "primavera"},
	{ id: 4, nombre: "camisa gris", precio: 1450, seccion: "otoño" },
	{ id: 5, nombre: "camisa azul", precio: 750, seccion: "indefinido"},
	];
	
	//For each (recorro el arreglo.)
	productos.forEach(producto => console.log(producto.nombre + " " + producto.seccion + 
	" " + producto.precio));
		
		//ciclo for (falto de la primera entrega.)
	for(let index = 0; index <productos.length; index++) {
		 console.log(productos[index]);
	}

		//find  encontrar element 
	nombre = prompt("ingrese el nombre del producto");
	let buscar = productos.find(producto => producto.nombre === nombre);
		console.log(buscar);

	let mensaje = `
	id: ${buscar.id}
	nombre: ${buscar.nombre}
	seccion: ${buscar.seccion}
	precio: ${buscar.precio}`;

	alert(mensaje);


	//filter
	let filtrados = productos.filter(item => item.precio > 1000);
		console.log(filtrados);

	//some verifico si existe algun elemente con una condicion.
	
	console.log(productos.some(item => item.precio === 1250));
	console.log(productos.some(item => item.nombre  === "pantalon"));
	console.log(productos.some(item => item.producto  === "camisa azul"));

		
	// map transformo los datos y los agrupo por nombre y seccion.

	let nombres = productos.map(item => item.nombre);
	console.log(nombres);
	let precio = productos.map(item => item.precio);
	console.log(precio);

	let precioPromocional = productos.map(item => {
		return {
			id: item.id,
			nombre: item.nombre, 
			seccion: item.seccion, 
			precio: item.precio - item.precio * 0.30}
		});
			console.log(precioPromocional);

		// reduce sumo el total de todos los productos del array

		let totalPrecios = productos.reduce((acum, item) => acum + item.precio, 0);
		console.log(totalPrecios);
	
	//.push (agrego linea 6 al array) unshift (agrego linea 0 al array).
	let index = productos.length;
	productos.push({id: 6, nombre:"Camisa floreada", precio: 350, seccion: "Alegria"});
	productos.unshift({id: 0, titulo:"CAMISAS", seccion: "estaciones del año"});
	console.log(productos);

		//saco productos de atras y de adelante del array
	 productos.pop();
	 productos.shift();
	 console.log(productos);

		// saco productos del posicones diferentes.
	 productos.splice(2, 1);
	 console.log(productos);

	 
	 console.log(productos.indexOf("Camisa verde"));

	 console.log(productos.includes("Camisa verde"));
	 console.log(productos.includes("pantalones"));

	//ejercicio para buscar un producto en Stock.
	productos = prompt("ingrese el producto a buscar");
	alert(productos.includes("Camisa verde"));
	alert(productos.includes("pantalones"));

	*/

	let carrito = [
		{ id: 1, nombre: "camisa", precio: 1000 },
        { id: 2, nombre: "pantalon", precio: 1000 },
        { id: 3, nombre: "media", precio: 1000 },
    	{ id: 4, nombre: "gorra", precio: 1000 },
	];
	let carritoStorage = localStorage.getItem("carrito");
	
	if(carritoStorage){
	  carrito = JSON.parse(carritoStorage);
	}else{
	  let comentario = document.createElement("div");
	  comentario.innerHTML = "El carrito esta vacio";
	  document.body.append(comentario);
	}
	
	carrito.forEach(item => {
	  let div = document.createElement("div");
	  div.innerHTML = `
	  <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
       <b>$${item.precio}</b>
	  `;
	
	  document.body.append(div);
	});







