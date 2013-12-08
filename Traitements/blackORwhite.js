limit = 125; // Limite entre noir ou blanc (entre 0 et 255)
for(var x=0; x < img.width; x++) {
	for(var y=0; y < img.height; y++) {
		var pixel = getPixel(imgData, x, y);
		var gris = (pixel.R+pixel.G+pixel.B)/3;

		if(gris <= limit) {
			var N = 0;
		}
		else {
			var N = 255;
		}

		setPixel(imgDestination, x, y, N, N, N, pixel.alpha);
	}
}
canvas.putImageData(imgDestination, 0, 0);