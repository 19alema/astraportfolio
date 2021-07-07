const nav = document.querySelectorAll("i");
const pro = document.querySelector('.profile');
const wrk = document.querySelector('.work');

const email = document.querySelector('.email');


for (let i = 0; i < nav.length; i++) {
  
        
    nav[0].addEventListener('click', function () {
        pro.style.display = "block";
        wrk.style.display = "none";
        email.style.display = "none";

    });

          
    nav[1].addEventListener('click', function () {
        pro.style.display = "none";
        wrk.style.display = "block";
        email.style.display = "none";

    });

          
    nav[2].addEventListener('click', function () {
        pro.style.display = "none";
        wrk.style.display = "none";
        email.style.display = "block";

    });

          
    nav[3].addEventListener('click', function () {
        pro.style.display = "block";
        wrk.style.display = "none";
        email.style.display = "none";

    });
        
    
}