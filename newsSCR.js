
function bigger(zat){
    zat.style.fontSize = "30px";

}
function smaller(zat){
    zat.style.fontSize = "25px";
}
function yesclick(element){
    $("#news1").hide(1000);
    $("#news1_2").show(1000);
    $("#news1_3").hide(1000);
    $("#news1_4").hide(1000);


    $('#news1_2').css('visibility', 'visible');
    $('#sozlar1_2').css('margin-left', '30%');
    $('#news1_2').css('display', 'flex');



    $("#news2").hide(1000);
    $("#news2_2").show(1000);
    $("#news2_3").hide(1000);
    $("#news2_4").hide(1000);

    $('#news2_2').css('visibility', 'visible');
    $('#sozlar2_2').css('margin-left', '30%');
    $('#news2_2').css('display', 'flex');

    $("#news3").hide(1000);
    $("#news3_2").show(1000);
    $("#news3_3").hide(1000);
    $("#news3_4").hide(1000);

    $('#news3_2').css('visibility', 'visible');
    $('#sozlar3_2').css('margin-left', '30%');
    $('#news3_2').css('display', 'flex');

    $("#news4").hide(1000);
    $("#news4_2").show(1000);
    $("#news4_3").hide(1000);
    $("#news4_4").hide(1000);

    $('#news4_2').css('visibility', 'visible');
    $('#news4_2').css('display', 'flex');

    $("#news5").hide(1000);
    $("#news5_2").show(1000);
    $("#news5_3").hide(1000);
    $("#news5_4").hide(1000);

    $('#news5_2').css('visibility', 'visible');
    $('#news5_2').css('display', 'flex');



    $('#yesterday').css('color', 'brown');
    $('#today').css('color', 'white');
    $('#weekago').css('color', 'white');
    $('#oldest').css('color', 'white');


    // $('#news1').css('visibility', 'hidden');
    // $('#news1').css('display', 'none');
    

    // $('#news2').css('visibility', 'hidden');
    // $('#news2').css('display', 'none');
    // $('#news2_2').css('visibility', 'visible');
    // $('#sozlar2_2').css('margin-left', '30%');
    // $('#news2_2').css('display', 'flex');

    // $('#news3').css('visibility', 'hidden');
    // $('#news3').css('display', 'none');
    // $('#news3_2').css('visibility', 'visible');
    // $('#sozlar3_2').css('margin-left', '30%');
    // $('#news3_2').css('display', 'flex');

}
function todayclick(element){
    $('#yesterday').css('color', 'white');
    $('#today').css('color', 'brown');
    $('#weekago').css('color', 'white');
    $('#oldest').css('color', 'white');

    $("#news1").show(1000);
    $("#news1_2").hide(1000);
    $("#news1_3").hide(1000);
    $("#news1_4").hide(1000);

    $("#news2").show(1000);
    $("#news2_2").hide(1000);
    $("#news2_3").hide(1000);
    $("#news2_4").hide(1000);

    $("#news3").show(1000);
    $("#news3_2").hide(1000);
    $("#news3_3").hide(1000);
    $("#news3_4").hide(1000);

    $("#news4").show(1000);
    $("#news4_2").hide(1000);
    $("#news4_3").hide(1000);
    $("#news4_4").hide(1000);

    $("#news5").show(1000);
    $("#news5_2").hide(1000);
    $("#news5_3").hide(1000);
    $("#news5_4").hide(1000);

}

function weekclick(){
    $('#yesterday').css('color', 'white');
    $('#today').css('color', 'white');
    $('#weekago').css('color', 'brown');
    $('#oldest').css('color', 'white');

    $("#news1").hide(1000);
    $("#news1_2").hide(1000);
    $("#news1_3").show(1000);
    $("#news1_4").hide(1000);

    $("#news2").hide(1000);
    $("#news2_2").hide(1000);
    $("#news2_3").show(1000);
    $("#news2_4").hide(1000);

    $("#news3").hide(1000);
    $("#news3_2").hide(1000);
    $("#news3_3").show(1000);
    $("#news3_4").hide(1000);

    $("#news4").hide(1000);
    $("#news4_2").hide(1000);
    $("#news4_3").show(1000);
    $("#news4_4").hide(1000);

    $("#news5").hide(1000);
    $("#news5_2").hide(1000);
    $("#news5_3").show(1000);
    $("#news5_4").hide(1000);


    $('#news1_3').css('visibility', 'visible');
    $('#news1_3').css('display', 'flex');

    $('#news2_3').css('visibility', 'visible');
    $('#news2_3').css('display', 'flex');

    $('#news3_3').css('visibility', 'visible');
    $('#news3_3').css('display', 'flex');

    $('#news4_3').css('visibility', 'visible');
    $('#news4_3').css('display', 'flex');

    $('#news5_3').css('visibility', 'visible');
    $('#news5_3').css('display', 'flex');

}
function oldestclick(){

    $('#yesterday').css('color', 'white');
    $('#today').css('color', 'white');
    $('#weekago').css('color', 'white');
    $('#oldest').css('color', 'brown');

    $("#news1").hide(1000);
    $("#news1_2").hide(1000);
    $("#news1_3").hide(1000);
    $("#news1_4").show(1000);

    $("#news2").hide(1000);
    $("#news2_2").hide(1000);
    $("#news2_3").hide(1000);
    $("#news2_4").show(1000);

    $("#news3").hide(1000);
    $("#news3_2").hide(1000);
    $("#news3_3").hide(1000);
    $("#news3_4").show(1000);

    $("#news4").hide(1000);
    $("#news4_2").hide(1000);
    $("#news4_3").hide(1000);
    $("#news4_4").show(1000);

    $("#news5").hide(1000);
    $("#news5_2").hide(1000);
    $("#news5_3").hide(1000);
    $("#news5_4").show(1000);


    $('#news1_4').css('visibility', 'visible');
    $('#news1_4').css('display', 'flex');

    $('#news2_4').css('visibility', 'visible');
    $('#news2_4').css('display', 'flex');

    $('#news3_4').css('visibility', 'visible');
    $('#news3_4').css('display', 'flex');

    $('#news4_4').css('visibility', 'visible');
    $('#news4_4').css('display', 'flex');

    $('#news5_4').css('visibility', 'visible');
    $('#news5_4').css('display', 'flex');

}
function youtube(){
    window.location.href ="https://youtube.com/@marvel";
}
function telegram(){
    window.location.href ="http://127.0.0.1:5500/laslab4.html";
}
function insta(){
    window.location.href ="https://t.me/MarvelEntertainment_1";
}
function facebook(){
    window.location.href ="http://127.0.0.1:5500/laslab4.html";
}
function twitter(){
    window.location.href ="http://127.0.0.1:5500/laslab4.html";

}

function changeName(){
    var x=document.getElementById('email').value;
    document.getElementById('idname').innerHTML=x;
  
    
}

const openRega=document.getElementById('dddd');
const closeRega=document.getElementById('closeBB');
const regaR= document.getElementById('reg');
const creatAc=document.getElementById('submit');
openRega.addEventListener('click', function(e){
    e.preventDefault();
    regaR.classList.add('active');
})
closeRega.addEventListener('click', ()=>{
    regaR.classList.remove('active');
})
creatAc.addEventListener('click', ()=>{
    regaR.classList.remove('active');
})



function game(){
    document.getElementsByTagName("html").style.backgroundColor ="black";

}

function ani(element){
    var x = "#"+ element;
    $(x).animate({

        width: "+=25px", height: "+=25px"
    },"slow");

}

function an(element){
    var x = "#" +element;
    $(x).animate({
        width: "-=25px", height: "-=25px"
    },"slow");
}

var count = 0;

function sld(element){
    var x = '#' + element;
    $(x).hide(1000);
    count -=1;
    
    if(count ==0 ){
        $('#kino').hide(500);
    }
}

function sls(element){
    document.getElementById('kino').style.display = "block";
    document.getElementById(element).style.display = "flex";
    var x = '#' + element;
    $(x).hide(0);
    $(x).show(900);
    count += 1;
}
