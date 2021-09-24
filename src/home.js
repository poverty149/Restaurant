import loadAbout from "./about";
import setActiveButton from "./website";
function createHome(){
  const home=document.createElement("div");
  home.classList.add("home");

  const welcome=document.createElement("h1");
  welcome.classList.add("welcome");
  welcome.textContent="Welcome!";

  const text=document.createElement("h1");
  text.classList.add("subtext");
  text.textContent="Experience the world in a mug.";

  var explore=document.createElement("button");
  explore.textContent="Explore";
  explore.classList.add("explore");
  explore.setAttribute("id","explore");
  
  

  home.appendChild(welcome);
  home.appendChild(text);
  home.appendChild(explore);

  return home;
}

function loadHome(){
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}
export default loadHome;