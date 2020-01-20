$(document).ready(function () {

  $(".projectContent").hide();

  $('.imgCard').hover(
    function () {
      switch (this.id) {
        case 'plannerCard':
          // $(".plannerContent").show();
          $('.plannerContent').fadeIn(300);
          break;
        case "passwordCard":
          // $(".passwordContent").show();
          $('.passwordContent').fadeIn(300);
          break;
        case "product":
          break;
        default:
          console.log("error");
          break;
       }
    }, 
    function () {
      switch (this.id) {
        case 'plannerCard':
          // $(".plannerContent").hide();
          $('.plannerContent').fadeOut(200);
          break;
        case "passwordCard":
          // $(".passwordContent").hide();
          $('.passwordContent').fadeOut(200);
          break;
        case "product":
          break;
        default:
          console.log("error");
          break;
       }
    }
 );

//   $('div').hover(
//     function () {
//        $(this).css({"background-color":"red"});
//     }, 
//     function () {
//        $(this).css({"background-color":"blue"});
//     }
//  );

//  $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
 
// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });

  const mouseover = (id) => {
    switch (id) {
      case "plannerCard":
        $(".plannerContent").show();
        break;
      case "passwordCard":
        $(".passwordContent").show();
        break;
      case "product":
        break;
      default:
        console.log("error");
        break;
     }
     
  };

//   const greeting = `My name is ${arya.first}!
// I am loyal to ${arya.allegiance}.`;
})