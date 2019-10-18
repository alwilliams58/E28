var app = new Vue({
    el: '#app',
    data: {
      dog: 'Heidi'
    }
  });
  
  function changeImage(pic,txt) {
    document.getElementById("main_img").src = pic;
    document.getElementById("out_put_txt").innerHTML = txt;
}
function returnImage() {
  changeImage("img/IMG_0062.jpg","");
}