// Inclure un traitement d'image
function include(file) {
	if(window.XMLHttpRequest) obj = new XMLHttpRequest(); //Pour Firefox, Opera,...
    else if(window.ActiveXObject) obj = new ActiveXObject("Microsoft.XMLHTTP"); //Pour Internet Explorer 
    else return(false);
    if (obj.overrideMimeType) obj.overrideMimeType("text/xml"); //Évite un bug de Safari

    obj.open("GET", file, false);
    obj.send(null);
   
    if(obj.readyState == 4) return obj.responseText;
    else return false;
}

// Défini les composants RVB et alpha d'un pixel de coordonnées x, y
function setPixel(img, x, y, R, G, B, alpha) {
	if(alpha == undefined) alpha = 255;
	if(x >= 0 && x < img.width && y >= 0 && y < img.height) {
		var position = (y*img.width+x)*4;
		img.data[position] = R;
		img.data[position+1] = G;
		img.data[position+2] = B;
		img.data[position+3] = alpha;
	}
}

// Retourne un objet avec les composantes RVB et alpha d'un pixel de l'image source      
function getPixel(img, x, y){
	var position = (y*img.width+x)*4;
	var tab = {
		R : img.data[position],
		G : img.data[position+1],
		B : img.data[position+2],
		alpha : img.data[position+3]
	};

	return tab;
}