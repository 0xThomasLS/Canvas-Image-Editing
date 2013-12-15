function verticalSymetry() {
	imgDataCopy = canvas.getImageData(0, 0, img.width, img.height);
	for(var x=0; x < img.width; x++) {
		for(var y=0; y < img.height; y++) {
			var pixel = getPixel(imgData, x, y);

			setPixel(imgDataCopy, x, img.height-y, pixel.R, pixel.G, pixel.B, pixel.alpha);
		}
	}

	/* Récupération de la copie
	pour l'inscrire sur le canvas
	d'origine */
	for(var x=0; x < img.width; x++) {
		for(var y=0; y < img.height; y++) {
			var pixel = getPixel(imgDataCopy, x, y);

			setPixel(imgData, x, y, pixel.R, pixel.G, pixel.B, pixel.alpha);
		}
	}
	canvas.putImageData(imgData, 0, 0);
}