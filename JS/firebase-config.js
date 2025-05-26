// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyBlpWF7Gsyf4ax2PaXVR79zKncc419ktv4",
    authDomain: "proximity-ddb49.firebaseapp.com",
    databaseURL: "https://proximity-ddb49-default-rtdb.firebaseio.com",
    projectId: "proximity-ddb49",
    storageBucket: "proximity-ddb49.firebasestorage.app",
    messagingSenderId: "112062802038",
    appId: "1:112062802038:web:2f2eca97ef48e21c741757"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Exportar referência do Realtime Database
  const database = firebase.database();
  