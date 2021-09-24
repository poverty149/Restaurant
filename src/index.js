import initializeWebsite from "./website";
import loadAbout from "./about";


initializeWebsite();


document.getElementById("explore").addEventListener("click",clickExplore,{once:false});
  
  function clickExplore(){
    const aboutButton=document.querySelector(".aboutbtn");
    const homeButton=document.querySelector(".homebtn");
    homeButton.classList.remove('active');
    aboutButton.classList.add('active');
    
  
    loadAbout();
  }