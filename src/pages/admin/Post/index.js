
// // fetch api
// window.onload = async function () {
//     const products = document.getElementById("products");
//     console.log(products);
//     // fetch aip 
//     const showProducts = (data) => {
//       products.innerHTML = "";
//       data.forEach((currentValue, index) => {
//         const box = document.createElement("div");
//         box.classNames = "group";
//         box.innerHTML = `
//              <div class="image">
//                <img class="opacity-50 hover:opacity-100 duration-200 cursor-pointer" src="${currentValue.image}"/>
//                </div>
//                <div class="name-price group-hover:bg-blue-300 bg-blue-200 flex justify-between">
//                 <span class="font-sans py-5 px-2  text-lg">${currentValue.name}</span>
//                 <span class="font-sans py-5 px-2  text-lg">${currentValue.price}$</span>
//                </div>
//          `;
//         products.appendChild(box);
//       });
//     };
//     const fetchApi = async () => {
//       try {
//         const response = await fetch("https://659e3de447ae28b0bd356748.mockapi.io/products/products");
//         const data = await response.json(); 
//         showProducts(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     document.addEventListener('routechange', fetchApi);
//     fetchApi();
//   };
 
   import axios from 'axios';
  const AdminPage = {
   async render() {
      const {data} = await axios.get("https://659e3de447ae28b0bd356748.mockapi.io/products/products")
      return /* html */ `  
        <div  class="container mx-auto my-8">
        <table class="table-auto w-full text-left">
        <thead>
          <div class="flex  bg-black rounded-lg text-white font-sans text-[1.2rem] py-4 justify-center text-center">
            <div class="w-1/6">Id</div>
            <div class="w-1/6">Name</div>
            <div class="w-1/6">Image</div>
            <div class="w-1/6">price</div>
            <div class="w-1/6">Edit</div>
            <div class="w-1/6">Delete</div> 
          </div>
        </thead>
        <tbody> 
        ${data.map((product) => 
          `<div class="my-3 flex text-center">
            <div class="w-1/6 my-3">${product.id}</div>
            <div class="w-1/6 my-3">${product.name}</div>
            <div class="w-1/6 my-3"><img class="w-20" src="${product.image}"/></div>
            <div class="w-1/6 my-3">${product.price}</div>
            <div class="w-1/6 my-3"><button class="bg-black text-white font-sans text-[1.1rem] py-2 px-4 rounded-lg">Edit</button></div>
            <div class="w-1/6 my-3"><button class="bg-black text-white font-sans text-[1.1rem] py-2 px-4 rounded-lg">Delete</button></div>
          </div>
          `
        ).join("")} 
        </tbody>
      </table>
        </div>  
        `;
    },
  };
  
  export default AdminPage;