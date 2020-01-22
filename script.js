$(document).ready(function () {

  $('.projectContent').hide();
  $('.photoContent').hide();

  $('#maxName').click(function () {
    $('.nav-link').removeClass('bold');
    $(this).addClass('bold');
  })

  // navbar onclick purple to white
  $('.nav-link').click(function () {
    switch (this.id) {
      case 'aboutNav':
        moveBold(this);
        animateToLilac('.card');
        animateToWhite('#about');
        break;
      case 'portfolioNav':
        moveBold(this);
        animateToLilac('.card');        
        animateToWhite('#portfolio');
        break;
      case 'musicNav':
        moveBold(this);
        animateToLilac('.card');
        animateToWhite('#music');
        break;
      case 'photographyNav':
        moveBold(this);
        animateToLilac('.card');
        animateToWhite('#photography');
        break;
      case 'contactNav':
        moveBold(this);
        animateToLilac('.card');
        animateToWhite('#contact');
        break;
      default:
        break;
    }
  });

  // purple to white hover
  $('.card').hover(
    function () {
      switch (this.id) {
        case 'about':
          animateToWhite(this);
          moveBold(`#${this.id}Nav`);
          break;
        case 'portfolio':
          animateToWhite(this);
          moveBold(`#${this.id}Nav`);
          break;
        case 'music':
          animateToWhite(this);
          moveBold(`#${this.id}Nav`);
          break;
        case 'photography':
          animateToWhite(this);
          moveBold(`#${this.id}Nav`);
          break;
        case 'contact':
          animateToWhite(this);
          moveBold(`#${this.id}Nav`);
          break;
        default:
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'about':
          animateToLilac(this);
          clearBold();
          break;
        case 'portfolio':
          animateToLilac(this);
          clearBold();
          break;
        case 'music':
          animateToLilac(this);
          clearBold();
          break;
        case 'photography':
          animateToLilac(this);
          clearBold();
          break;
        case 'contact':
          animateToLilac(this);
          clearBold();
          break;
        default:
          break;
      }
    },
  );

  const clearBold = () => {
    $('.nav-link').removeClass('bold');
    $('#maxName').removeClass('bold');
  }

  const moveBold = (element) => {
    clearBold();
    $(element).addClass('bold');
  }

  const animateToWhite = element => { $(element).animate({ backgroundColor: 'rgb(255, 255, 255)' }, 200); }

  const animateToLilac = element => { $(element).animate({ backgroundColor: 'rgb(233, 227, 255)' }, 200); }

  const hoverOn = prefix => {
    $(`.${prefix}Content`).fadeIn(300);
    $(`#${prefix}Img`).animate({ opacity: '0.1' }, 300);
  }

  const hoverOff = prefix => {
    $(`.${prefix}Content`).fadeOut(200);
    $(`#${prefix}Img`).animate({ opacity: '1.0' }, 300);
  }

  // portfolio project hover
  $('.imgCard').hover(
    function () {
      switch (this.id) {
        case 'plannerCard':
          hoverOn('planner');
          break;
        case 'passwordCard':
          hoverOn('password');
          break;
        case 'homebuyerCard':
          hoverOn('homebuyer');
          break;
        default:
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'plannerCard':
          hoverOff('planner');
          break;
        case 'passwordCard':
          hoverOff('password');
          break;
        case 'homebuyerCard':
          hoverOff('homebuyer');
          break;
        default:
          break;
      }
    }
  );

  // photography hover
  $('#photography').hover(
    function () {
      switch (this.id) {
        case 'photography':
          $('.photoContent').fadeIn(300);
          break;
        default:
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'photography':
          $('.photoContent').fadeOut(200);
          break;
        default:
          break;
      }
    }
  );

})