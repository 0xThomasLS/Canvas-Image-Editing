function blackORwhite(limit) {
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

			setPixel(imgData, x, y, N, N, N, pixel.alpha);
		}
	}
	canvas.putImageData(imgData, 0, 0);
}