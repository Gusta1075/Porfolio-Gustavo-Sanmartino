let estacion = prompt("coloca la estacion del año");

switch (estacion){
	case "invierno":
		alert("Mira nuestras ofertas de invierno");
		break;

	case "primavera":
		alert("Nuestras prendas de primavera son de lujo");
		break;

	case "verano":
		alert("Las remeras tienen muchos colores");
		break;

	case "otoño":
		alert("Donde había color ya no queda nada.");
		break;

	default:
		alert("Eso no es una estación.");
		break;
}