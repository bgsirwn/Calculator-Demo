//////////////////////////////////////////////////////////////////
//Creator: Junryl Maraviles
//Contact: junryl@gmail.com
//Reason: Learning purposes :)
//////////////////////////////////////////////////////////////////

// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('index', function (page) {
    // run createContentPage func after link was clicked
});

//calculator events
$$('.one').on('click', function (e) {
    $$('.txtInput').val("1");
});
