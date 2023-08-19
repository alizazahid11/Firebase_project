// // const app=firebase.initializeApp(firebaseConfig);
// // console.log(app);
// // const database = firebase.database();
// // // Initialize Firebase Storage
// // const storage = firebase.storage();

// // // Get a reference to the storage location
// // const storageRef = storage.ref();

// // const fileUpload = (fileInput) => {
// // // // Handle file input change event
// // // const fileInput = file; // Your file input element
// // console.log('file: ',file)
// // //   const file = event.target.files[0];
// //   if (file) {
   
// //     // Create a reference to the file in Firebase Storage
// //     const imageRef = storageRef.child('images/' + file.name);

// //     // Upload the file to Firebase Storage
// //     imageRef.put(file).then((snapshot) => {
// //       console.log('Image uploaded successfully!');
      
// //       // Get the download URL of the uploaded image
// //       imageRef.getDownloadURL().then(function(url) {
// //         console.log('Download URL:', url);
// //         product.image=url;
// //         console.log(product)
// //         let productsref=database.ref('products');
// //         productsref.push(product).then(function(product){  }
// //         // // Store the download URL in the Realtime Database
// //         // firebase.database().ref('users/' + user.uid).set({
// //         //     id: id,
// //         //    'item-name': item-name,
// //         //     category: category,
// //         //     description:description,
// //         //     'unit-price': price, 
// //         //     'unit-name': quantity,
// //         //     image: downloadURL
// //         })
// //             .then(() => {
// //                 // const user = { email: email };
// //                 // localStorage.setItem('user', JSON.stringify(user));
// //                 console.log('file url: ',downloadURL)
               
// //             })
// //             .catch(function(error) => {
// //                 console.log(error);
// //             })
// //       });
// //     };
  
// // };


   
  
// //    let product={
// //      name:  document.getElementById('item-name').value,
// //     category: document.getElementById('category').value,
// //     description: document.getElementById('description').value,
// //      unit: document.getElementById('unit-name').value,
// //      price:  document.getElementById('unit-price').value,
// //      quantity: document.getElementById('quantity').value, 
// //      image:''
    
// //     }
// //     const addproduct=()=>{
// //     let fileInput=document.getElementById('photo');
// // var file=fileInput.files[0];
// // const fileurl=fileUpload(file);
// // console.log("file.....",fileurl);
// // product.image=fileurl;
// //     console.log(product);
// // }
// // const getProduct=()=>
// // Initialize Firebase
// // const firebaseConfig = {
// //   // Your Firebase configuration
// // };
// // const app = firebase.initializeApp(firebaseConfig);
// // const database = firebase.database();
// // const storage = firebase.storage();
// // const storageRef = storage.ref();

// // function addProduct() {
// //   const itemName = document.getElementById('item-name').value;
// //   // Get other product details
// //   const photoInput = document.getElementById('photo');
// //   const file = photoInput.files[0];

// //   if (itemName && file) {
// //       const productsRef = database.ref('products');

// //       const product = {
// //           name: itemName,
// //           // Add other product details
// //           image: '' // This will be the image URL after uploading
// //       };

// //       // Upload the image to Firebase Storage
// //       const imageRef = storageRef.child('images/' + file.name);
// //       imageRef.put(file).then(snapshot => {
// //           console.log('Image uploaded successfully!');
// //           // Get the download URL
// //           imageRef.getDownloadURL().then(url => {
// //               product.image = url;
// //               productsRef.push(product);
// //               console.log('Product added:', product);
// //           }).catch(error => {
// //               console.error('Error getting image URL:', error);
// //           });
// //       }).catch(error => {
// //           console.error('Error uploading image:', error);
// //       });
// //   }
// // }

// // // Load and display products
// // function loadProducts() {
// //   const productList = document.getElementById('product-list');
// //   const productsRef = database.ref('products');
// //   productsRef.on('value', snapshot => {
// //       productList.innerHTML = ''; // Clear previous entries
// //       snapshot.forEach(productSnapshot => {
// //           const product = productSnapshot.val();
// //           const productItem = document.createElement('div');
// //           productItem.innerHTML = `
// //               <h2>${product.name}</h2>
// //               <img src="${product.image}" alt="${product.name}">
// //               <!-- Display other product details -->
// //           `;
// //           productList.appendChild(productItem);
// //       });
// //   });
// // }

// // // Call the loadProducts function to load products when the page is loaded
// // window.addEventListener('load', loadProducts);
// // Get references to HTML elements

//     // Your web app's Firebase configuration
//     const firebaseConfig = {
//       apiKey: "AIzaSyApMbd9Sncf9LWCqPLWS6Vj1Bm7beaOKF4",
//       authDomain: "smit-project-751b0.firebaseapp.com",
//       projectId: "smit-project-751b0",
//       storageBucket: "smit-project-751b0.appspot.com",
//       messagingSenderId: "824922240767",
//       appId: "1:824922240767:web:e6f9a800f7f2a10c3a3eca",
//       measurementId: "G-2T2Q9N891D"
//     };
// const imageInput = document.getElementById('photo');
// const itemNameInput = document.getElementById('item-name');
// const categorySelect = document.getElementById('category');
// const descriptionTextarea = document.getElementById('description');
// const unitNameInput = document.getElementById('unit-name');
// const unitPriceInput = document.getElementById('unit-price');
// const quantityInput = document.getElementById('Quantity');

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
// const database = firebase.database();

// // Function to handle adding a new product
// function addproduct() {
//   const imageFile = imageInput.files[0];
//   const itemName = itemNameInput.value;
//   const category = categorySelect.value;
//   const description = descriptionTextarea.value;
//   const unitName = unitNameInput.value;
//   const unitPrice = unitPriceInput.value;
//   const quantity = quantityInput.value;

//   // Upload image to Firebase Storage
//   const storageRef = storage.ref();
//   const imageRef = storageRef.child(imageFile.name);
//   imageRef.put(imageFile)
//     .then(() => imageRef.getDownloadURL())
//     .then((imageUrl) => {
//       // Store product information in Firebase Database
//       const productsRef = database.ref('products');
//       const newProductRef = productsRef.push();
//       newProductRef.set({
//         imageUrl,
//         itemName,
//         category,
//         description,
//         unitName,
//         unitPrice,
//         quantity
//       });

//       // Clear form inputs after successful upload
//       imageInput.value = '';
//       itemNameInput.value = '';
//       categorySelect.value = '';
//       descriptionTextarea.value = '';
//       unitNameInput.value = '';
//       unitPriceInput.value = '';
//       quantityInput.value = '';
//     })
//     .catch((error) => {
//       console.error('Error uploading image:', error);
//     });
// }
const firebaseConfig = {
  apiKey: "AIzaSyApMbd9Sncf9LWCqPLWS6Vj1Bm7beaOKF4",
  authDomain: "smit-project-751b0.firebaseapp.com",
  projectId: "smit-project-751b0",
  storageBucket: "smit-project-751b0.appspot.com",
  messagingSenderId: "824922240767",
  appId: "1:824922240767:web:e6f9a800f7f2a10c3a3eca",
  measurementId: "G-2T2Q9N891D"
};

const app = firebase.initializeApp(firebaseConfig);
console.log(app)

const storage = firebase.storage();
const storageRef = storage.ref();
const database = firebase.database();

const fileUpload = (file) => {
    let product = {
        name: document.getElementById('item-name').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        unit: document.getElementById('unit-name').value,
        price: document.getElementById('unit-price').value,
        qunatity: document.getElementById('quantity').value,
        image: '',
    }
    console.log('File: ', file)
    // Handle file input change event // Your file input element
    if (file) {
        // Create a reference to the file in Firebase Storage
        const imageRef = storageRef.child('images/' + file.name);

        // Upload the file to Firebase Storage
        imageRef.put(file).then((snapshot) => {
            console.log('Image uploaded successfully!');

            // Get the download URL of the uploaded image
            imageRef.getDownloadURL().then(function (url) {
                console.log('Download URL:', url);
                product.image = url;
                console.log(product);

                // Store the download URL in the Realtime Database
                let productsRef = database.ref('products');
                productsRef.push(product).then(function () {
                    console.log('Product data uploaded successfully');
                }).catch(function (error) {
                    console.error('Error uploading product data:', error);
                });
            })
                .catch((error) => {
                    console.log(error);
                });
        })
    }
}

const addProduct = async () => {
    let fileInput = document.getElementById('photo');
    let file = fileInput.files[0];
    await fileUpload(file);
}


const getProducts = () => {
  let products = [];
  let productsRef = database.ref('products');
  productsRef.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
          let productData = childSnapshot.val();
          products.push(productData);
      });
      console.log('Products: ', products);

      // Move the code inside this block
      document.getElementById('product-name').innerHTML = products[0].name;
      document.getElementById('productDesc').innerHTML = products[0].description;
      document.getElementById('productPrice').innerHTML = products[0].price;
      document.getElementById('productImage').src = products[0].image;
      })
    
      .catch(function (error) {
      console.error('Error retrieving product data:', error);
  });
}
getProducts();
// const getProducts = () => {
//   let products = [];
//   let productsRef = database.ref('products');
  
//   productsRef.once('value').then(function (snapshot) {
//       snapshot.forEach(function (childSnapshot) {
//           let productData = childSnapshot.val();
//           products.push(productData);
//       });
      
//       console.log('Products from Firebase: ', products);
      
//       // Check if the products array is being populated as expected
//       if (products.length > 0) {
//           console.log('First product name: ', products[0].name);
//           console.log('First product description: ', products[0].description);
//           console.log('First product price: ', products[0].price);
//           console.log('First product image: ', products[0].image);

//           // Now update the HTML elements
//           document.getElementById('product-name').innerHTML = products[0].name;
//           document.getElementById('productDesc').innerHTML = products[0].description;
//           document.getElementById('productPrice').innerHTML = products[0].price;
//           document.getElementById('productImage').src = products[0].image;
//       } else {
//           console.log('No products found in the array.');
//       }
//   }).catch(function (error) {
//       console.error('Error retrieving product data:', error);
//   });
// }

// getProducts();




