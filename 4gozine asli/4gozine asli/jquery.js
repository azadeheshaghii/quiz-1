//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     //اول چک بکن ببین که مقدار رادیو باتنی که انتخاب میکنی چقدر است
                     if ($(this).val() === '1') {
                         //در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

                         $('#1').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#2').removeAttr('style', 'color');
                         $('#3').removeAttr('style', 'color');
                         $('#4').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#1').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#2");
                         if (pTags.parent().is(".wrapper")) {
                             $('#2').unwrap();
                         }
                         var pTags2 = $("#3");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#3').unwrap();
                         }
                         var pTags3 = $("#4");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#4').unwrap();
                         }
                         alert("javab dade shode doost ast");

                     }




                     else if ($(this).val() === '2') {

                         $('#2').attr('style', 'color:red');
                         $('#3').removeAttr('style', 'color');
                         $('#4').removeAttr('style', 'color');
                         $('#1').removeAttr('style', 'color');
                         $('#2').wrap('<div class="wrapper"></div>');
                         var pTags = $("#1");
                         if (pTags.parent().is(".wrapper")) {
                             $('#1').unwrap();
                         }
                         var pTags2 = $("#3");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#3').unwrap();
                         }
                         var pTags3 = $("#4");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#4').unwrap();
                         }

                         alert("javab ghalat ast,javab sahih gozine yek ast")
                     }

                     else if ($(this).val() === '3') {
                         $('#3').attr('style', 'color:red');
                         $('#1').removeAttr('style', 'color');
                         $('#2').removeAttr('style', 'color');
                         $('#4').removeAttr('style', 'color');
                         $('#3').wrap('<div class="wrapper"></div>');
                         var pTags = $("#1");
                         if (pTags.parent().is(".wrapper")) {
                             $('#1').unwrap();
                         }
                         var pTags2 = $("#2");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#2').unwrap();
                         }
                         var pTags3 = $("#4");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#4').unwrap();
                         }


                         alert("javab ghalat ast,javab sahih gozine yek ast");
                     }
                     else if ($(this).val() === '4') {
                         $('#4').attr('style', 'color:red');
                         $('#2').removeAttr('style', 'color');
                         $('#3').removeAttr('style', 'color');
                         $('#1').removeAttr('style', 'color');
                         $('#4').wrap('<div class="wrapper"></div>');
                         var pTags = $("#1");
                         if (pTags.parent().is(".wrapper")) {
                             $('#1').unwrap();
                         }
                         var pTags2 = $("#2");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#2').unwrap();
                         }
                         var pTags3 = $("#3");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#3').unwrap();
                         }


                         alert("javab ghalat ast,javab sahih gozine yek ast");
                     }

                 }
             );
         }
     );







//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".h").click(function () {
        $(".h").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});
//بعد از اینکه روی دکمه کلیک کردی مخفی میشود

$(document).ready(function () {
    $(".h").click(function () {
        $(".k").hide(function () {

        });
    });
});

//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند
$(document).ready(function () {
    $(".h").click(function () {
        $('#p1').css('list-style-type', 'none');

    });
});

$(document).ready(function () {
    $("div").find("ol").addClass("frame");
});
//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود


$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     //اول چک بکن ببین که مقدار رادیو باتنی که انتخاب میکنی چقدر است
                     if ($(this).val() === '5') {
                         //در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

                         $('#5').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#6').removeAttr('style', 'color');
                         $('#7').removeAttr('style', 'color');
                         $('#8').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#5').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#6");
                         if (pTags.parent().is(".wrapper")) {
                             $('#6').unwrap();
                         }
                         var pTags2 = $("#7");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#7').unwrap();
                         }
                         var pTags3 = $("#8");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#8').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine do ast");

                     }




                     else if ($(this).val() === '6') {

                         $('#6').attr('style', 'color:red');
                         $('#5').removeAttr('style', 'color');
                         $('#5').removeAttr('style', 'color');
                         $('#7').removeAttr('style', 'color');
                         $('#8').removeAttr('style', 'color');
                         $('#6').wrap('<div class="wrapper"></div>');
                         var pTags = $("#5");
                         if (pTags.parent().is(".wrapper")) {
                             $('#5').unwrap();
                         }
                         var pTags2 = $("#7");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#7').unwrap();
                         }
                         var pTags3 = $("#8");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#8').unwrap();
                         }

                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '7') {
                         $('#7').attr('style', 'color:red');
                         $('#6').removeAttr('style', 'color');
                         $('#5').removeAttr('style', 'color');
                         $('#8').removeAttr('style', 'color');
                         $('#7').wrap('<div class="wrapper"></div>');
                         var pTags = $("#6");
                         if (pTags.parent().is(".wrapper")) {
                             $('#6').unwrap();
                         }
                         var pTags2 = $("#5");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#5').unwrap();
                         }
                         var pTags3 = $("#8");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#8').unwrap();
                         }


                         alert("javab ghalat ast,javab sahih gozine do ast");
                     }
                     else if ($(this).val() === '8') {
                         $('#8').attr('style', 'color:red');
                         $('#7').removeAttr('style', 'color');
                         $('#6').removeAttr('style', 'color');
                         $('#5').removeAttr('style', 'color');
                         $('#8').wrap('<div class="wrapper"></div>');
                         var pTags = $("#6");
                         if (pTags.parent().is(".wrapper")) {
                             $('#6').unwrap();
                         }
                         var pTags2 = $("#7");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#7').unwrap();
                         }
                         var pTags3 = $("#5");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#5').unwrap();
                         }


                         alert("javab ghalat ast,javab sahih gozine do ast");
                     }

                 }
             );
         }
     );


//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".a").click(function () {
        $(".a").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});

//بعد از اینکه روی دکمه کلیک کردی مخفی میشود

$(document).ready(function () {
    $(".a").click(function () {
        $(".k2").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند


$(document).ready(function () {
    $(".a").click(function () {
        $('#p2').css('list-style-type', 'none');

    });
});

//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '9') {
                         $('#9').attr('style', 'color:red');
                         alert("javab ghalat ast,javab sahih gozine se ast");
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#10').removeAttr('style', 'color');
                         $('#11').removeAttr('style', 'color');
                         $('#12').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#9').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#10");
                         if (pTags.parent().is(".wrapper")) {
                             $('#10').unwrap();
                         }
                         var pTags2 = $("#11");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#11').unwrap();
                         }
                         var pTags3 = $("#12");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#12').unwrap();
                         }
                     }
                     else if ($(this).val() === '10') {
                         $('#10').attr('style', 'color:red');
                         alert("javab ghalat ast,javab sahih gozine se ast");
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#9').removeAttr('style', 'color');
                         $('#11').removeAttr('style', 'color');
                         $('#12').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#10').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#9");
                         if (pTags.parent().is(".wrapper")) {
                             $('#9').unwrap();
                         }
                         var pTags2 = $("#11");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#11').unwrap();
                         }
                         var pTags3 = $("#12");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#12').unwrap();
                         }
                     }
                     else if ($(this).val() === '11') {
                         $('#11').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#9').removeAttr('style', 'color');
                         $('#10').removeAttr('style', 'color');
                         $('#12').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#11').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#9");
                         if (pTags.parent().is(".wrapper")) {
                             $('#9').unwrap();
                         }
                         var pTags2 = $("#10");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#10').unwrap();
                         }
                         var pTags3 = $("#12");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#12').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '12') {
                         $('#12').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#9').removeAttr('style', 'color');
                         $('#10').removeAttr('style', 'color');
                         $('#11').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#12').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#9");
                         if (pTags.parent().is(".wrapper")) {
                             $('#9').unwrap();
                         }
                         var pTags2 = $("#10");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#10').unwrap();
                         }
                         var pTags3 = $("#11");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#11').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine se ast");
                     }

                 }
             );
         }
     );


//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 

$(document).ready(function () {
    $(".b").click(function () {
        $(".b").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});

//بعد از اینکه روی دکمه کلیک کردی مخفی میشود


$(document).ready(function () {
    $(".b").click(function () {
        $(".k3").hide(function () {

        });
    });
});

//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند

$(document).ready(function () {
    $(".b").click(function () {
        $('#p3').css('list-style-type', 'none');

    });
});


//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '13') {
                         $('#13').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#14').removeAttr('style', 'color');
                         $('#15').removeAttr('style', 'color');
                         $('#16').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#13').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#14");
                         if (pTags.parent().is(".wrapper")) {
                             $('#14').unwrap();
                         }
                         var pTags2 = $("#15");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#15').unwrap();
                         }
                         var pTags3 = $("#16");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#16').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine 4 ast");
                     }
                     else if ($(this).val() === '14') {
                         $('#14').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#13').removeAttr('style', 'color');
                         $('#15').removeAttr('style', 'color');
                         $('#16').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#14').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#13");
                         if (pTags.parent().is(".wrapper")) {
                             $('#13').unwrap();
                         }
                         var pTags2 = $("#15");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#15').unwrap();
                         }
                         var pTags3 = $("#16");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#16').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine 4 ast");
                     }
                     else if ($(this).val() === '15') {
                         $('#15').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#13').removeAttr('style', 'color');
                         $('#14').removeAttr('style', 'color');
                         $('#16').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#15').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#13");
                         if (pTags.parent().is(".wrapper")) {
                             $('#13').unwrap();
                         }
                         var pTags2 = $("#14");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#14').unwrap();
                         }
                         var pTags3 = $("#16");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#16').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine 4 ast");
                     }
                     else if ($(this).val() === '16') {
                         $('#16').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#13').removeAttr('style', 'color');
                         $('#14').removeAttr('style', 'color');
                         $('#15').removeAttr('style', 'color');
                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#16').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#13");
                         if (pTags.parent().is(".wrapper")) {
                             $('#13').unwrap();
                         }
                         var pTags2 = $("#14");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#14').unwrap();
                         }
                         var pTags3 = $("#15");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#15').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }

                 }
             );
         }
     );

//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".c").click(function () {
        $(".c").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});

//بعد از اینکه روی دکمه کلیک کردی مخفی میشود
$(document).ready(function () {
    $(".c").click(function () {
        $(".k4").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند


$(document).ready(function () {
    $(".c").click(function () {
        $('#p4').css('list-style-type', 'none');

    });
});

//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود


$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '17') {
                         $('#17').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#18').removeAttr('style', 'color');
                         $('#19').removeAttr('style', 'color');
                         $('#20').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#17').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#18");
                         if (pTags.parent().is(".wrapper")) {
                             $('#18').unwrap();
                         }
                         var pTags2 = $("#19");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#19').unwrap();
                         }
                         var pTags3 = $("#20");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#20').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine se ast");
                     }
                     else if ($(this).val() === '18') {
                         $('#18').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#117').removeAttr('style', 'color');
                         $('#19').removeAttr('style', 'color');
                         $('#20').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#18').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#17");
                         if (pTags.parent().is(".wrapper")) {
                             $('#17').unwrap();
                         }
                         var pTags2 = $("#19");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#19').unwrap();
                         }
                         var pTags3 = $("#20");
                         if (pTags3.parent().is(".wrapper")) {

                             $('#20').unwrap();
                         }

                         alert("javab ghalat ast,javab sahih gozine se ast");
                     }
                     else if ($(this).val() === '19') {
                         $('#19').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#17').removeAttr('style', 'color');
                         $('#19').removeAttr('style', 'color');
                         $('#20').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#19').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#18");
                         if (pTags.parent().is(".wrapper")) {
                             $('#18').unwrap();
                         }
                         var pTags2 = $("#17");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#17').unwrap();
                         }
                         var pTags3 = $("#20");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#20').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '20') {
                         $('#20').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#18').removeAttr('style', 'color');
                         $('#19').removeAttr('style', 'color');
                         $('#17').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#20').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#18");
                         if (pTags.parent().is(".wrapper")) {
                             $('#18').unwrap();
                         }
                         var pTags2 = $("#19");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#19').unwrap();
                         }
                         var pTags3 = $("#17");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#17').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine se ast");
                     }

                 }
             );
         }
     );

//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".d").click(function () {
        $(".d").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});

//بعد از اینکه روی دکمه کلیک کردی مخفی میشود
$(document).ready(function () {
    $(".d").click(function () {
        $(".k5").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند


$(document).ready(function () {
    $(".d").click(function () {
        $('#p5').css('list-style-type', 'none');

    });
});
//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود


$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '21') {
                         $('#21').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#22').removeAttr('style', 'color');
                         $('#23').removeAttr('style', 'color');
                         $('#24').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#21').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#22");
                         if (pTags.parent().is(".wrapper")) {
                             $('#22').unwrap();
                         }
                         var pTags2 = $("#23");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#23').unwrap();
                         }
                         var pTags3 = $("#24");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#24').unwrap();
                         }
                         alert("javab ghalat ast,gozine sahih javab do ast");
                     }
                     else if ($(this).val() === '22') {
                         $('#22').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#21').removeAttr('style', 'color');
                         $('#23').removeAttr('style', 'color');
                         $('#24').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#22').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#21");
                         if (pTags.parent().is(".wrapper")) {
                             $('#21').unwrap();
                         }
                         var pTags2 = $("#23");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#23').unwrap();
                         }
                         var pTags3 = $("#24");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#24').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '23') {
                         $('#23').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#21').removeAttr('style', 'color');
                         $('#22').removeAttr('style', 'color');
                         $('24').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#23').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#21");
                         if (pTags.parent().is(".wrapper")) {
                             $('#21').unwrap();
                         }
                         var pTags2 = $("#22");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#22').unwrap();
                         }
                         var pTags3 = $("#24");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#24').unwrap();
                         }
                         alert("javab ghalat ast,gozine sahih javab do ast");
                     }
                     else if ($(this).val() === '24') {
                         $('#24').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#21').removeAttr('style', 'color');
                         $('#22').removeAttr('style', 'color');
                         $('23').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#24').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#21");
                         if (pTags.parent().is(".wrapper")) {
                             $('#21').unwrap();
                         }
                         var pTags2 = $("#22");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#22').unwrap();
                         }
                         var pTags3 = $("#23");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#23').unwrap();
                         }
                         alert("javab ghalat ast,gozine sahih javab do ast");
                     }

                 }
             );
         }
     );

//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".e").click(function () {
        $(".e").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});
//بعد از اینکه روی دکمه کلیک کردی مخفی میشود


$(document).ready(function () {
    $(".e").click(function () {
        $(".k6").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند

$(document).ready(function () {
    $(".e").click(function () {
        $('#p6').css('list-style-type', 'none');

    });
});

//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '25') {
                         $('#25').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#26').removeAttr('style', 'color');
                         $('#27').removeAttr('style', 'color');
                         $('#28').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#25').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#26");
                         if (pTags.parent().is(".wrapper")) {
                             $('#26').unwrap();
                         }
                         var pTags2 = $("#27");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#27').unwrap();
                         }
                         var pTags3 = $("#28");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#28').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '26') {
                         $('#26').attr('style', 'color:red');
                         alert("javab ghalat ast,javab sahih gozine yek ast");
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#25').removeAttr('style', 'color');
                         $('#27').removeAttr('style', 'color');
                         $('#28').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#26').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#27");
                         if (pTags.parent().is(".wrapper")) {
                             $('#27').unwrap();
                         }
                         var pTags2 = $("#28");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#28').unwrap();
                         }
                         var pTags3 = $("#25");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#25').unwrap();
                         }
                     }
                     else if ($(this).val() === '27') {
                         $('#27').attr('style', 'color:red');
                         alert("javab ghalat ast,javab sahih gozine yek ast");
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#25').removeAttr('style', 'color');
                         $('#26').removeAttr('style', 'color');
                         $('#28').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#27').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#25");
                         if (pTags.parent().is(".wrapper")) {
                             $('#25').unwrap();
                         }
                         var pTags2 = $("#26");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#26').unwrap();
                         }
                         var pTags3 = $("#28");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#28').unwrap();
                         }
                     }
                     else if ($(this).val() === '28') {
                         $('#28').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#25').removeAttr('style', 'color');
                         $('#26').removeAttr('style', 'color');
                         $('#27').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#28').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#25");
                         if (pTags.parent().is(".wrapper")) {
                             $('#25').unwrap();
                         }
                         var pTags2 = $("#26");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#26').unwrap();
                         }
                         var pTags3 = $("#27");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#27').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine yek ast");
                     }

                 }
             );
         }
     );
//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".f").click(function () {
        $(".f").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});
//بعد از اینکه روی دکمه کلیک کردی مخفی میشود

$(document).ready(function () {
    $(".f").click(function () {
        $(".k7").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند

$(document).ready(function () {
    $(".f").click(function () {
        $('#p7').css('list-style-type', 'none');

    });
});



//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '29') {
                         $('#29').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#30').removeAttr('style', 'color');
                         $('#31').removeAttr('style', 'color');
                         $('#32').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#29').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("30");
                         if (pTags.parent().is(".wrapper")) {

                             $('#30').unwrap();
                         }
                         var pTags2 = $("#31");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#31').unwrap();
                         }
                         var pTags3 = $("#32");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#32').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '30') {
                         $('#30').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#29').removeAttr('style', 'color');
                         $('#31').removeAttr('style', 'color');
                         $('#32').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#30').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#29");
                         if (pTags.parent().is(".wrapper")) {
                             $('#29').unwrap();
                         }
                         var pTags2 = $("#31");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#31').unwrap();
                         }
                         var pTags3 = $("#32");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#32').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine yek ast");
                     }
                     else if ($(this).val() === '31') {
                         $('#31').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#30').removeAttr('style', 'color');
                         $('#29').removeAttr('style', 'color');
                         $('#32').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#31').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#30");
                         if (pTags.parent().is(".wrapper")) {
                             $('#30').unwrap();
                         }
                         var pTags2 = $("#29");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#29').unwrap();
                         }
                         var pTags3 = $("#32");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#32').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine yek ast");
                     }
                     else if ($(this).val() === '32') {
                         $('#32').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#30').removeAttr('style', 'color');
                         $('#31').removeAttr('style', 'color');
                         $('#29').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#32').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#30");
                         if (pTags.parent().is(".wrapper")) {
                             $('#30').unwrap();
                         }
                         var pTags2 = $("#31");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#31').unwrap();
                         }
                         var pTags3 = $("#29");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#29').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine yek ast");
                     }

                 }
             );
         }
     );

//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".g").click(function () {
        $(".g").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});
//بعد از اینکه روی دکمه کلیک کردی مخفی میشود


$(document).ready(function () {
    $(".g").click(function () {
        $(".k8").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند

$(document).ready(function () {
    $(".g").click(function () {
        $('#p8').css('list-style-type', 'none');

    });
});





//در این متن بستگی به انتخاب رادیو باتن متن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '33') {
                         $('#33').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#34').removeAttr('style', 'color');
                         $('#35').removeAttr('style', 'color');
                         $('#36').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#33').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#34");
                         if (pTags.parent().is(".wrapper")) {
                             $('#34').unwrap();
                         }
                         var pTags2 = $("#35");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#35').unwrap();
                         }
                         var pTags3 = $("#36");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#36').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine 2 ast");
                     }
                     else if ($(this).val() === '34') {
                         $('#34').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#33').removeAttr('style', 'color');
                         $('#35').removeAttr('style', 'color');
                         $('#26').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#34').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#35");
                         if (pTags.parent().is(".wrapper")) {
                             $('#35').unwrap();
                         }
                         var pTags2 = $("#33");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#33').unwrap();
                         }
                         var pTags3 = $("#36");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#36').unwrap();
                         }
                         alert("javab dade shode doost ast")
                     }
                     else if ($(this).val() === '35') {
                         $('#35').attr('style', 'color:red');
                         alert("javab ghalat ast,javab sahih gozine 2 ast");
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#33').removeAttr('style', 'color');
                         $('#34').removeAttr('style', 'color');
                         $('#36').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#35').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#34");
                         if (pTags.parent().is(".wrapper")) {
                             $('#34').unwrap();
                         }
                         var pTags2 = $("#33");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#33').unwrap();
                         }
                         var pTags3 = $("#36");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#36').unwrap();
                         }
                     }
                     else if ($(this).val() === '36') {
                         $('#36').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#33').removeAttr('style', 'color');
                         $('#34').removeAttr('style', 'color');
                         $('#35').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#36').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#33");
                         if (pTags.parent().is(".wrapper")) {
                             $('#33').unwrap();
                         }
                         var pTags2 = $("#34");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#34').unwrap();
                         }
                         var pTags3 = $("#35");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#35').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine 2 ast");
                     }

                 }
             );
         }
     );

//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$(document).ready(function () {
    $(".i").click(function () {
        $(".i").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});
//بعد از اینکه روی دکمه کلیک کردی مخفی میشود

$(document).ready(function () {
    $(".i").click(function () {
        $(".k9").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند

$(document).ready(function () {
    $(".i").click(function () {
        $('#p9').css('list-style-type', 'none');

    });
});


//در این متن بستگی به انتخاب رادیو باتنمتن کناری قرمز رنگ میشود

$('document').ready(
         function () {
             $('input:radio').click(
                 function () {
                     if ($(this).val() === '37') {
                         $('#37').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#40').removeAttr('style', 'color');
                         $('#38').removeAttr('style', 'color');
                         $('#39').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#37').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#38");
                         if (pTags.parent().is(".wrapper")) {
                             $('#38').unwrap();
                         }
                         var pTags2 = $("#39");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#39').unwrap();
                         }
                         var pTags3 = $("#40");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#40').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine se ast");
                     }
                     else if ($(this).val() === '38') {
                         $('#38').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#37').removeAttr('style', 'color');
                         $('#39').removeAttr('style', 'color');
                         $('#40').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#38').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#37");
                         if (pTags.parent().is(".wrapper")) {
                             $('#37').unwrap();
                         }
                         var pTags2 = $("#39");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#39').unwrap();
                         }
                         var pTags3 = $("#40");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#40').unwrap();
                         }
                         alert("javab ghalat ast");
                     }
                     else if ($(this).val() === '39') {
                         $('#39').attr('style', 'color:red');                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#37').removeAttr('style', 'color');
                         $('#38').removeAttr('style', 'color');
                         $('#40').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#39').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#37");
                         if (pTags.parent().is(".wrapper")) {
                             $('#37').unwrap();
                         }
                         var pTags2 = $("#38");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#38').unwrap();
                         }
                         var pTags3 = $("#40");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#40').unwrap();
                         }
                         alert("javab dade shode doost ast,javab sahih gozine se ast")

                     }
                     else if ($(this).val() === '40') {
                         $('#40').attr('style', 'color:red');
                         //بقیه را از حالت فرمزی در بیار ممککنه دست برع روی چند تا و قرمز بشن پس اگه بودن عوضشون کن
                         $('#37').removeAttr('style', 'color');
                         $('#38').removeAttr('style', 'color');
                         $('#39').removeAttr('style', 'color');

                         //برای اینکه به مت ن کنار رادیو باتن اگه انتخاب شد رنگ بک گراند بدهیم البته کلاس رب
                         $('#40').wrap('<div class="wrapper"></div>');
                         //برای اینکه اگر دستمان روی بقیه رفت اونها رپ نداشته باشن
                         var pTags = $("#37");
                         if (pTags.parent().is(".wrapper")) {
                             $('#37').unwrap();
                         }
                         var pTags2 = $("#38");
                         if (pTags2.parent().is(".wrapper")) {
                             $('#38').unwrap();
                         }
                         var pTags3 = $("#39");
                         if (pTags3.parent().is(".wrapper")) {
                             $('#39').unwrap();
                         }
                         alert("javab ghalat ast,javab sahih gozine se ast");
                     }

                 }
             );
         }
     );
//وقتی روی دکمه کلیک میکنی اولا یک آلرت بده 
$('document').ready(function () {
    $(".j").click(function () {
        $(".j").show(function () {
            alert("آیا اطمینان کامل دارید؟")
            //list-style-type:none;
        });
    });
});
//بعد از اینکه روی دکمه کلیک کردی مخفی میشود

$(document).ready(function () {
    $(".j").click(function () {
        $(".k10").hide(function () {

        });
    });
});
//بعد از اینکه پاک شد خود اساایل بولت را نیز پاک کند

$(document).ready(function () {
    $(".j").click(function () {
        $('#p10').css('list-style-type', 'none');

    });
});
