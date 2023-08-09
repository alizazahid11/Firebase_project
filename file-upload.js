const firebaseConfig = {
    apiKey: "AIzaSyApMbd9Sncf9LWCqPLWS6Vj1Bm7beaOKF4",
    authDomain: "smit-project-751b0.firebaseapp.com",
    projectId: "smit-project-751b0",
    storageBucket: "smit-project-751b0.appspot.com",
    messagingSenderId: "824922240767",
    appId: "1:824922240767:web:e6f9a800f7f2a10c3a3eca",
    measurementId: "G-2T2Q9N891D"
  };

  


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  // Initialize Realtime Database and get a reference to the service
  const database = firebase.database();
// Initialize Firebase Storage
const storage = firebase.storage();

// Get a reference to the storage location
const storageRef = storage.ref();

const fileUpload = (file) => {
// Handle file input change event
const fileInput = document.getElementsByClassName('file-input'); // Your file input element
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create a reference to the file in Firebase Storage
    const imageRef = storageRef.child('images/' + file.name);

    // Upload the file to Firebase Storage
    imageRef.put(file).then((snapshot) => {
      console.log('Image uploaded successfully!');
      
      // Get the download URL of the uploaded image
      imageRef.getDownloadURL().then((downloadURL) => {
        console.log('Download URL:', downloadURL);
        
        // Store the download URL in the Realtime Database
        firebase.database().ref('users/' + user.uid).set({
            id: id,
           'item-name': item-name,
            category: category,
            description:description,
            'unit-price': price, 
            'unit-name': quantity,
            image: downloadURL
        })
            .then(() => {
                const user = { email: email };
                localStorage.setItem('user', JSON.stringify(user));
                console.log('User created successfully.')
                window.location.href = 'E:\SMIT project\homepage.html'
            })
            .catch((error) => {
                console.log(error);
            })
      });
    });
  }
});

}