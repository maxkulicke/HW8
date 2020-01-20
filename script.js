$(document).ready(function () {

  $(".projectContent").hide();

  $('.imgCard').hover(
    function () {
      switch (this.id) {
        case 'plannerCard':
          $('.plannerContent').fadeIn(300);
          break;
        case 'passwordCard':
          $('.passwordContent').fadeIn(300);
          break;
        case 'tbd':
          break;
        default:
          console.log('error');
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'plannerCard':
          $('.plannerContent').fadeOut(200);
          break;
        case 'passwordCard':
          $('.passwordContent').fadeOut(200);
          break;
        case 'tbd':
          break;
        default:
          console.log('error');
          break;
      }
    }
  );

  //   const greeting = `My name is ${arya.first}!
  // I am loyal to ${arya.allegiance}.`;
})