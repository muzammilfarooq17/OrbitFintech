
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdyDggwhbd_pXAbPMXPVvzjNlpVKGWne4",
  authDomain: "orbit-fintech.firebaseapp.com",
  projectId: "orbit-fintech",
  storageBucket: "orbit-fintech.firebasestorage.app",
  messagingSenderId: "918102572171",
  appId: "1:918102572171:web:82a5fe1b2baf4401a2288e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;