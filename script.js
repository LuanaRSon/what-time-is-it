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
const btnStopMusic = document.getElementsByClassName("btn-stop")[0];

const getTime = () => {
  const data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let fullTime;
  
  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  fullTime = `${hour}:${minutes}`;    

  return fullTime;
}

function changeLayout(hour) {  
  const imgContainer = document.getElementById("main-img"); 

  const morningBackgroundColor1 = "rgba(97, 140, 241, 0.897)";
  const morningBackgroundColor2 = "rgb(53, 87, 165)";
  const afternoonBackgroundColor1 = "#f1ae8cd8";
  const afternoonBackgroundColor2 = "#e07139";
  const nightBackgroundColor1 = "#314B50";
  const nightBackgroundColor2 = "#2f3538";
  
  if (hour >= 6 && hour < 12) {
    imgContainer.src = images[0].srcImg;
    imgContainer.alt = images[0].altText;
    document.body.style.background = `linear-gradient(${morningBackgroundColor1} 35%, ${morningBackgroundColor2})`;
    btnAlarm.style.background = morningBackgroundColor1; 
    btnStopMusic.style.background = morningBackgroundColor1;

  } else if (hour >= 12 && hour < 18) {
    imgContainer.src = images[1].srcImg;
    imgContainer.alt = images[1].altText;   
    document.body.style.background = `linear-gradient(${afternoonBackgroundColor1} 35%, ${afternoonBackgroundColor2})`;   
    btnAlarm.style.background = afternoonBackgroundColor1;  
    btnStopMusic.style.background = afternoonBackgroundColor1;

  } else {    
    imgContainer.src = images[2].srcImg;
    imgContainer.alt = images[2].altText;
    document.body.style.background = `linear-gradient(${nightBackgroundColor1} 35%, ${nightBackgroundColor2})`; 
    btnAlarm.style.background = nightBackgroundColor1;   
    btnStopMusic.style.background = nightBackgroundColor1;
  }
};

let showTimeInterval = setInterval(showTime, 700);
function showTime() {
  const message = document.getElementById("hour-message");

  const time = getTime();  
  const hour = parseInt(time);  

  changeLayout(hour);  

  message.innerHTML = `Agora são ${time} horas.`      
}

// Functions in development, not ready yet.
// let setAlarmInterval;
// const intervalFunction = () => setAlarmInterval = setInterval(setAlarm, 700);

// function setAlarm() {    
//   const alarmTime = document.getElementsByClassName("input-time")[0].value;
//   const song = document.getElementsByClassName("select-song")[0].value;
//   const time = getTime();

//   if (alarmTime === time) {
//     music1.play();    
//   }    
// };

// function stopMusic() { 
//   clearInterval(setAlarmInterval);
//   music1.currentTime = 0;   
//   music1.pause(); 
// }

// btnAlarm.addEventListener("click", intervalFunction);
// btnStopMusic.addEventListener("click", stopMusic);
