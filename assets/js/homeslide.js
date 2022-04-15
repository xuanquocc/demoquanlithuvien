var formImg = document.getElementsByClassName("slider")[0].clientWidth;
var changeSlide = document.getElementsByClassName("home-slide")[0];
var change = 0;
var Img = changeSlide.getElementsByTagName("img");
var Max = formImg*Img.length;
Max -= formImg;

function next(){
   if(change < Max) change += formImg;
   else 
   change=0;
    changeSlide.style.marginLeft = '-'+ change + 'px';
}
function pre(){
    if(change==0) change=Max;
    else  
    change -= formImg;
    
    changeSlide.style.marginLeft = '-'+ change + 'px';
}