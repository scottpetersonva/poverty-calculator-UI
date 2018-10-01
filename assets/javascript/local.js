$( document ).ready(function(){
  $('.collapsible').collapsible();
  // $('.slider').slider();
  // $('.modal').modal();
  $('.tabs').tabs();
  $('.button-collapse').sideNav({
        closeOnClick: true
      }     
    );
    var elem = document.querySelector('.collapsible.expandable');
      var instance = M.Collapsible.init(elem, {
        accordion: false
      });
  });