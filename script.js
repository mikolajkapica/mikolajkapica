$( document ).ready(function() {
  $('.image').each(function(i){
    setTimeout(function(){
      $('.image').eq(i).addClass('load');
    }, 200 * i);
  });
});
