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
        break;
      case 'portfolioNav':
        navLinkOnClick(this, '#portfolio');
        break;
      case 'musicNav':
        navLinkOnClick(this, '#music');
        break;
      case 'photographyNav':
        navLinkOnClick(this, '#photography');
        break;
      case 'contactNav':
        navLinkOnClick(this, '#contact');
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
          break;
        case 'portfolio':
          cardHoverOn(this);
          break;
        case 'music':
          cardHoverOn(this);
          break;
        case 'photography':
          cardHoverOn(this);
          break;
        case 'contact':
          cardHoverOn(this);
          break;
        default:
          break;
      }
    },
    function () {
      switch (this.id) {
        case 'about':
          cardHoverOff(this);
          break;
        case 'portfolio':
          cardHoverOff(this);
          break;
        case 'music':
          cardHoverOff(this);
          break;
        case 'photography':
          cardHoverOff(this);
          break;
        case 'contact':
          cardHoverOff(this);
          break;
        default:
          break;
      }
    },
  );
  
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

})