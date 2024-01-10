import HeaderPage from "../components/header";
import Footer from "../components/footer";

// fetch api
window.addEventListener("DOMContentLoaded", async function () {
  const products = document.getElementById("products");
  console.log(products);
  // fetch aip

  const showProducts = (data) => {
    products.innerHTML = ""; 
    data.forEach((currentValue, index) => {
      const box = document.createElement("div");
      box.classNames = "group";
      box.innerHTML = `
           <div class="image">
             <img class="opacity-50 hover:opacity-100 duration-200 cursor-pointer" src="${currentValue.image}"/>
             </div>
             <div class="name-price group-hover:bg-blue-300 bg-blue-200 flex justify-between">
              <span class="font-sans py-5 px-2  text-lg">${currentValue.name}</span>
              <span class="font-sans py-5 px-2  text-lg">${currentValue.price}$</span>
             </div>
       `;
       products.appendChild(box)
    });
  };
  const fetchApi = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      console.log(data);
      showProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  if (!localStorage.getItem("products")) {
    await fetchApi();
  } else {
    const cachedData = JSON.parse(localStorage.getItem("products"));
    showProducts(cachedData);
  }
});
const HomePage = {
  home() {
    return /* html ,js */ `  
      <div  class="container mx-auto my-8">
          <div id="products" class="products grid grid-cols-4 gap-4">
             
          </div>
      </div> 
     
      `;
  },
};

export default HomePage;
