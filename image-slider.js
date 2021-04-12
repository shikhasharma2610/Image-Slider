var prev=document.getElementById('previous');
var next=document.getElementById('next');
var arr=["img1.bmp","img2.bmp","img3.bmp","img4.bmp","img6.bmp","img7.bmp","img8.bmp","img9.bmp","img10.bmp"];
var i=0;
next.addEventListener('click',function(){
    i++;
    if (i>arr.length-1){
        i=0;
    }
    document.getElementById("image").src=arr[i];
})
prev.addEventListener('click',function(){
    i--;
    if (i<0){
        i=arr.length-1;
    }
    document.getElementById("image").src=arr[i];
})