import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import type { CollectionReference, DocumentData } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

const firestoreDatabase = getFirestore(firebaseApp);

const setCollectionRef = (collectionName: string) =>
  collection(firestoreDatabase, collectionName);

const getDocuments = async (
  collectionRef: CollectionReference<DocumentData>
) => {
  try {
    const { docs } = await getDocs(collectionRef);
    let data = [];

    for (let i = 0, iterate = docs.length; i < iterate; i++) {
      data.push({ id: docs[i].id, ...docs[i].data() });
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { firebaseApp, firestoreDatabase, getDocuments, setCollectionRef };
