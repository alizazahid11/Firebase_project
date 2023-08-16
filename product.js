// const app=firebase.initializeApp(firebaseConfig);
// console.log(app);
// const database = firebase.database();
// // Initialize Firebase Storage
// const storage = firebase.storage();

// // Get a reference to the storage location
// const storageRef = storage.ref();

// const fileUpload = (fileInput) => {
// // // Handle file input change event
// // const fileInput = file; // Your file input element
// console.log('file: ',file)
// //   const file = event.target.files[0];
//   if (file) {
   
//     // Create a reference to the file in Firebase Storage
//     const imageRef = storageRef.child('images/' + file.name);

//     // Upload the file to Firebase Storage
//     imageRef.put(file).then((snapshot) => {
//       console.log('Image uploaded successfully!');
      
//       // Get the download URL of the uploaded image
//       imageRef.getDownloadURL().then(function(url) {
//         console.log('Download URL:', url);
//         product.image=url;
//         console.log(product)
//         let productsref=database.ref('products');
//         productsref.push(product).then(function(product){  }
//         // // Store the download URL in the Realtime Database
//         // firebase.database().ref('users/' + user.uid).set({
//         //     id: id,
//         //    'item-name': item-name,
//         //     category: category,
//         //     description:description,
//         //     'unit-price': price, 
//         //     'unit-name': quantity,
//         //     image: downloadURL
//         })
//             .then(() => {
//                 // const user = { email: email };
//                 // localStorage.setItem('user', JSON.stringify(user));
//                 console.log('file url: ',downloadURL)
               
//             })
//             .catch(function(error) => {
//                 console.log(error);
//             })
//       });
//     };
  
// };


   
  
//    let product={
//      name:  document.getElementById('item-name').value,
//     category: document.getElementById('category').value,
//     description: document.getElementById('description').value,
//      unit: document.getElementById('unit-name').value,
//      price:  document.getElementById('unit-price').value,
//      quantity: document.getElementById('quantity').value, 
//      image:''
    
//     }
//     const addproduct=()=>{
//     let fileInput=document.getElementById('photo');
// var file=fileInput.files[0];
// const fileurl=fileUpload(file);
// console.log("file.....",fileurl);
// product.image=fileurl;
//     console.log(product);
// }
// const getProduct=()=>
// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
};
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();
const storageRef = storage.ref();

function addProduct() {
  const itemName = document.getElementById('item-name').value;
  // Get other product details
  const photoInput = document.getElementById('photo');
  const file = photoInput.files[0];

  if (itemName && file) {
      const productsRef = database.ref('products');

      const product = {
          name: itemName,
          // Add other product details
          image: '' // This will be the image URL after uploading
      };

      // Upload the image to Firebase Storage
      const imageRef = storageRef.child('images/' + file.name);
      imageRef.put(file).then(snapshot => {
          console.log('Image uploaded successfully!');
          // Get the download URL
          imageRef.getDownloadURL().then(url => {
              product.image = url;
              productsRef.push(product);
              console.log('Product added:', product);
          }).catch(error => {
              console.error('Error getting image URL:', error);
          });
      }).catch(error => {
          console.error('Error uploading image:', error);
      });
  }
}

// Load and display products
function loadProducts() {
  const productList = document.getElementById('product-list');
  const productsRef = database.ref('products');
  productsRef.on('value', snapshot => {
      productList.innerHTML = ''; // Clear previous entries
      snapshot.forEach(productSnapshot => {
          const product = productSnapshot.val();
          const productItem = document.createElement('div');
          productItem.innerHTML = `
              <h2>${product.name}</h2>
              <img src="${product.image}" alt="${product.name}">
              <!-- Display other product details -->
          `;
          productList.appendChild(productItem);
      });
  });
}

// Call the loadProducts function to load products when the page is loaded
window.addEventListener('load', loadProducts);
