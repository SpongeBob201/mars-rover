canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");

rover_width = 100;
 rover_height = 90;

background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10 ;
rover_y = 10 ;

function add (){
    background_imgtag = new Image();
    background_imgtag.onload = upload_background;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = upload_rover;
    rover_imgtag.src = rover_image;



}
function upload_background (){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height); 

}
function upload_rover (){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height); 

    }

window.addEventListener("keydown" ,my_keydown);
function my_keydown (e){
 
    keyPressed = e.keyCode;
    console.log (keyPressed);
if(keyPressed == '38') {
     up();
     console.log("up"); }

     if(keyPressed == '37') {
        left();
        console.log("left"); }

        if(keyPressed == '39') {
            right();
            console.log("right"); }
       
            if(keyPressed == '40') {
                down();
                console.log("down"); }


           
   

}

function up(){
    if (rover_y >=0) {
        rover_y = rover_y-10;
        console.log("when up arrow is pressed ="+rover_x+"-"+rover_y);
        upload_background();
        upload_rover();

    }
}

function down(){
    if (rover_y <=500) {
        rover_y = rover_y+10;
        console.log("when down arrow is pressed ="+rover_x+"-"+rover_y);
        upload_background();
        upload_rover();
        
    }
}

function left(){
    if (rover_x >=0) {
        rover_x = rover_x-10;
        console.log("when left arrow is pressed ="+rover_x+"-"+rover_y);
        upload_background();
        upload_rover();
        
    }
}

function right(){
    if (rover_x <=700) {
        rover_x = rover_x+10;
        console.log("when right arrow is pressed ="+rover_x+"-"+rover_y);
        upload_background();
        upload_rover();
        
    }
}
