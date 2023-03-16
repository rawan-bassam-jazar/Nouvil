var stars=document.getElementById("stars");
var moon=document.getElementById("moon");
var mountain1=document.getElementById("mountain1");
var mountain2=document.getElementById("mountain2");
var river=document.getElementById("river");
var boat=document.getElementById("boat");
var nouvil=document.querySelector(".nouvil");
var trees=document.getElementById("trees");
var landing=document.querySelector(".landing");

window.onscroll=function() {
    // console.log(scrollY);
    let scrollValue=scrollY;
    stars.style.left=scrollValue+"px";
    moon.style.top=scrollValue*6+"px";
    mountain1.style.top=scrollValue*2 +"px";
    mountain2.style.top=scrollValue*1.5+"px";
    river.style.top=scrollValue +"px";
    boat.style.top=scrollValue +"px";
    boat.style.left=scrollValue*3.5+"px";
    
    // trees.style.bottom="20px";
    nouvil.style.fontSize=scrollValue+"px";
    if(scrollY>=47)
    {
        nouvil.style.fontSize=47+"px";
        nouvil.style.position="fixed";
    }

    if(scrollY>=358)
    {
        nouvil.style.display="none";
    }
    else{
        nouvil.style.display="block";
    }
 

    
    if(scrollY>57) {
        landing.style.background="linear-gradient(to bottom ,#00498d,#76b1e7)";
    }
    else {
        landing.style.background="linear-gradient(to bottom , rgb(18, 0, 22) ,rgb(42, 0, 43))";
    }


}

