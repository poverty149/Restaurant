import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Grab a Mug";
  
    header.appendChild(restaurantName);
    header.appendChild(createNav());
  
    return header;
  }
  function createNav(){
      const nav=document.createElement("nav");


      
      const aboutButton=document.createElement("button");
      aboutButton.classList.add('nav-button');
      aboutButton.classList.add('aboutbtn');
      aboutButton.textContent="About";
      aboutButton.addEventListener("click",(e)=>{
          if(e.target.classList.contains('active')){
              return;
          }setActiveButton(aboutButton);
          loadAbout();

      });
      const homeButton=document.createElement("button");
      homeButton.classList.add('nav-button');
      homeButton.classList.add('homebtn');
      
      homeButton.textContent="Home";
      homeButton.addEventListener("click",(e)=>{
          if(e.target.classList.contains('active')){
              return;
          }setActiveButton(homeButton);
          loadHome();

      });
      const menuButton=document.createElement("button");
      menuButton.classList.add('nav-button');
      menuButton.textContent="Menu";
      menuButton.addEventListener("click",(e)=>{
          if(e.target.classList.contains('active')){
              return;
          }setActiveButton(menuButton);
          loadMenu();

      });
      const contactButton=document.createElement("button");
      contactButton.classList.add('nav-button');
      contactButton.textContent="Contact";
      contactButton.addEventListener("click",(e)=>{
          if(e.target.classList.contains('active')){
              return;
          }setActiveButton(contactButton);
          loadContact();

      });
      nav.appendChild(homeButton);
      nav.appendChild(aboutButton);
      nav.appendChild(menuButton);
      nav.appendChild(contactButton);

      return nav;
    }
    

    function setActiveButton(button){
        const buttons=document.querySelectorAll(".nav-button");
        
        buttons.forEach((button) => {
            if(button!==this){
                button.classList.remove('active');
            }
            
        });
        button.classList.add("active");

    }
    function createMain(){
        const main=document.createElement("main");
        main.classList.add('main');
        main.setAttribute("id","main");
        return main;
    }

    function createFooter() {
        const footer = document.createElement("footer");
        footer.classList.add("footer");
      
        const copyright = document.createElement("p");
        copyright.textContent = "Copyright © ParvathyUK";
      
        const githubLink = document.createElement("a");
        githubLink.href = "https://github.com/poverty149";
      
        const githubIcon = document.createElement("i");
        githubIcon.classList.add("fab");
        githubIcon.classList.add("fa-github");
      
        githubLink.appendChild(githubIcon);
        footer.appendChild(copyright);
        footer.appendChild(githubLink);
      
        return footer;
      }
      
      function initializeWebsite() {
        const content = document.getElementById("content");
      
        content.appendChild(createHeader());
        content.appendChild(createMain());
        content.appendChild(createFooter());
      
        setActiveButton(document.querySelector(".nav-button"));
        loadHome();
        

      }
      
      export default initializeWebsite;