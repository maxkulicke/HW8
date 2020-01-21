$(document).ready(function () {

  $('.projectContent').hide();

  $('.container').hover(
    function () {
      // console.log(this);
      // console.log(this.id);
      switch (this.id) {
        case 'about':
          $(this).animate({backgroundColor : 'rgb(66, 19, 236)'}, 1000);
          break;
        case 'portfolio':
          $(this).animate({backgroundColor : 'rgb(66, 19, 236)'}, 1000);
          break;
        case 'music':
          $(this).animate({backgroundColor : 'rgb(66, 19, 236)'}, 1000);
          break;
        case 'photography':
          $(this).animate({backgroundColor : 'rgb(66, 19, 236)'}, 1000);
          break;
        case 'contact':
          $(this).animate({backgroundColor : 'rgb(66, 19, 236)'}, 1000);
          break;
        default:
          console.log('error');
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'about':
          $(this).animate({ backgroundColor: 'rgba(255, 255, 255, 0.5)' });
          break;
        case 'portfolio':
          $(this).animate({ backgroundColor: 'rgba(255, 255, 255, 0.5)' });
          break;
        case 'music':
          $(this).animate({ backgroundColor: 'rgba(255, 255, 255, 0.5)' });
          break;
        case 'photography':
          $(this).animate({ backgroundColor: 'rgba(255, 255, 255, 0.5)' });
          break;
        case 'contact':
          $(this).animate({ backgroundColor: 'rgba(255, 255, 255, 0.5)' });
          break;
        default:
          console.log('error');
          break;
      }
    },
  );

  // const colorFadeIn = element => { $(element).animate(backgroundColor: rgb(244, 241, 255)); }

  // const colorFadeOut = element => { $(element).animate(backgroundColor: rgb(244, 241, 255)); }


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