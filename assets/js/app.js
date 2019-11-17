$(document).ready(function() {


    //text variables
    var timeEl = $('<p>');
    var dayEl = $('<p>');
    var box1 = $('#div1');
    var box2 = $('#div2');
    var box3 = $('#div3');
    var box4 = $('#div4');
    var box5 = $('#div5');
    var box12 = $('#div12');
    var box11 = $('#div11');
    var box10 = $('#div10');
    var box9 = $('#div9');

    // buttons
    var button9 = $('#btn9');
    var button10 = $('#btn10');
    var button11 = $('#btn11');
    var button12 = $('#btn12');
    var button1 = $('#btn1');
    var button2 = $('#btn2');
    var button3 = $('#btn3');
    var button4 = $('#btn4');
    var button5 = $('#btn5');


    var timeNow = moment().format('HH');

    function tick() {

        dayEl.text(moment().format('LL'));
        timeEl.text(moment().format('hh:mm:ssA'));
        $('.jumbotron').append(dayEl);
        $('.jumbotron').append(timeEl);

    }

    function checkTime() {

        // PM Time Check


        // ------- 12
        if (parseInt(box12.attr('data-hour')) > timeNow) {
            box12.removeClass('past present future');
            box12.addClass('future');

        } else if (parseInt(box12.attr('data-hour')) === timeNow) {
            box12.removeClass('past present future');
            box12.addClass('present');


        } else {

            box12.removeClass('past present future');
            box12.addClass('past');

        }

        //-------- 1
        if (parseInt(box1.attr('data-hour') + 12) > timeNow) {
            box1.removeClass('past present future');
            box1.addClass('future')

        } else if (parseInt(box1.attr('data-hour')) === timeNow) {
            box1.removeClass('past present future');
            box1.addClass('present');


        } else {

            box1.removeClass('past present future');
            box1.addClass('past');

        }

        //-------- 2
        if (parseInt(box2.attr('data-hour') + 12) > timeNow) {
            box2.removeClass('past present future');
            box2.addClass('future');

        } else if (parseInt(box12.attr('data-hour')) === timeNow) {
            box2.removeClass('past present future');
            box2.addClass('present');


        } else {

            box2.removeClass('past present future');
            box2.addClass('past');

        }

        //-------- 3
        if (parseInt(box3.attr('data-hour') + 12) > timeNow) {
            box3.removeClass('past present future');
            box3.addClass('future');

        } else if (parseInt(box12.attr('data-hour')) === timeNow) {
            box3.removeClass('past present future');
            box3.addClass('present');


        } else {
            box3.removeClass('past present future');
            box3.addClass('past');

        }

        //-------- 4
        if (parseInt(box4.attr('data-hour') + 12) > timeNow) {
            box4.removeClass('past present future');
            box4.addClass('future');

        } else if (parseInt(box4.attr('data-hour')) === timeNow) {
            box4.removeClass('past present future');
            box4.addClass('present');


        } else {
            box4.removeClass('past present future');
            box4.addClass('past');

        }

        //-------- 5
        if (parseInt(box5.attr('data-hour') + 12) > timeNow) {
            box5.removeClass('past present future');
            box5.addClass('future');
        } else if (parseInt(box5.attr('data-hour')) === timeNow) {
            box5.removeClass('past present future');
            box5.addClass('present');


        } else {
            box5.removeClass('past present future');
            box5.addClass('past');

        }
        // AM Time Check

        //-------- 9
        if (parseInt(box9.attr('data-hour')) > timeNow) {
            box9.removeClass('past present future');
            box9.addClass('future');
        } else if (parseInt(box9.attr('data-hour')) === timeNow) {
            box9.removeClass('past present future');
            box9.addClass('present');


        } else {
            box9.removeClass('past present future');
            box9.addClass('past');

        }

        //-------- 10
        if (parseInt(box10.attr('data-hour')) > timeNow) {
            box10.removeClass('past present future');
            box10.addClass('future');
        } else if (parseInt(box10.attr('data-hour')) === timeNow) {
            box10.removeClass('past present future');
            box10.addClass('present');


        } else {
            box10.removeClass('past present future');
            box10.addClass('past');

        }

        //--------11
        if (parseInt(box11.attr('data-hour')) > timeNow) {
            box11.removeClass('past present future');
            box11.addClass('future');
        } else if (parseInt(box11.attr('data-hour')) === timeNow) {
            box11.removeClass('past present future');
            box11.addClass('present');


        } else {
            box11.removeClass('past present future');
            box11.addClass('past');

        }


    }


    tick();





    // update the time every 1 second
    setInterval(tick, 1000);
    // Check the time every 10 minutes and adjust timeblock color as needed
    setInterval(checkTime, 600000);


    //onClick events for all save buttons

    button9.on('click', function() {

        localStorage.setItem('Entry9', box9.val());
        var entry = localStorage.getItem('Entry9');
        box9.val(entry);
    });
    button10.on('click', function() {

        localStorage.setItem('Entry10', box10.val());
        var entry = localStorage.getItem('Entry10');
        box10.val(entry);
    });
    button11.on('click', function() {

        localStorage.setItem('Entry11', box11.val());
        var entry = localStorage.getItem('Entry11');
        box11.val(entry);
    });
    button11.on('click', function() {

        localStorage.setItem('Entry11', box11.val());
        var entry = localStorage.getItem('Entry11');
        box11.val(entry);
    });
    button12.on('click', function() {

        localStorage.setItem('Entry12', box12.val());
        var entry = localStorage.getItem('Entry12');
        box12.val(entry);
    });










    button1.on('click', function() {

        localStorage.setItem('Entry1', box1.val());
        var entry = localStorage.getItem('Entry1');
        box1.val(entry);
    });

    button2.on('click', function() {

        localStorage.setItem('Entry2', box2.val());
        var entry = localStorage.getItem('Entry2');
        box2.val(entry);
    });

    button3.on('click', function() {

        localStorage.setItem('Entry3', box3.val());
        var entry = localStorage.getItem('Entry3');
        box3.val(entry);
    });

    button4.on('click', function() {

        localStorage.setItem('Entry4', box4.val());
        var entry = localStorage.getItem('Entry4');
        box4.val(entry);
    });
    button5.on('click', function() {

        localStorage.setItem('Entry5', box45val());
        var entry = localStorage.getItem('Entry5');
        box5.val(entry);
    });






    checkTime();
});