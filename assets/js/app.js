$(document).ready(function() {
    console.log(moment());

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
        console.log(box12.attr('data-hour'));

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






    setInterval(tick, 1000);

    button1.on('click', function() {
        console.log(box1.val());
        localStorage.setItem('1:00 Entry', box1.val());
        var entry = localStorage.getItem('1:00 Entry');
        box1.val(entry);
    })





    // var myStr = JSON.stringify(myObj);
    // localStorage.setItem('myObj', myStr);
    // console.log(localStorage);
    // var myObj = {
    //     name: 'Jacob',
    //     age: 24
    // }
    // console.log(myStr);
    // console.log(JSON.parse(myStr));
    console.log(timeNow);
    checkTime();
});