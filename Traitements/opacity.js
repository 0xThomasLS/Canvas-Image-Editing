function opacity(alpha) {
	for(var x=0; x < img.width; x++) {
		for(var y=0; y < img.height; y++) {
			var pixel = getPixel(imgData, x, y);
			setPixel(imgData, x, y, pixel.R, pixel.G, pixel.B, alpha);
		}
	}
	canvas.putImageData(imgData, 0, 0);
}