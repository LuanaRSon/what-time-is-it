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

function getTime() {  
  const message = document.getElementById("hour-message"); 

  const data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();

  if (hour < 10 && minutes < 10) {
    message.innerHTML = `Agora são 0${hour}:0${minutes} horas.`    
  } else if (hour < 10 && minutes > 10) {
    message.innerHTML = `Agora são 0${hour}:${minutes} horas.`    
  } else if (hour > 10 && minutes < 10) {
    message.innerHTML = `Agora são ${hour}:0${minutes} horas.`  
  } else {
    message.innerHTML = `Agora são ${hour}:${minutes} horas.`
  }  
  changeLayout(hour);
  setTimeout("getTime()",500);
}

function changeLayout(hour) {  
  const img = document.getElementById("main-img");
  const body = document.getElementsByTagName("body")[0];    

  if (hour >= 6 && hour < 12) {
    img.src = images[0].srcImg;
    img.alt = images[0].altText;
    document.body.style.background = "linear-gradient(rgba(97, 140, 241, 0.897) 35%, rgb(53, 87, 165)";      

  } else if (hour >= 12 && hour < 18) {
    img.src = images[1].srcImg;
    img.alt = images[1].altText;   
    document.body.style.background = "linear-gradient(#f1ae8cd8 35%, #e07139)";     

  } else {    
    img.src = images[2].srcImg;
    img.alt = images[2].altText;
    document.body.style.background = "linear-gradient(#314B50 35%, #2f3538)";    

  }
};


