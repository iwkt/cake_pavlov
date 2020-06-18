document.addEventListener('DOMContentLoaded',function() {
  document.getElementById('navOpen').addEventListener('click',function(){
    this.classList.toggle('active');
    document.getElementById('navMBBase').classList.toggle('active');
  })
});

window.addEventListener("scroll", function () {
  let scroll = document.documentElement.scrollTop;

  console.log(scroll);

  if (scroll > 250) {
    document.querySelector(".bnr-2").classList.add("active");
  } else {
    document.querySelector(".bnr-2").classList.remove("active")
  }

  if (scroll > 670) {
    document.querySelector(".bnr-3").classList.add("active");
  } else {
    document.querySelector(".bnr-3").classList.remove("active")
  }
  
  if(scroll > 600) {
    document.querySelector("#innerLogo").classList.add("active");
  } else {
    document.querySelector("#innerLogo").classList.remove("active")
  }
});