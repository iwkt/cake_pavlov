document.addEventListener('DOMContentLoaded',function() {
  document.getElementById('navOpen').addEventListener('click',function(){
    this.classList.toggle('active');
    document.getElementById('navMBBase').classList.toggle('active');
  })
});

window.addEventListener("scroll", function () {
  let scroll = document.documentElement.scrollTop;
  
  if(scroll > 600) {
    document.querySelector("#innerLogo").classList.add("active");
  } else {
    document.querySelector("#innerLogo").classList.remove("active")
  }
});