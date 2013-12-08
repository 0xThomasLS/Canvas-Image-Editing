alpha = 100; // Transparence entre 0 et 255
for(var x=0; x < img.width; x++) {
	for(var y=0; y < img.height; y++) {
		var pixel = getPixel(imgData, x, y);
		setPixel(imgDestination, x, y, pixel.R, pixel.G, pixel.B, alpha);
	}
}
canvas.putImageData(imgDestination, 0, 0);