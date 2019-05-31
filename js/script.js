"use strict"
$(() => {
    $('#menu').on('click', function() {
        $('.submenu').slideToggle(500, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });

    $('.book2').click(function (event) { 
        event.preventDefault(); 
        if (event.target.getAttribute('id') == 'book_place'){
            var value_name1=$('#name1').val();
            var value_phone1 = $('#phone1').val();
            if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1) && value_phone1.length < 9) {
                $('#name1').css('border','2px solid red');
                 $('#phone1').css('border', '2px solid red');
                 return false;
            } else if (value_phone1.length< 9){
                $('#phone1').css('border', '2px solid red');
                $('#name1').css('border', '2px solid #12ef1d');
                return false;
            } else if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1)) {
                $('#name1').css('border', '2px solid red');
                $('#phone1').css('border', '2px solid #12ef1d');
                return false;
            } else{
                $('#phone1').css('border', '2px solid #12ef1d');
                $('#name1').css('border', '2px solid #12ef1d');
            }
        }
        if (event.target.getAttribute('id') == 'book_discount') {
            var value_name1=$('#name2').val();
            var value_phone1 = $('#phone2').val();
            if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1) && value_phone1.length < 9) {
                $('#name2').css('border', '2px solid red');
                 $('#phone2').css('border', '2px solid red');
                 return false;
            } else if (value_phone1.length< 9){
                $('#phone2').css('border', '2px solid red');
                $('#name2').css('border', '2px solid #12ef1d');
                return false;
            } else if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1)) {
                $('#name2').css('border', '2px solid red');
                $('#phone2').css('border', '2px solid #12ef1d');
                return false;
            } else{
                $('#phone2').css('border', '2px solid #12ef1d');
                $('#name2').css('border', '2px solid #12ef1d');
            }
        }
        $('#overlay').fadeIn(400, 
            function () { 
                $('#modal_form')
                    .css('display', 'block') 
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
        
    });

    $('.book').click(function (event) { 
        event.preventDefault();
        if (event.target.getAttribute('id') == 'book_discount') {
                var value_name1 = $('#name2').val();
                var value_phone1 = $('#phone2').val();
                if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1) && value_phone1.length < 9) {
                    $('#name2').css('border', '2px solid red');
                    $('#phone2').css('border', '2px solid red');
                    return false;
                } else if (value_phone1.length < 9) {
                    $('#phone2').css('border', '2px solid red');
                    $('#name2').css('border', '2px solid #12ef1d');
                    return false;
                } else if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1)) {
                    $('#name2').css('border', '2px solid red');
                    $('#phone2').css('border', '2px solid #12ef1d');
                    return false;
                } else {
                    $('#phone2').css('border', '2px solid #12ef1d');
                    $('#name2').css('border', '2px solid #12ef1d');
                }
            }
        $('#overlay').fadeIn(400, 
            function () { 
                $('#modal_form')
                    .css('display', 'block') 
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200); 
            });
    });

    $('.take2').click(function (event) { 
        event.preventDefault();
        if (event.target.getAttribute('id') == 'free_month_book') {
            var value_name1=$('#name3').val();
            var value_phone1 = $('#phone3').val();
            if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1) && value_phone1.length < 9) {
                $('#name3').css('border', '2px solid red');
                 $('#phone3').css('border', '2px solid red');
                 return false;
            } else if (value_phone1.length< 9){
                $('#phone3').css('border', '2px solid red');
                $('#name3').css('border', '2px solid #12ef1d');
                return false;
            } else if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1)) {
                $('#name3').css('border', '2px solid red');
                $('#phone3').css('border', '2px solid #12ef1d');
                return false;
            } else{
                $('#phone3').css('border', '2px solid #12ef1d');
                $('#name3').css('border', '2px solid #12ef1d');
            }
        }
        $('#overlay').fadeIn(400,
            function () { 
                $('#modal_form')
                    .css('display', 'block') 
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    $('.take').click(function (event) { 
        event.preventDefault();
        if (event.target.getAttribute('id') == 'free_month_book') {
            var value_name1=$('#name3').val();
            var value_phone1 = $('#phone3').val();
            if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1) && value_phone1.length < 9) {
                $('#name3').css('border', '2px solid red');
                 $('#phone3').css('border', '2px solid red');
                 return false;
            } else if (value_phone1.length< 9){
                $('#phone3').css('border', '2px solid red');
                $('#name3').css('border', '2px solid #12ef1d');
                return false;
            } else if (!/^[A-Za-zА-Яа-яЁё]+$/.test(value_name1)) {
                $('#name3').css('border', '2px solid red');
                $('#phone3').css('border', '2px solid #12ef1d');
                return false;
            } else{
                $('#phone3').css('border', '2px solid #12ef1d');
                $('#name3').css('border', '2px solid #12ef1d');
            }
        }
        $('#overlay').fadeIn(400, 
            function () { 
                $('#modal_form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200); 
            });
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest(".menu").length) {
            $('.submenu').fadeOut(400);
        }
         e.stopPropagation();
    });

    $("#phone1").mask("+380(99) 999-99-99");
    $("#phone2").mask("+380(99) 999-99-99");
    $("#phone3").mask("+380(99) 999-99-99");
    $("#name1").select();
    $("#name2").select();
    $("#name3").select();

    $('#modal_close, #overlay').click(function () {
        $('#modal_form')
        .animate({
            opacity: 0,
            top: '45%'
            }, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
                $('#phone1').css('border', 'none');
                $('#name1').css('border', 'none');
                $('#phone2').css('border', 'none');
                $('#name2').css('border', 'none');
                $('#phone3').css('border', 'none');
                $('#name3').css('border', 'none');
                $('#phone1').val('');
                $('#name1').val('');
                $('#phone2').val('');
                $('#name2').val('');
                $('#phone3').val('');
                $('#name3').val('');
            });
        });
        
    $('.scroll').bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top
    }, 1000);
    $('.submenu').fadeOut(400);
    e.preventDefault();});return false;
});