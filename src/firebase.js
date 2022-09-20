
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCR1XtgIrkVD__6XcEeaurKKuYCliFp8Fo",
  authDomain: "sit313-840ba.firebaseapp.com",
  projectId: "sit313-840ba",
  storageBucket: "sit313-840ba.appspot.com",
  messagingSenderId: "305673000900",
  appId: "1:305673000900:web:03e68860f60bafcfa7f691",
  measurementId: "G-WK9VPNMYG2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;