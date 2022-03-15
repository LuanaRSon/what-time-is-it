const images = [
{
  altText: "Imagem do céu da manhã.",
  srcImg: "./assets/morning.jpg"
},
{
  altText: "Imagem do céu da tarde.",
  srcImg: "./assets/afternoon.jpg"
},
{
  altText: "Imagem do céu da noite.",
  srcImg: "./assets/night.jpg"
}];

const btnAlarm = document.getElementsByClassName("btn-alarm")[0];

function getTime() {  
  const message = document.getElementById("hour-message"); 

  const data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  message.innerHTML = `Agora são ${hour}:${minutes} horas.` 
  changeLayout(hour);
  setTimeout("getTime()",500);
}

function changeLayout(hour) {  
  const img = document.getElementById("main-img");    

  if (hour >= 6 && hour < 12) {
    img.src = images[0].srcImg;
    img.alt = images[0].altText;
    document.body.style.background = "linear-gradient(rgba(97, 140, 241, 0.897) 35%, rgb(53, 87, 165)";
    btnAlarm.style.background = "rgba(97, 140, 241, 0.897)";   

  } else if (hour >= 12 && hour < 18) {
    img.src = images[1].srcImg;
    img.alt = images[1].altText;   
    document.body.style.background = "linear-gradient(#f1ae8cd8 35%, #e07139)";   
    btnAlarm.style.background = "#f1ae8cd8";  

  } else {    
    img.src = images[2].srcImg;
    img.alt = images[2].altText;
    document.body.style.background = "linear-gradient(#314B50 35%, #2f3538)"; 
    btnAlarm.style.background = "#314B50";   

  }
};

// EM DESENVOLVIMENTO
// function setAlarm(hour, minutes) {
//   const alarmTime = document.getElementsByClassName("input-time")[0].value;
//   const song = document.getElementsByClassName("select-song")[0].value;  
// };

// btnAlarm.addEventListener("click", setAlarm);

// EM DESENVOLVIMENTO
// function showTime() {
//   const message = document.getElementById("hour-message"); 

//   setTimeout("showTime()",500);
// }