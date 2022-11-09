const slider = document.querySelector("#slider");
const output = document.querySelector("output");
document.addEventListener('DOMContentLoaded', function() {
  output.value = slider.value;
});

slider.addEventListener ("input", function () {
   output.value = this.value;
});
            //Checkt, ob Canvas in Browser unterstützt
            
            function checkSupported() {
                canvas = document.getElementById ('canvas')
                if (canvas.getContext) {
                    ctx = canvas.getContext('2d');
                    this.gridSize = 10;
                    start ();   
                }
                else {
                alert ("We're sorry, but your browser does not support the canvas tag." +
                "Please use any web browser other than Internet Explorer.");    
                }
            }
            //https://riptutorial.com/html5-canvas/example/16986/animate-an-image-across-the-canvas Edited: Moritz Otterbein
            window.onload=(function(){
                
                // canvas related variables
                var canvas=document.getElementById("canvas");
                var ctx=canvas.getContext("2d");
                var cw=canvas.width;
                var ch=canvas.height;
            
                // animation related variables
                var minX=-600;        // Keep the image animating 
                var maxX= 0;       // between minX & maxX
                var x=minX;         // The current X-coordinate
                var speedX=0.5;       // The image will move at 1px per loop 
                var direction=1;    // The image direction: 1==righward, -1==leftward
                var y=20;           // The Y-coordinate
            
                // Load a new image
                // IMPORTANT!!! You must give the image time to load by using img.onload!
                var img=new Image();
                img.onload=start;
                img.src="Tribes.jpg";
                function start(){
                    // the image is fully loaded sostart animating
                    requestAnimationFrame(animate);
                }
            
                function animate(time){
            
                    // clear the canvas
                    ctx.clearRect(0,0,cw,ch);
            
                    // draw
                    ctx.drawImage(img,x,y);
            
                    // update
                    x += speedX * direction * slider.value;
                    // keep "x" inside min & max
                    
                    if(x<minX){ x=minX; direction*=-1; }
                    if(x>maxX){ x=maxX; direction*=-1; }
                    /*if(x<minX){
                        ctx.drawImage(img,600,y);
                    }*/
                    // request another loop of animation
                    requestAnimationFrame(animate);
                }
            
            }); // end $(function(){});

