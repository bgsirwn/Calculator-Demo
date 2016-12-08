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
    
});

//calculator events

//0- 9 
$$('.zero').on('click', function (e) {
    setInput(0);
});

$$('.one').on('click', function (e) {
    setInput(1);
});

$$('.two').on('click', function (e) {
    setInput(2);
});

$$('.three').on('click', function (e) {
    setInput(3);
});

$$('.four').on('click', function (e) {
    setInput(4);
});

$$('.five').on('click', function (e) {
    setInput(5);
});

$$('.six').on('click', function (e) {
    setInput(6);
});

$$('.seven').on('click', function (e) {
    setInput(7);
});

$$('.eight').on('click', function (e) {
    setInput(8);
});

$$('.nine').on('click', function (e) {
    setInput(9);
});

//other events : / x - + = dot +- backspace c
$$('.divide').on('click', function (e) {
    setInput("/");
});

$$('.letterx').on('click', function (e) {
    setInput("*");
});

$$('.minus').on('click', function (e) {
    setInput("-");
});

$$('.plus').on('click', function (e) {
    setInput("+");
});

$$('.equal').on('click', function (e) {
    setInput("equal");
});

$$('.plus_minus').on('click', function (e) {
    setInput("plus_minus");
});

$$('.dot').on('click', function (e) {
    setInput(".");
});

$$('.backspace').on('click', function (e) {
    setInput("backspace");
});

$$('.clear').on('click', function (e) {
    setInput("clear");
});



//show user inputs
function setInput(x) {

    //get existing input
    var curVal = $$('#txtInput').val();

    console.log("curVal:" + curVal);

    //clear
    if (x == "clear") {
        $$('#txtInput').val("");
    }

    //backspace
    else if (x == "backspace") {
        if (curVal) {
            newVal = curVal.substring(0, curVal.length - 1);
            $$('#txtInput').val(newVal);
        }
    }

    //plus minus
    else if (x == "plus_minus") {
        if (curVal) {
            var y = curVal - (curVal * 2);
            $$('#txtInput').val(y);
        }
    }

    //equal
    else if (x == "equal") {
        if (curVal) {
            $$('#txtInput').val(eval(curVal).toString());
        }
    }

    //otherwise append input
    else {

        if (curVal) {
            $$('#txtInput').val(curVal + x);
        } else {
            $$('#txtInput').val(x);
        }
    }

}