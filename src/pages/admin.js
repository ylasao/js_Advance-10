// fetch('http://localhost:3000/products')
// .then(response => {
//     return response.json(); 
// })
// .then(data => {
//     console.log(data);
// })
// .catch((err) => {
//     console.error(err);
// })
/** 
document.addEventListener('DOMContentLoaded' , function () {
    const productsContainer = document.getElementById('products'); 
    const showProducts = (data) => {
        productsContainer.innerHTML ='';
      data.forEach((value , index) => { 
        const products = document.createElement('product'); 
        products.innerHTML =`
        <img src="${value.image}" alt="${value.name}" class="product-image">
        <p class="namePro">${value.name}</p>
        <p>${value.detail}</p>
        <p>Price: $${value.price}</p>
        <div class="crud-buttons">
        <button onclick="editProduct(${value.id})">Edit</button>
        <button onclick="deleteProduct(${value.id})">Delete</button>
            </div>
        ` 
        productsContainer.appendChild(products);
    })
   } 
   const fetchApi = async () => {
    try {
         const response = await fetch('http://localhost:3000/products');
         const data = await response.json();
         showProducts(data)
    }catch (err) {
        console.err('Error:', err)
    }
   } ;

   fetchApi()
 
//    editProduct
 window.editProduct = async (idProducts) => {
     try {
     const response = await fetch(`http://localhost:3000/products/${idProducts}`)
     const productsData = await response.json(); 
    // 
    const newName = prompt("Enter the new name :" , productsData.name);
    const newPrice = prompt("Enter the new price :" , productsData.price);
    const newDetail = prompt('Enter the new detail' , productsData.detail);

    productsData.name = newName;
    productsData.price = parseFloat(newPrice);
    productsData.detail = newDetail;

       // Send the updated data back to the server

       await fetch(`http://localhost:3000/products/${idProducts}` , {
        method : "PUT",
        headers : {
            'Content-Type' : 'application/json'
        },
         body : JSON.stringify(productsData)
        } ) 
     }catch(err) {
           console.log(err)
     }
 }
//  deleteProducts 
window.deleteProduct = async (deleteId) => {
   try {
     const response = await fetch(`http://localhost:3000/products/${deleteId}`);
     const getProDelete = response.json();
     
     const infoDelete = confirm("Do you want delete products ? yes Or no " )

     if(infoDelete) {
        await fetch(`http://localhost:3000/products/${deleteId}`, {
            method: "DELETE",
        });
    fetchApi();
     }
   }catch(err) {
    console.error("Err connect " , err);
   }
}

// addProducts
const addProducts = document.getElementById('addProducts');
const addPro = async () => {
   try {
   const createName = prompt("Enter the name of the new pro:" );
   const createDetail = prompt("Enter the detail  of the new pro:" );
   const createPrice = parseFloat(prompt("Enter the price of the new pro:" ));
   const newProductId = Date.now(); 
   // Create a new products object 
   const newProducts = {
       id : newProductId ,
       name : createName,
       price : createPrice,
       detail : createDetail,
       image : './src/access/img/download.jpg',
   }


   await fetch('http://localhost:3000/products' , {
       method: 'POST',
       headers : {
           'Content-Type' : 'application/json'
       },
       body: JSON.stringify(newProducts),
   });
   fetchApi();
   }catch(err) {
       console.error(err);
   }
}
addProducts.addEventListener('click' , addPro)
})
 
   
 */