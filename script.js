let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function setNewImage1()
{
  document.getElementById("img1").src ="apple_juice.jpg"
}
function setOldImage1()
{
  document.getElementById("img1").src ="image/apple.jpg"  
}



function setNewImage2()
{ 
  document.getElementById("img2").src ="mango_juice.jpg"
}
function setOldImage2()
{ 
  document.getElementById("img2").src ="mango.jpg"  
}

function setNewImage3()
{ 
  document.getElementById("img3").src ="orange_juice.jpg"
}
function setOldImage3()
{ 
  document.getElementById("img3").src ="orange.jpg"  
}

function setNewImage4()
{ 
  document.getElementById("img4").src ="lychee_juice.jpg"
}
function setOldImage4()
{ 
  document.getElementById("img4").src ="lyche.jpg"  
}



function setNewImage5()
{ 
  document.getElementById("img5").src ="gauva_juice.jpg"
}
function setOldImage5()
{ 
  document.getElementById("img5").src ="gauva.jpg"  
}



function setNewImage6()
{ 
  document.getElementById("img6").src ="mixed_juice.jpg"
}
function setOldImage6()
{ 
  document.getElementById("img6").src ="mixed.jpg"  
}

/* changing header while scrolling fuction*/

function changeBg(){
  var nav1 = document.getElementById('nav1');
  var scrollValue = window.scrollY;
  if(scrollValue < 250)
  {
    nav1.classList.remove('bgColor');
  }
  else{
    nav1.classList.add('bgColor');
  }
}
 window.addEventListener('scroll', changeBg)