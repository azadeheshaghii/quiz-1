//جوابهای صحیح ما به شکل زیر است
//[1, 2, 3, 4, 3, 2, 1, 1, 2, 3]
//در تابع زیر نمایش میدهیم که چند تا سوال را جواب درست داده ایم
function send() {
    var soal1 = document.getElementsByName("soal1");
    var sum = 0;
    if (soal1[0].checked == true) {
        sum++
    }
    var soal2 = document.getElementsByName("soal2");
    if (soal2[1].checked == true) {
        sum++

    }
    var soal3 = document.getElementsByName("soal3");
    if (soal3[2].checked == true) {
        sum++

    }
    var soal4 = document.getElementsByName("soal4");
    if (soal4[3].checked == true) {

        sum++

    }
    var soal5 = document.getElementsByName("soal5");
    if (soal5[2].checked == true) {
        sum++

    }
    var soal6 = document.getElementsByName("soal6");
    if (soal6[1].checked == true) {
        sum++

    }
    var soal7 = document.getElementsByName("soal7");
    if (soal7[0].checked == true) {
        sum++

    }
    var soal8 = document.getElementsByName("soal8");
    if (soal8[0].checked == true) {
        sum++

    }
    var soal9 = document.getElementsByName("soal9");
    if (soal9[1].checked == true) {
        sum++

    }
    var soal10 = document.getElementsByName("soal10");
    if (soal10[2].checked == true) {
        sum++

    }
    //متغیر که ما گرفتیم برای اینکه بتواند در آلرت نمایش داده شود باید تبدیل به رشته با تابع زیر شود
    var n = sum.toString();
    //برای اینکه کنار رشته های دیگر در الرت نمایش داده شود باید +شود 
    alert(["shoma " + n + " ta az 10 ta dorostt j dadid"]);
    return true;
}
