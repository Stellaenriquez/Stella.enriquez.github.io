//PRODUCTS
let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n){
      clearInterval(myTimer);
      if (n < 0){
        showSlides(slideIndex -= 1);
      } else {
       showSlides(slideIndex += 1); 
      }
      if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
      } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
      }
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slide = document.getElementsByClassName("captions");
        if (n > slide.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slide.length; i++) {
          slide[i].style.display ='none';
        }
          slide[slideIndex -1].style.display = "block";   
    }
    
    window.addEventListener("load",function() {
      showSlides(slideIndex);
      myTimer = setInterval(function(){plusSlides(1)}, 4000);
    })

//modal
    
  let btns = document.querySelectorAll('.descBtn')

  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = 'block'
    });
  });

  let closed = document.querySelectorAll(".close");
  
  closed.forEach(function(span){   
    span.onclick = function(){
    let modal = (span.closest('.modal').style.display = 'none');
    };
  });

  window.onclick = function(e) {
     if (e.target.className === 'modal') {
         e.target.style.display = "none";
     };
   };


   
  let mini = Array.from(document.getElementsByClassName('miniImgimg'))
 
    mini.forEach(function(img){
      img.addEventListener('click', function(){  
        fullImg(img)
      });
    });
  
   function fullImg(img){
    let bigImg = img.parentNode.parentNode.querySelector('.showImg img')
    let imgSrc = img.getAttribute('src');  
    bigImg.setAttribute('src',imgSrc);

    };
  



  
  
  
  

   
   
