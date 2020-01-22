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
        navLinkOnClick(this, '#about');
        // moveBold(this);
        // animateToLilac('.card');
        // animateToWhite('#about');
        break;
      case 'portfolioNav':
        navLinkOnClick(this, '#portfolio');
        // moveBold(this);
        // animateToLilac('.card');        
        // animateToWhite('#portfolio');
        break;
      case 'musicNav':
        navLinkOnClick(this, '#music');
        // moveBold(this);
        // animateToLilac('.card');
        // animateToWhite('#music');
        break;
      case 'photographyNav':
        navLinkOnClick(this, '#photography');
        // moveBold(this);
        // animateToLilac('.card');
        // animateToWhite('#photography');
        break;
      case 'contactNav':
        navLinkOnClick(this, '#contact');
        // moveBold(this);
        // animateToLilac('.card');
        // animateToWhite('#contact');
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
          cardHoverOn(this);
          // animateToWhite(this);
          // moveBold(`#${this.id}Nav`);
          break;
        case 'portfolio':
          cardHoverOn(this);
          // animateToWhite(this);
          // moveBold(`#${this.id}Nav`);
          break;
        case 'music':
          cardHoverOn(this);
          // animateToWhite(this);
          // moveBold(`#${this.id}Nav`);
          break;
        case 'photography':
          cardHoverOn(this);
          // animateToWhite(this);
          // moveBold(`#${this.id}Nav`);
          break;
        case 'contact':
          cardHoverOn(this);
          // animateToWhite(this);
          // moveBold(`#${this.id}Nav`);
          break;
        default:
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'about':
          cardHoverOff(this);
          // animateToLilac(this);
          // clearBold();
          // $('#maxName').addClass('bold');
          break;
        case 'portfolio':
          cardHoverOff(this);
          // animateToLilac(this);
          // clearBold();
          // $('#maxName').addClass('bold');
          break;
        case 'music':
          cardHoverOff(this);
          // animateToLilac(this);
          // clearBold();
          // $('#maxName').addClass('bold');
          break;
        case 'photography':
          cardHoverOff(this);
          // animateToLilac(this);
          // clearBold();
          // $('#maxName').addClass('bold');
          break;
        case 'contact':
          cardHoverOff(this);
          // animateToLilac(this);
          // clearBold();
          // $('#maxName').addClass('bold');
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

  const navLinkOnClick = (element, id) => {
    moveBold(element);
    animateToLilac('.card');
    animateToWhite(id);
  }

  const cardHoverOn = (element) => {
    animateToWhite(element);
    moveBold(`#${element.id}Nav`);
  }

  const cardHoverOff= (element) => {
    animateToLilac(element);
    clearBold();
    $('#maxName').addClass('bold');
  }

  const projectHoverOn = prefix => {
    $(`.${prefix}Content`).fadeIn(300);
    $(`#${prefix}Img`).animate({ opacity: '0.1' }, 300);
  }

  const projectHoverOff = prefix => {
    $(`.${prefix}Content`).fadeOut(200);
    $(`#${prefix}Img`).animate({ opacity: '1.0' }, 300);
  }

  // portfolio project hover
  $('.imgCard').hover(
    function () {
      switch (this.id) {
        case 'plannerCard':
          projectHoverOn('planner');
          break;
        case 'passwordCard':
          projectHoverOn('password');
          break;
        case 'homebuyerCard':
          projectHoverOn('homebuyer');
          break;
        default:
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'plannerCard':
          projectHoverOff('planner');
          break;
        case 'passwordCard':
          projectHoverOff('password');
          break;
        case 'homebuyerCard':
          projectHoverOff('homebuyer');
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