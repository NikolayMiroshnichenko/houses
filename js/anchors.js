// const anchors = document.querySelectorAll('.anchors')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
    
//     const blockID = anchor.getAttribute('href').substr(1);
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

$(function(){
  $('a[href^="#"]').click(function(){
     var target = $(this).attr('href');
     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
     return false;
  });
});
