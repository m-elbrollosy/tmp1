const icon =document.querySelector(".icon");
const showUl =document.querySelector("ul");
const openIcon = document.querySelector(".header .links .icon span:nth-child(2)");
//last page icons div
const socialInfo = document.querySelector(".info .social");
//last page icons
const socialIcons = document.querySelectorAll(".social i");

icon.addEventListener("click", function () {
    
    //console.log(openIcon);
    showUl.classList.toggle("hidden");
    
    if(showUl.classList == "hidden"){
        openIcon.style.width = "50%";
    }else{
        openIcon.style.width = "100%";
    }
} );

                //icons animation
window.addEventListener("scroll", function(){
    socialIcons.forEach(element => {
        if(window.innerHeight > socialInfo.getBoundingClientRect().top){
            
            element.classList.add("animate__slow", "animate__flip");
        }else{
            element.classList.remove("animate__slow", "animate__flip");
        }
    });
});
