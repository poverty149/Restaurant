
function createMenu(){
  const menu=document.createElement("div");
  menu.classList.add("menu");
  const title=document.createElement("h1");
  title.classList.add('menu-title');
  title.textContent="Menu";
  menu.appendChild(title);
  const appetizer=document.createElement("h1");
  appetizer.classList.add('menu-appetizer');
  appetizer.textContent="Appetizer";
  menu.appendChild(appetizer);

  const menu_appetizer=document.createElement("div");
  menu_appetizer.classList.add("appetizer");
  

  menu_appetizer.appendChild(
      CreateMenuItem(
          "Potato Soup",
          "https://www.biggerbolderbaking.com/wp-content/uploads/2016/02/IMG_9957.jpg",
          "$5",
          "Enjoy the goodness of potatoes and milk with a hot mug of this Peruvian delight"

      )
  );
  menu_appetizer.appendChild(
       CreateMenuItem(
        "Chicken and Avocado Salad",
        "https://www.eatingbirdfood.com/wp-content/uploads/2018/05/salad-week-clubsalad.jpg",
        "$5",
        "While it isn't in theme with a traditional mug, this jar packed with fresh vegetables, avocado and chicken will not leave you disappointed"

      )
  );
  menu.appendChild(menu_appetizer);
  const entree=document.createElement("h1");
  entree.classList.add('menu-entree');
  entree.textContent="Entrée";
  menu.appendChild(entree);
  const menu_entree=document.createElement("div");
  menu_entree.classList.add("entree");
  menu_entree.appendChild(
      CreateMenuItem(
          "Peperoni Pizza a la Mug",
          "https://diyjoy.com/wp-content/uploads/2021/01/1-Minute-Mug-Pizza-Recipe.jpg",
          "$3",
          "Who says you can't eat pizza with a spoon? Take a trip toSiciliy,Italy with each bite of this cheesy and meaty concoction "

      )
  );
  menu_entree.appendChild(
      CreateMenuItem(
          "Classic ramen",
          "https://www.biggerbolderbaking.com/wp-content/uploads/2016/08/IMG_6355.jpg",
          "$4",
          "A nutritious and wholesome meal by itself, the Japanese Ramen can cater to all your whimsical moods"

      )
  );
  menu_entree.appendChild(
      CreateMenuItem(
          "Breakfast Burrito to Go",
          "https://www.biggerbolderbaking.com/wp-content/uploads/2016/06/IMG_4075.jpg",
          "$4.5",
          "Filled with 5 beans, your choice of protein and a blend of sauces,this is the right mug to start your day."

      )
  );
  menu_entree.appendChild(
      CreateMenuItem(
        "Ricotta, Broccoli and Bacon Quiche",
        "https://img.taste.com.au/I0jCh9PZ/taste/2017/04/quiche-in-a-mug-126051-1.jpg",
        "$5",
        "The richness of the cheese, the sumptousness of the bacon and the freshness of broccoli creates this textured quiche that will make you long for a second cup."

      )
  );
  menu.appendChild(menu_entree);
  const dessert=document.createElement("h1");
  dessert.classList.add('menu-dessert');
  dessert.textContent="Dessert";
  menu.appendChild(dessert);
  const menu_dessert=document.createElement("div");
  menu_dessert.classList.add("dessert");
  menu_dessert.appendChild(
      CreateMenuItem(
          "Jelly Donut Revisioned",
          "https://www.biggerbolderbaking.com/wp-content/uploads/2016/02/IMG_9790-1.jpg",
          "$3.5",
          "There's nothing that a steaming hot cup of Joe and a bite of a rich, sugary jelly doughnut can't fix."

      )
  );
  menu_dessert.appendChild(
      CreateMenuItem(
          "Brownie with IceCream",
          "https://i3.wp.com/lmld.org/wp-content/uploads/2011/11/Microwave-Mug-Brownie-1.jpg",
          "$6",
          "Enjoy our right out of the oven sizzling hot brownie with oozy vanilla icecream. The mix of chocalate and vanilla will create a decadent explosion in your mouth."

      )
  );
  
 
  menu.appendChild(menu_dessert);
  return menu;
}
function CreateMenuItem(name,food_img,food_price,description){
  const menuitem=document.createElement("div");
  menuitem.classList.add('menu-item');
  const foodname=document.createElement('h1');
  foodname.textContent=name;
  const pic=document.createElement("img");
  pic.src=food_img;
  const price=document.createElement("h1");
  price.classList.add('price');
  price.textContent=food_price;
  const desc=document.createElement("p");
  desc.textContent=description;

  menuitem.appendChild(foodname);
  menuitem.appendChild(pic);
  menuitem.appendChild(price);
  menuitem.appendChild(desc);
  
  return menuitem;

}
function loadMenu(){
  const menu=document.getElementById("main");
  menu.textContent="";
  menu.appendChild(createMenu());
  
}

export default loadMenu;