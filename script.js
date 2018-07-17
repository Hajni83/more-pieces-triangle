$(function(){
canvas=document.getElementById('MyCanvas');
context=canvas.getContext('2d');

for (i=0;i<=300;i++){
    if (i%4==0){
        context.moveTo(450,150);
        context.lineTo(0,0+i);
    }else if(i%4==1){
        context.moveTo(0,150);
        context.lineTo(450,0+i);
    }else if(i%4==2){
        context.moveTo(450,150);
        context.lineTo(0,300);
    }else if(i%4==3){
        context.moveTo(450,150);
        context.lineTo(450,300);
    }
}
context.strokeStyle='blue';
context.stroke();
});