//HOME

    //homelogo
        window.onscroll = function () {
            scrollRotate();
        };

        function scrollRotate() {
            let image = document.getElementById("homelogo");
            image.style.transform = "rotate(" + window.pageYOffset/1.75 + "deg)";
            image.style.height= "500px"
        }
        function scrollFunction() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop >200) {
            document.getElementsByClassName("nav").style.top = "0";
          } else {
            document.getElementsByClassName("nav").style.top = "0px";
          }
        }

//ABOUT 

   

//SERVICES
  const checkpoint = 1500;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 1.50;
    }
    document.getElementById("services").style.opacity = opacity;
  });

  //Contacts

  let conbtn = document.querySelectorAll('.conbtn')

  conbtn.forEach(function(con){
    con.onclick = function(){
    let modal = con.getAttribute('data-modal');
    document.getElementById(modal).style.display = 'block'
    };
  });


//modal
    
  let btns = document.querySelectorAll('.conbtn')

  btns.forEach(function(btn){
    btn.onclick = function(){
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = 'block'
  };
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

  
 
 //Faq

 qq = document.querySelectorAll('#question');
 x = document.querySelectorAll('#answer');

   qq.forEach(function(q){
    q.onclick = function(){
      console.log(q)
    let content = q.getAttribute('data-content');
      if (document.getElementById(content).style.display === 'none' || document.getElementById(content).style.display === "") {
        document.getElementById(content).style.display = 'block'
          } else {
            document.getElementById(content).style.display = 'none';
          }
        } 
   })



//serv

  

