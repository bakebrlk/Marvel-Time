
function bigger(zat){
    zat.style.fontSize = "30px";

}
function smaller(zat){
    zat.style.fontSize = "25px";
}
function yesclick(element){
    $('#yesterday').css('color', 'brown');
    $('#today').css('color', 'white');
    $('#weekago').css('color', 'white');
    $('#oldest').css('color', 'white');

    $('#news1').css('visibility', 'hidden');
    $('#news1').css('display', 'none');
    $('#news1_2').css('visibility', 'visible');
    $('#sozlar1_2').css('margin-left', '30%');
    $('#news1_2').css('display', 'flex');

    $('#news2').css('visibility', 'hidden');
    $('#news2').css('display', 'none');
    $('#news2_2').css('visibility', 'visible');
    $('#sozlar2_2').css('margin-left', '30%');
    $('#news2_2').css('display', 'flex');

    $('#news3').css('visibility', 'hidden');
    $('#news3').css('display', 'none');
    $('#news3_2').css('visibility', 'visible');
    $('#sozlar3_2').css('margin-left', '30%');
    $('#news3_2').css('display', 'flex');

}
function todayclick(element){
    $('#yesterday').css('color', 'white');
    $('#today').css('color', 'brown');
    $('#weekago').css('color', 'white');
    $('#oldest').css('color', 'white');

    $('#news1').css('visibility', 'visible');
    $('#news1').css('display', 'flex');
    $('#news1_2').css('visibility', 'hidden');
    $('#sozlar1_2').css('margin-left', '30%');
    $('#brr').css('display', 'none');
    $('#news1_2').css('display', 'none');

    $('#news2').css('visibility', 'visible');
    $('#news2').css('display', 'flex');
    $('#news2_2').css('visibility', 'hidden');
    $('#sozlar2_2').css('margin-left', '30%');
    $('#news2_2').css('display', 'none');

    $('#news3').css('visibility', 'visible');
    $('#news3').css('display', 'flex');
    $('#news3_2').css('visibility', 'hidden');
    $('#sozlar3_2').css('margin-left', '30%');
    $('#news3_2').css('display', 'none');
}