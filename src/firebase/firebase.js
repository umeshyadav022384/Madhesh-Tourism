// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCeo2Ohhf5D1Wip2e3CYvsXcWhQ4HJGFnk",
//   authDomain: "apan-madhesh.firebaseapp.com",
//   projectId: "apan-madhesh",
//   storageBucket: "apan-madhesh.firebasestorage.app",
//   messagingSenderId: "312452122956",
//   appId: "1:312452122956:web:4fc76901969621a8a7e7e9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeo2Ohhf5D1Wip2e3CYvsXcWhQ4HJGFnk",
  authDomain: "apan-madhesh.firebaseapp.com",
  projectId: "apan-madhesh",
  storageBucket: "apan-madhesh.firebasestorage.app",
  messagingSenderId: "312452122956",
  appId: "1:312452122956:web:4fc76901969621a8a7e7e9"
};

const app = initializeApp(firebaseConfig);

// ✅ export services (recommended)
export const db = getFirestore(app);

// (optional)
// export default app;
