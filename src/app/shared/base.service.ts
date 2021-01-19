import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class BaseService {

 public tableArray = [ ]

  constructor() { }
currentActiveContent: any = '';
  getRightSliderClass(type: any) {

    // let classOptions = {
    //   'right_sidebar_hide': (type === ''),
    //   'right_sidebar_lg': (type === 'job_info'),
    //   'right_sidebar_sm': (type === 'add_team' || type === 'invite_team' || type === 'add_roles' || type === 'add_properties'),
    // };

     if (type === 'new_contract') {

      return 'right_sidebar_sm';

    }
    else if (type === '') {
      return 'right_sidebar_hide';
    }

    return 'right_sidebar_hide';
  }



  showRightSideBar() {

    let getRightSidebarClass = this.getRightSliderClass(this.currentActiveContent);

    $(document).ready(function () {

      $('body').addClass('right-bar-enabled');
      $('.right-bar').addClass(getRightSidebarClass);

    });

  }

  closeRightSideBar() {

    $(document).ready(function () {

      $('body').removeClass('right-bar-enabled');
      $('.right-bar').removeClass('right_sidebar_lg');
      $('.right-bar').removeClass('right_sidebar_sm');

    });

  }




  showFilterSideBar() {

    $(document).ready(function () {

      debugger;


      if ($('body').hasClass('left-filter-enabled')) {
        $('body').removeClass('left-filter-enabled');
        $('.left-bar').removeClass('filter-popup');
        $('.left-bar').addClass('display_none');
      }
      else {
        $('body').addClass('left-filter-enabled');
        $('.left-bar').addClass('filter-popup');
        $('.left-bar').removeClass('display_none');
      }


    });

  }

  closeFilterSideBar() {

    $(document).ready(function () {

      $('body').removeClass('left-filter-enabled');
      $('.left-bar').removeClass('filter-popup');
      $('.left-bar').addClass('display_none');

    });

  }


}
