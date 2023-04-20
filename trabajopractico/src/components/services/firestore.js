//-------FireBase-------//
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import products from "../../data/products"

const firebaseConfig = {
  apiKey: "AIzaSyBTSZTnsWl9Oqlh7Ez_1YyJ1V_FBraYU7U",
  authDomain: "tpfinalbenjamin.firebaseapp.com",
  projectId: "tpfinalbenjamin",
  storageBucket: "tpfinalbenjamin.appspot.com",
  messagingSenderId: "412355960696",
  appId: "1:412355960696:web:d599d862afc4d20ab7728d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


     //async await----> asincronia
export async function getItems(){

     // referencia traer todos los productos de una coleccion ---->"products" 
     const productsRef = collection(db, "products"); //indica a donde nos queremos conectarreferencia local
     //SnapShot pide documentos de esta direccion
     const productsSnap = await getDocs(productsRef);
     const documents = productsSnap.docs;
    //extrae datos de los documentos con .data()
   const docsData = documents.map((doc)=>{
    return{ id : doc.id, ...doc.data()}

   });
   return docsData;  
}

export async function getSingleItem(idURL){
    //referencia 
    const docRef = doc(db, "products", idURL);
    //snapshot
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data()};
}

export async function getItemsByCategory(categoryid){
    const productsRef = collection(db, "products");
    const q = query( productsRef, where("category","==", categoryid));

    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

  const docsData = documents.map((doc)=>{
   return{ id: doc.id, ...doc.data()}

  });
  return docsData;  
}

export async function createOrder(order) {
  const collectionOrdersRef = collection( db, "orders");
  const response = await addDoc (collectionOrdersRef, order);
  return response.id;
}

export async function exportData(){
   const collectionRef = collection(db, "products")
   for(let item of products){
    await addDoc(collectionRef, item);

   }
}