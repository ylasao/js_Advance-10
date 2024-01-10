// import axios from "axios";

 

// // fetch api
// window.onload = async function () {
//   const products = document.getElementById("products");
//   console.log(products);
//   // fetch aip 
//   const showProducts = (data) => {
//     products.innerHTML = "";
//     data.forEach((currentValue, index) => {
//       const box = document.createElement("div");
//       box.classNames = "group";
//       box.innerHTML = `
//            <div class="image">
//              <img class="opacity-50 hover:opacity-100 duration-200 cursor-pointer" src="${currentValue.image}"/>
//              </div>
//              <div class="name-price group-hover:bg-blue-300 bg-blue-200 flex justify-between">
//               <span class="font-sans py-5 px-2  text-lg">${currentValue.name}</span>
//               <span class="font-sans py-5 px-2  text-lg">${currentValue.price}$</span>
//              </div>
//        `;
//       products.appendChild(box);
//     });
//   };
//   const fetchApi = async () => {
//     try {
//       const response = await fetch("https://659e3de447ae28b0bd356748.mockapi.io/products/products");
//       const data = await response.json(); 
//       showProducts(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   document.addEventListener('routechange', fetchApi);
//   fetchApi();
// };
import axios from "axios";
const HomePage = {
  async render() {
    const {data} = await axios.get('https://659e3de447ae28b0bd356748.mockapi.io/products/products')
    return /* html  */ `  
      <div  class="container mx-auto my-8">
          <div id="products" class="products grid grid-cols-4 gap-4"> 
            ${data.map((currentValue)=> {
              return `
                 <div class="box group">
                 <div class="image">
                 <img class="opacity-50 hover:opacity-100 duration-200 cursor-pointer" src="${currentValue.image}"/>
                 </div>
                 <div class="name-price group-hover:bg-blue-300 bg-blue-200 flex justify-between">
                  <span class="font-sans py-5 px-2  text-lg">${currentValue.name}</span>
                  <span class="font-sans py-5 px-2  text-lg">${currentValue.price}$</span>
                 </div>
                 </div>
              `
            }).join("")}
          </div>
      </div>  
      `;
  },
};

export default HomePage;
