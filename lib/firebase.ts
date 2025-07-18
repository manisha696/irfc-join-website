import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC69NpeC2luXHcZD85gAOdTxhNDPx1hxLA",
  authDomain: "irfc-site.firebaseapp.com",
  projectId: "irfc-site",
  storageBucket: "irfc-site.firebasestorage.app",
  messagingSenderId: "206286106533",
  appId: "1:206286106533:web:02ea38588d00e2c7fd024c",
  measurementId: "G-VRM1F6Q44J",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
