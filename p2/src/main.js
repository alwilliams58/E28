import Vue from 'vue'; 
import HeidiTricks from './components/HeidiTricks.vue';
var app = new Vue({
    el: '#app',
    components: {
      
    }
    components
    data:{
      dog: 'Heidi',
      out_put_text:' Please: Sit Pretty'
    },
    methods: {
       changeImage: function (pic,txt) {
    document.getElementById("main_img").src = this.pic;
    this.out_put_text = txt;
       return this.out_put_text ;    
        }
 //      returnImage: function () {
 //               changeImage("img/IMG_0062.jpg","");
       }
  });


//function returnImage() {
//  changeImage("img/IMG_0062.jpg","");
//}