$(function(){
canvas=document.getElementById('MyCanvas');
context=canvas.getContext('2d');
var cw=450;
var moveX=0;
var moveY=150;
var x=0;
var y=0;

for (i=0;i<=450;i++){
    if (i%4==0){
        context.moveTo(0+i,150);
        context.lineTo(0,0);
    }else if(i%4==1){
        context.moveTo(0+i,150);
        context.lineTo(450,0);
    }else if(i%4==2){
        context.moveTo(0+i,150);
        context.lineTo(0,300);
    }else if(i%4==3){
        context.moveTo(0+i,150);
        context.lineTo(450,300);
    }
}
context.strokeStyle='blue';
context.stroke();
});