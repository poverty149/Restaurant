
function CreateContact(){
  const contact=document.createElement("div");
  contact.classList.add("contact");
  
  const title=document.createElement("h1");
  title.classList.add('contact-title');
  title.textContent="Contact";

  const phone=document.createElement("p");
  phone.textContent="📞 (530) 666-0420";
  
  const address=document.createElement("p");
  address.textContent="🏠 Mistletoe Lane, Redding, CA, USA";
  
  const restaurantLocation=document.createElement("img");
  restaurantLocation.src="restaurantLocation.png";
  
  contact.appendChild(title);
  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);
  return contact
  
  }
  function loadContact() {
      const main = document.getElementById('main')
      main.textContent = ''
      main.appendChild(CreateContact())
    }
    
    export default loadContact