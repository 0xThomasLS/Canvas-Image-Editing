function pixelBlur(nbPixel) {
	for(var x=0; x<=(img.width-nbPixel); x+=nbPixel) {
		for(var y=0; y<=(img.height-nbPixel); y+=nbPixel) {
			var R = 0;
			var G = 0;
			var B = 0;

			for(var h=0; h<nbPixel; h++) {
				for(var v=0; v<nbPixel; v++) {
					var pixel = getPixel(imgData, x+h, y+v);
					R += pixel.R;
					G += pixel.G;
					B += pixel.B;
				}
			}

			// Calcul des moyennes des différentes composantes
			var avgR = Math.round(R/(nbPixel*nbPixel));
			var avgG = Math.round(G/(nbPixel*nbPixel));
			var avgB = Math.round(B/(nbPixel*nbPixel));

			// Affectation des nouvelles couleurs à chaque pixels
			for(var h=0; h<nbPixel; h++) {
				for(var v=0; v<nbPixel; v++) {
					setPixel(imgDestination, x+h, y+v, avgR, avgG, avgB);
				}
			}
		}
	}
	canvas.putImageData(imgDestination, 0, 0);
}