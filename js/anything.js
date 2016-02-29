$(document).ready(function(){

$("#aboutnav").click(function(){
	 $('html, body').animate({
        scrollTop: $("#about").offset().top -125 }, 2000);
    return false;
});

$("#beernav").click(function(){
	 $('html, body').animate({
        scrollTop: $("#beerList").offset().top +350  }, 2000);
    return false;
});

$("#contactnav").click(function(){
	 $('html, body').animate({
        scrollTop: $("#contact").offset().top +125  }, 2000);
    return false;
});

$("#beerquiz").click(function(){
	 $('html, body').animate({
        scrollTop: $("#notSure").offset().top -125  }, 2000);
    return false;
});

$("#logonav").click(function(){
	console.log("hi");
	 $('html, body').animate({
        scrollTop: $("#splash").offset().top  }, 2000);
    return false;
});

$("#submitbutton").click(function(){

var ApricotCrushScore = 0
var TwapScore = 0
var FightScore = 0
var BrokenRecordScore = 0
var ManifestDestinyScore = 0
var ParisOfTheWestScore = 0
var IvanTheTerribleScore = 0
var SkunkApeScore = 0
var BoysenImpPorterScore = 0
var UrbanFarmhouseScore = 0
var SplitShotScore = 0
var DBAscore = 0
var SimtraScore = 0
var AgedPaleAleScore = 0
var NitroWakeUpDeadScore = 0
var CitraIpaScore = 0
var ImpBreakfastPorterScore = 0
var RhubabrianScore = 0
var ApricotCiderScore = 0
var JackRoseScore = 0

 		var afterThreeValue = $("#afterthree").val();
 		var appealValue = $("#appeal").val();
 		var locationValue = $("#location").val();
 			if (afterThreeValue === "buzz"){
 				 ApricotCrushScore += 1
 				 CitraIpaScore += 1
 				 BrokenRecordScore += 1
 				 ManifestDestinyScore += 1
 				 RhubabrianScore += 1
 				 DBAscore += 1
 			}
 			else if (afterThreeValue === "drunk"){
 				FightScore += 1
 				TwapScore += 1
 				SkunkApeScore += 1
 				UrbanFarmhouseScore += 1
 				SplitShotScore += 1
 				AgedPaleAleScore += 1
 				ApricotCiderScore += 1
 			}
 			else{
 				ParisOfTheWestScore += 1
 				IvanTheTerribleScore += 1
 				BoysenImpPorterScore += 1
 				NitroWakeUpDeadScore += 1
 				ImpBreakfastPorterScore += 1
 				JackRoseScore += 1
 				SimtraScore += 1
 			}
 			if (locationValue === "seattle"){
 				 ApricotCrushScore += 1
 				 CitraIpaScore += 1
 				 SplitShotScore += 1
 				 ApricotCiderScore += 1
 			}
 			else if (locationValue === "pnw"){
 				BrokenRecordScore += 1
 				ManifestDestinyScore += 1
 				RhubabrianScore += 1
 				FightScore += 1
 				TwapScore += 1
 				SkunkApeScore += 1
 				ImpBreakfastPorterScore += 1
 				UrbanFarmhouseScore += 1
 				BoysenImpPorterScore += 1
 			}
 			else{
 			}
 			if (appealValue === "hops"){
 				BrokenRecordScore += 2
 				CitraIpaScore += 2
 				SimtraScore += 2
 				ManifestDestinyScore += 2
 				SkunkApeScore += 2
 				TwapScore += 2
 			}
 			else if (appealValue === "fruit"){
 				JackRoseScore += 2
 				ApricotCrushScore += 2
 				ApricotCiderScore += 2
 				ParisOfTheWestScore += 2
 				RhubabrianScore += 2
 				FightScore += 2
 				UrbanFarmhouseScore += 2
 				AgedPaleAleScore += 2
 			}
 			else{
 				ImpBreakfastPorterScore += 2
 				BoysenImpPorterScore += 2
 				SplitShotScore += 2
 				IvanTheTerribleScore += 2
 				NitroWakeUpDeadScore += 2

 			}
			
 			


var beerArray = [
 		{ name: "Citra IPA", value: CitraIpaScore},
 		{ name: "DBA", value: DBAscore},
 		{ name: "Imperial Breakfast Porter", value: ImpBreakfastPorterScore},
 		{ name: "Boysen Imperial Porter", value: BoysenImpPorterScore},
 		{ name: "Split Shot", value: SplitShotScore},
 		{ name: "Ivan the Terrible", value: IvanTheTerribleScore},
 		{ name: "Nitro Wake Up Dead", value: NitroWakeUpDeadScore},
 		{ name: "Aged Pale Ale", value: AgedPaleAleScore},
 		{ name: "Urban Farmhouse", value: UrbanFarmhouseScore},
 		{ name: "Rhubarian Cider", value: RhubabrianScore},
 		{ name: "Paris of the West", value: ParisOfTheWestScore},
 		{ name: "Apricot Cider", value: ApricotCiderScore},
 		{ name: "Jack Rose", value: JackRoseScore},
 		{ name: "Apricot Crush", value: ApricotCrushScore},
 		{ name: "Its a Twap", value: TwapScore},
 		{ name: "ManifestDestinyScore", value: ManifestDestinyScore},
 		{ name: "Simtra", value: SimtraScore},
 		{ name: "Skunk Ape", value: SkunkApeScore},
 		{ name: "Broken Record", value: BrokenRecordScore},
 		{ name: "5440 or Fight", value: FightScore}
 		];


 	function custom_compare (a,b) {
  return a.value - b.value;
}
beerArray.sort(custom_compare).reverse();

for (var i=0;i<beerArray.length;i++) {
  console.log(beerArray[0].name);
  $("#winningchoice").html("You should order a" +" "+ beerArray[0].name);
}

 	
});



  // disable skrollr if the window is resized below 768px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 767) {
      skrollr.init().destroy();
       // skrollr.init() returns the singleton created above
       $("#abouth").remove();
       $("#about").remove();
       // $("#splash").removeClass();
       // $("#splash").addClass("splashmobile");
       $(".hsContent").remove();
       $("#beerList").removeClass("bcg");
       $("#curtain").remove();
       // $("#splash h3").html("Welcome to the Pine Box")
       $("#beerList").removeClass("curtainContainer");
       $("#googlemapspine").remove();
       $("#contact").remove();
       $("#splashmobiletext").html("WELCOME TO THE PINE BOX");
       $("#aboutsplashtext").html("We are proud to be a part of our Capitol Hill community and Seattle's history.  Built in 1923 this colonial style building of vaulted ceilings and leaded glass windows was once the new expansion of E.R Butterworths and Sons Family Funeral Business.  The main interior serves as their chapel, seating over 350 mourners, and included a pipe organ (above the kitchen) and a choir loft (above the main entrance).  The bar itself and many of the tables are built from reclaimed oak coffin cabinents once housed downstairs where the processing took place.  The ceramic block marked 33 located between our draft screens was part of the original urn storage.  As noted by local historian Clarence Bagely in 1929, this was the first business to offer comprehensive death-related services from corpse retreival to coffin slaes. On July 31, 1971 Butterworth and family provided these services to the family and loved once of Bruce Lee. Among his pallbearers were Steve Mcqueen, James Coburn, Chuck Norris and Lee's brother Robert.<br></br>Cheers to those still here and those who were.");
    }
  });





if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 767) { // only init skrollr on non-mobile devices
    skrollr.init();
}
$(window).on('resize', function () {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // no reason to destroy on mobile
        if ($(window).width() <= 767) {
          skrollr.init().destroy(); // skrollr.init() returns the singleton created above
        }
    }

});

  $(window).on('resize', function () {
    if ($(window).width() <= 700) {
      skrollr.init().destroy();
 

       // skrollr.init() returns the singleton created above
       $("#abouth").remove();
       $("#about").remove();
       $("#splash").removeClass();
       $("#splash").addClass("splashmobile");
       $(".hsContent").remove();
       $("#beerList").removeClass("bcg");
       $("#curtain").remove();
       $("#splash h3").html("Welcome to the Pine Box")
       $("#beerList").removeClass("curtainContainer");
       $("#googlemapspine").remove();
       $("#contact").remove();
       $("#splashmobiletext").html("WELCOME TO THE PINE BOX");
       $("#aboutsplashtext").html("We are proud to be a part of our Capitol Hill community and Seattle's history.  Built in 1923 this colonial style building of vaulted ceilings and leaded glass windows was once the new expansion of E.R Butterworths and Sons Family Funeral Business.  The main interior serves as their chapel, seating over 350 mourners, and included a pipe organ (above the kitchen) and a choir loft (above the main entrance).  The bar itself and many of the tables are built from reclaimed oak coffin cabinents once housed downstairs where the processing took place.  The ceramic block marked 33 located between our draft screens was part of the original urn storage.  As noted by local historian Clarence Bagely in 1929, this was the first business to offer comprehensive death-related services from corpse retreival to coffin slaes. On July 31, 1971 Butterworth and family provided these services to the family and loved once of Bruce Lee. Among his pallbearers were Steve Mcqueen, James Coburn, Chuck Norris and Lee's brother Robert.<br></br>Cheers to those still here and those who were.");
       }
  });




});


// });