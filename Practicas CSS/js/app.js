const container=document.getElementById('div-sec3-right');

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('acordion')){
        e.target.parentElement.classList.toggle('scale')
        console.log(e.target.children)
        e.target.children[2].classList.toggle('rotate')
    }
}); 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}