function createAbout(){
    const about=document.createElement("div");
    about.classList.add("about");
    const title=document.createElement("h1");
    title.classList.add('about-title');
    title.textContent="About";
    about.appendChild(title);
    about.appendChild(createParagraph("A mug offers the perfect portion of food for one. And another fascinating tidbit is that you can make a mug meal faster than traditional meals."));
    about.appendChild(createParagraph("Each mug has been specially curated to satisfy your tastebuds."))
    about.appendChild(createParagraph(" At Grab a Mug the customer always comes first."))
    about.appendChild(createParagraph("Come transform your traditional dining experience and splurge on our wide range of mug meals."));
  
    return about;
  }
  function createParagraph(text){
    const para=document.createElement("p");
    para.textContent=text;
    return para;
  }
  
  function loadAbout(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
  }
  export default loadAbout;