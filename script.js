
'use strict';

$(document).ready(function() {
    $('#phone-tab').hover(
      function() {
        $('.phone-types').show(),
        function(){}
      },
      
      function() {
        $('.phone-types').hide();
      }
    );
  });


  $(document).ready(function() {
    $('#lap-tab').hover(
      function() {
        $('.laptop-types').show(),
        function(){}
      },
      
      function() {
        $('.laptop-types').hide();
      }
    );
  });

  
  $(document).ready(function() {
    $('#tab-tab').hover(
      function() {
        $('.tablet-types').show(),
        function(){}
      },
      
      function() {
        $('.tablet-types').hide();
      }
    );
  });

