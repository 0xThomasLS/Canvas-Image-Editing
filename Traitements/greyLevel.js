function greyLevel() {
	for(var x=0; x < img.width; x++) {
		for(var y=0; y < img.height; y++) {
			var pixel = getPixel(imgData, x, y);
			var gris = (pixel.R*0.2175)+(pixel.G*0.7154)+(pixel.B*0.0721);

			setPixel(imgData, x, y, gris, gris, gris, pixel.alpha);
		}
	}
	canvas.putImageData(imgData, 0, 0);
}