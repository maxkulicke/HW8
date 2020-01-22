$(document).ready(function () {

  $('.projectContent').hide();
  $('.photoContent').hide();

  // navbar onclick purple to white
  $('nav-link').click(function() {
    switch (this.id) {
      case 'about':
        $('#about').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
        break;
      case 'portfolio':
        $('#portfolio').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
        // $('.imgCard').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200)
        break;
      case 'music':
        $('#music').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
        break;
      case 'photography':
        $('#photography').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
        break;
      case 'contact':
        $('#contact').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
        break;
      default:
        // console.log('error');
        break;
    }
  });

// purple to white hover
  $('.card').hover(
    function () {
      // console.log(this.id);
      switch (this.id) {
        case 'about':
          $(this).animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
          break;
        case 'portfolio':
          $(this).animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
          // $('.imgCard').animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200)
          break;
        case 'music':
          $(this).animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
          break;
        case 'photography':
          $(this).animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
          break;
        case 'contact':
          $(this).animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200);
          break;
        default:
          // console.log('error');
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'about':
          $(this).animate({ backgroundColor: 'rgb(233, 227, 255)'}, 200);
          break;
        case 'portfolio':
          $(this).animate({ backgroundColor: 'rgb(233, 227, 255)'}, 200);
          break;
        case 'music':
          $(this).animate({ backgroundColor: 'rgb(233, 227, 255)'}, 200);
          break;
        case 'photography':
          $(this).animate({ backgroundColor: 'rgb(233, 227, 255)'}, 200);
          break;
        case 'contact':
          $(this).animate({ backgroundColor: 'rgb(233, 227, 255)'}, 200);
          break;
        default:
          console.log('fluid filled catheter is flasely low');
          break;
      }
    },
  );

  // const colorFadeIn = element => { $(element).animate(backgroundColor: rgb(244, 241, 255)); }

  // const colorFadeOut = element => { $(element).animate(backgroundColor: rgb(244, 241, 255)); }

// portfolio description hover
  $('.imgCard').hover(
    function () {
      switch (this.id) {
        case 'plannerCard':
          $('.plannerContent').fadeIn(300);
          $('#plannerImg').animate({ opacity: '0.1' }, 300);
          break;
        case 'passwordCard':
          $('.passwordContent').fadeIn(300);
          $('#passwordImg').animate({ opacity: '0.1' }, 300);
          break;
        case 'homebuyerCard':
          $('.homebuyerContent').fadeIn(300);
          $('#homebuyerImg').animate({ opacity: '0.1' }, 300);
          break;
        default:
          // console.log('error');
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'plannerCard':
          $('.plannerContent').fadeOut(200);
          $('#plannerImg').animate({ opacity: '1.0' }, 200);
          break;
        case 'passwordCard':
          $('.passwordContent').fadeOut(200);
          $('#passwordImg').animate({ opacity: '1.0' }, 200);
          break;
        case 'homebuyerCard':
          $('.homebuyerContent').fadeOut(200);
          $('#homebuyerImg').animate({ opacity: '1.0' }, 200);
          break;
        default:
          // console.log('error');
          break;
      }
    }
  );

  // photography hover
  $('#photography').hover(
    function () {
      // console.log(this.id);
      switch (this.id) {
        case 'photography':
          $('.photoContent').fadeIn(300);
          break;
        default:
          // console.log('error');
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'photography':
          $('.photoContent').fadeOut(200);
          break;
        default:
          // console.log('error');
          break;
      }
    }
  );

})