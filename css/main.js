// console.log("!")

// $( function(){
// 	$(".option").draggable();
// })

document.addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = "black";
});

// function mouseHandler(ev){
//     document.getElementById('boxshadow').style.transform = 'translateY('+(ev.clientY)+'px)';
//     document.getElementById('boxshadow').style.transform += 'translateX('+(ev.clientX)+'px)';            
// }

// document.getElementById("one").addEventListener("mousemove", mouseHandler)
// document.getElementById("two").addEventListener("mousemove", mouseHandler)
// document.getElementById("three").addEventListener("mousemove", mouseHandler)
// document.getElementById("four").addEventListener("mousemove", mouseHandler)
// document.getElementById("five").addEventListener("mousemove", mouseHandler)
// document.getElementById("six").addEventListener("mousemove", mouseHandler)
// document.getElementById("seven").addEventListener("mousemove", mouseHandler)
// document.getElementById("eight").addEventListener("mousemove", mouseHandler)
// document.getElementById("nine").addEventListener("mousemove", mouseHandler)
// document.getElementById("ten").addEventListener("mousemove", mouseHandler)

$("#one").mouseleave(function(){
  $("#boxshadow").hide()

});

$("#one").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/vandaorchid.jpg")
});

$("#two").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#two").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/lindakasabian.jpg")
});

$("#three").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#three").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/jim.jpg")
});

$("#four").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#four").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/livingtheater.jpg")
});

$("#five").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#five").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/bp.jpg")
});

$("#six").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#six").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/kathleen.jpg")
});

$("#seven").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#seven").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/typewriter.jpg")
});

$("#eight").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#eight").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/marvin.jpg")
});

$("#nine").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#nine").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/sf.jpg")
});

$("#ten").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#ten").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/cielodrive.jpg")
});

$("#eleven").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#eleven").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/cadillac.jpg")
});

$("#twelve").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#twelve").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/roman.jpg")
});

$("#thirteen").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#thirteen").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/bomb.jpg")
});

$("#fourteen").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#fourteen").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/xray.jpg")
});

$("#fifteen").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#fifteen").mouseover(function(){
  $("#boxshadow").show()
  $("#image").attr("src", "images/moving.jpg")
});
// $("#headershow1").mouseleave(function(){
//   $("#header").hide()
// });

// $("#headershow1").mouseover(function(){
//   $("#header").show()
// });

// $("#headershow2").mouseleave(function(){
//   $("#header").hide()
// });

// $("#headershow2").mouseover(function(){
//   $("#header").show()
// });



// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        $("body").css("background-color", "white");
//        $(".option").css("color", "black");
//    } else {
//    		$("body").css("background-color", "black");
//        $(".option").css("color", "white");
//    }
//    lastScrollTop = st;
// });

