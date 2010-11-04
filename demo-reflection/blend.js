
function mirrorCanvas(canvasA, canvasB, width, height) {

                var mapA = canvasA.getContext("2d").getImageData(0,0,width,height);
                var c=0;var d=0;
                for(var i=0;i<height;i++) { // square stupid 
			d = (width*height) - i*width;
                        for(var j=0;j<width;j++) { // square stupid
                                var r_A = mapA.data[c+0];
                                var g_A = mapA.data[c+1];
                                var b_A = mapA.data[c+2];
                                mapB.data[d+0] = r_A;
                                mapB.data[d+1] = g_A;
                                mapB.data[d+2] = b_A;
                                mapB.data[d+3] = 255;
                                c+=4;
                        }
                }
                canvasB.getContext("2d").putImageData(mapB, 0,0);
}

