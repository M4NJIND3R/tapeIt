/**
*   This script is commoon for all the pages of the site
*/

// will open the slide menu
function open_Menu() {
    document.getElementById("menu").style.width = "37%";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("menu").style.boxShadow = "0px 0px 21px 21px #202028";
}
// will close the slide menu
function close_Menu() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("menu").style.boxShadow = "0px 0px 0px 0px";
}

//array stores all the id names of all articles in main of the promotion.html file
var radioArticleId = ["radio1", "radio2", "radio3", "radio4", "radio5", "radio6", "radio7"];
// array stores the purple and orange color of the site
var colorArray = ["#41426f","#ff724a"];
// counter to trigegr the color change
var i=0;

// will change the article displayed on the site to the article of the id passed as the argument
function changeRadio(radio_display,buttonId,paraId,nameId,imgId){
  // stores the id of the radio article passed as the article which has to be displayed next
  var radio = radio_display;
  // loop to make all articles invisible except the article whoes id is passed as an argument
  for (let num = 0; num < 7; num++){
      if(radioArticleId[num] != radio){
          // sets the display proeprty of the articel to none to make it invisible
          document.getElementById(radioArticleId[num]).style.display = "none";
          // tarnsition time for smoothe flow
          document.getElementById(radioArticleId[num]).style.transition = "500ms";
      }
  }
    // sets the color of the different componenets in contrast to each other
    document.getElementById(radio).style.display = "block";
    document.getElementById("main").style.backgroundColor = colorArray[i%2];
    i++;
    buttonId.style.backgroundColor = colorArray[i%2];
    paraId.style.color = colorArray[i%2];
    nameId.style.backgroundColor = colorArray[i%2];
    imgId.style.boxShadow = "56px 53px 0px 0px" + colorArray[i%2];
    i++;
    buttonId.style.color = colorArray[i%2];
    i++;
    document.getElementById(radio).style.transition = "500ms";
    document.getElementById("main").style.transition = "500ms";
}


// chanegs the image src to colored ones of the social media links in contact.html
function showColorImg(x){
  if(x.id == "ig"){
    x.src = "../img/ig-color.png";
  }
  else if (x.id == "wa") {
    x.src = "../img/wa-color.png";
  }else if (x.id == "fb") {
    x.src = "../img/fb-color.png";
  }else if (x.id == "tw") {
    x.src = "../img/tw-color.png";
  }else if (x.id == "tg") {
    x.src = "../img/tg-color.png";
  }else if (x.id == "yt") {
    x.src = "../img/yt-color.png";
  }
}

// chanegs the image src of the social media links back to normal in contact.html
function showNormalImg(x){
  if(x.id == "ig"){
    x.src = "../img/ig.png";
  }
  else if (x.id == "wa") {
    x.src = "../img/wa.png";
  }else if (x.id == "fb") {
    x.src = "../img/fb.png";
  }else if (x.id == "tw") {
    x.src = "../img/tw.png";
  }else if (x.id == "tg") {
    x.src = "../img/tg.png";
  }else if (x.id == "yt") {
    x.src = "../img/yt.png";
  }
}
