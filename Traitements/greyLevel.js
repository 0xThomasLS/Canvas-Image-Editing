for(var x=0; x < img.width; x++) {
	for(var y=0; y < img.height; y++) {
		var pixel = getPixel(imgData, x, y);
		var gris = (pixel.R+pixel.G+pixel.B)/3;

		setPixel(imgDestination, x, y, gris, gris, gris, pixel.alpha);
	}
}
canvas.putImageData(imgDestination, 0, 0);