(function() {
  var App;

  App = (function() {
    function App(options) {
      var defaults = {};
      this.options = $.extend(defaults, options);
      this.init();      
    }   
    
    App.prototype.init = function(){     
      // form submission
      $('#mailing-list-form').submit(function(){
        $(this).hide();
        $('#success').show();
      });
    };
    
    return App;

  })();

  $(function() {
    return new App({});
  });

}).call(this);
