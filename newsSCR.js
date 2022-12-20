function tsinfo(){
    $("#word1").slideDown("slow");
}
function bigger(zat){
    zat.style.fontSize = "30px";

}
function smaller(zat){
    zat.style.fontSize = "25px";
}
function yesclick(element){
    $("#news1_2").hide(0);
    $("#news1").hide(1000);
    $("#news1_2").show(1000);
    $("#news1_3").hide(1000);
    $("#news1_4").hide(1000);


    $('#news1_2').css('visibility', 'visible');
    $('#sozlar1_2').css('margin-left', '30%');
    $('#news1_2').css('display', 'flex');


    $("#news2_2").hide(0);
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

function reg(){
    document.getElementsByClassName("reg")[0].style.display = "flex";
}

function game(){
    document.getElementsByTagName("html").style.backgroundColor ="black";

}
function ash1(){
    $("#sur1_2").hide(0);
    $("#sur1").hide(1000);
    $("#sur1_2").show(1000);
    $('#at1_2').hide(0);
    $('#at1').hide(0);
    $('#at1_2').show(1000);

    
    //     width: '100%',
    //   },'slow');
}
function ash11(){
    $("#sur1_2").hide(1000);
    $("#sur1").show(1000);

    $('#at1_2').hide(0);
    $('#at1').show(1000);


}
function ash2(){
    $("#sur2_2").hide(0);
    $("#sur2").hide(1000);
    $("#sur2_2").show(1000);

    $('#at2_2').hide(0);
    $('#at2').hide(1000);
    $('#at2_2').show(1000);

    

}
function ash22(){
    $("#sur2_2").hide(1000);
    $("#sur2_3").show(1000);

    $('#at2_2').hide(1000);
    $('#at2_3').show(1000);

    

}
function ash23(){
    $("#sur2_3").hide(1000);
    $("#sur2_4").show(1000);

    $('#at2_3').hide(1000);
    $('#at2_4').show(1000);


}
function ash24(){
    $("#sur2_4").hide(1000);
    $("#sur2").show(1000);

    $('#at2_4').hide(1000);
    $('#at2').show(1000);

}
function ash3(){
    $("#sur3_2").hide(0);
    $("#sur3").hide(1000);
    $("#sur3_2").show(1000);
    $('#at3_2').hide(0);
    $('#at3').hide(0);
    $('#at3_2').show(1000);


}
function ash33(){
    $("#sur3_2").hide(1000);
    $("#sur3").show(1000);

    $('#at3_2').hide(0);
    $('#at3').show(1000);


}
function ash4(){
    $("#sur4_2").hide(0);
    $("#sur4").hide(1000);
    $("#sur4_2").show(1000);
    $('#at4_2').hide(0);
    $('#at4').hide(0);
    $('#at4_2').show(1000);


}
function ash44(){
    $("#sur4_2").hide(1000);
    $("#sur4").show(1000);

    $('#at4_2').hide(0);
    $('#at4').show(1000);

}
function ekk1(){
    $("#surr1_2").hide(0);
    $("#surr1").hide(1000);
    $("#surr1_2").show(1000);
    $('#att1_2').hide(0);
    $('#att1').hide(0);
    $('#att1_2').show(1000);

    
    //     width: '100%',
    //   },'slow');
}
function ekk11(){
    $("#surr1_2").hide(1000);
    $("#surr1").show(1000);

    $('#att1_2').hide(0);
    $('#att1').show(1000);


}
function ekk2(){
    $("#surr2_2").hide(0);
    $("#surr2").hide(1000);
    $("#surr2_2").show(1000);

    $('#att2_2').hide(0);
    $('#att2').hide(1000);
    $('#att2_2').show(1000);

    

}
function ekk22(){
    $("#surr2_2").hide(1000);
    $("#surr2").show(1000);

    $('#att2_2').hide(1000);
    $('#att2').show(1000);

    

}

function ekk3(){
    $("#surr3_2").hide(0);
    $("#surr3").hide(1000);
    $("#surr3_2").show(1000);
    $('#att3_2').hide(0);
    $('#att3').hide(0);
    $('#att3_2').show(1000);


}
function ekk33(){
    $("#surr3_2").hide(1000);
    $("#surr3").show(1000);

    $('#att3_2').hide(0);
    $('#att3').show(1000);


}
function ekk4(){
    $("#surr4_2").hide(0);
    $("#surr4").hide(1000);
    $("#surr4_2").show(1000);
    $('#att4_2').hide(0);
    $('#att4').hide(0);
    $('#att4_2').show(1000);


}
function ekk44(){
    $("#surr4_2").hide(1000);
    $("#surr4").show(1000);

    $('#att4_2').hide(0);
    $('#att4').show(1000);

}
function ush1(){
    $("#ssur1_2").hide(0);
    $("#ssur1").hide(1000);
    $("#ssur1_2").show(1000);
    $('#aat1_2').hide(0);
    $('#aat1').hide(0);
    $('#aat1_2').show(1000);

    
    //     width: '100%',
    //   },'slow');
}
function ush11(){
    $("#ssur1_2").hide(1000);
    $("#ssur1").show(1000);

    $('#aat1_2').hide(0);
    $('#aat1').show(1000);


}
function ush2(){
    $("#ssur2_2").hide(0);
    $("#ssur2").hide(1000);
    $("#ssur2_2").show(1000);

    $('#aat2_2').hide(0);
    $('#aat2').hide(1000);
    $('#aat2_2').show(1000);
    

}
function ush22(){
    $("#ssur2_2").hide(1000);
    $("#ssur2").show(1000);

    $('#aat2_2').hide(1000);
    $('#aat2').show(1000);



}

function ush3(){
    $("#ssur3_2").hide(0);
    $("#ssur3").hide(1000);
    $("#ssur3_2").show(1000);
    $('#aat3_2').hide(0);
    $('#aat3').hide(0);
    $('#aat3_2').show(1000);


}
function ush33(){
    $("#ssur3_2").hide(1000);
    $("#ssur3").show(1000);

    $('#aat3_2').hide(0);
    $('#aat3').show(1000);


}
function ush4(){
    $("#ssur4_2").hide(0);
    $("#ssur4").hide(1000);
    $("#ssur4_2").show(1000);
    $('#aat4_2').hide(0);
    $('#aat4').hide(0);
    $('#aat4_2').show(1000);


}
function ush44(){
    $("#ssur4_2").hide(1000);
    $("#ssur4").show(1000);

    $('#aat4_2').hide(0);
    $('#aat4').show(1000);

}
function tor1(){
    $("#su1_2").hide(0);
    $("#su1").hide(1000);
    $("#su1_2").show(1000);
    $('#ata1_2').hide(0);
    $('#ata1').hide(0);
    $('#ata1_2').show(1000);

    
    //     width: '100%',
    //   },'slow');
}
function tor11(){
    $("#su1_2").hide(1000);
    $("#su1").show(1000);

    $('#ata1_2').hide(0);
    $('#ata1').show(1000);


}
function tor2(){
    $("#su2_2").hide(0);
    $("#su2").hide(1000);
    $("#su2_2").show(1000);

    $('#ata2_2').hide(0);
    $('#ata2').hide(1000);
    $('#ata2_2').show(1000);

    

}
function tor22(){
    $("#su2_2").hide(1000);
    $("#su2").show(1000);

    $('#ata2_2').hide(1000);
    $('#ata2').show(1000);

    

}

function tor3(){
    $("#su3_2").hide(0);
    $("#su3").hide(1000);
    $("#su3_2").show(1000);
    $('#ata3_2').hide(0);
    $('#ata3').hide(0);
    $('#ata3_2').show(1000);


}
function tor33(){
    $("#su3_2").hide(1000);
    $("#su3").show(1000);

    $('#ata3_2').hide(0);
    $('#ata3').show(1000);


}
function tor4(){
    $("#su4_2").hide(0);
    $("#su4").hide(1000);
    $("#su4_2").show(1000);
    $('#ata4_2').hide(0);
    $('#ata4').hide(0);
    $('#ata4_2').show(1000);


}
function tor44(){
    $("#su4_2").hide(1000);
    $("#su4").show(1000);

    $('#ata4_2').hide(0);
    $('#ata4').show(1000);

}