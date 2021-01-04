// Initialize Firebase 
var config = {
  apiKey: "AIzaSyCXBKch2oxQP_1O6WYIFtJyGu4tUoMw6lI",
  authDomain: "news-blog-9c986.firebaseapp.com",
  projectId: "news-blog-9c986",
  storageBucket: "news-blog-9c986.appspot.com",
  messagingSenderId: "566896547774",
  appId: "1:566896547774:web:60673df279a490d62d0bef",
  measurementId: "G-Q48RCDT00E"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', NewsBlog);

// Submit form
function NewsBlog(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}