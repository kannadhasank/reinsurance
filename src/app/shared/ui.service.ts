import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }


  initUIFunctions() {

    $(document).ready(function () {
      
    
      let $body = $('body');
      let $window = $(window);


      /**
      Resets the scroll
      */
      $('.slimscroll-menu').slimscroll({
        height: 'auto',
        position: 'right',
        size: "5px",
        color: '#9ea5ab',
        wheelStep: 5,
        touchScrollStep: 20
      });



      // Left menu collapse
      $('.button-menu-mobile').on('click', function (event) {
        event.preventDefault();
        $body.toggleClass('sidebar-enable');
        if ($window.width() >= 768) {
          $body.toggleClass('enlarged');
        } else {
          $body.removeClass('enlarged');
        }


      });

      // sidebar - main menu
      $("#side-menu").metisMenu();


      // right side-bar toggle
      $('.right-bar-toggle').on('click', function (e) {
        $('body').toggleClass('right-bar-enabled');
      });



      $('.right_bar_close').on('click', function (e) {
        $('body').toggleClass('right-bar-enabled');


      });



      // activate the menu in left side bar based on url
      $("#side-menu a").each(function () {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
          $(this).addClass("active");
          $(this).parent().addClass("mm-active"); // add active to li of the current link
          $(this).parent().parent().addClass("mm-show");
          $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
          $(this).parent().parent().parent().addClass("mm-active");
          $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
          $(this).parent().parent().parent().parent().parent().addClass("mm-active");
        }
      });

      // activate the menu in horizontal menu based on url
      $(".navigation-menu a").each(function () {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
          $(this).addClass("active");
          $(this).parent().addClass("active"); // add active to li of the current link
          $(this).parent().parent().addClass("in");
          $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
          $(this).parent().parent().parent().addClass("active");
          $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
          $(this).parent().parent().parent().parent().parent().addClass("active");
        }
      });

      // Topbar - main menu
      $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
      });

      $('.navigation-menu>li').slice(-2).addClass('last-elements');

      $('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
        if ($(window).width() < 992) {
          e.preventDefault();
          $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
      });


      // in case of small size, add class enlarge to have minimal menu
      if ($window.width() >= 768 && $window.width() <= 1024) {
        $body.addClass('enlarged');
      } else {
        if ($body.data('keep-enlarged') != true) {
          $body.removeClass('enlarged');
        }
      }


    });


  }



}
