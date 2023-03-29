//import tools from firebase-admin
import { initializeApp, cert} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//import credentials from a secret file
import { credentials } from "./credentials.js";

//connect to our firebase project
initializeApp({
  credential: cert(credentials)
});

//connect to firestore DB
const db = getFirestore();

//add a product to our products collection
const candy = {
  name: 'Skittles',
  unitPrice: 3.99,
  size: '16 oz',
  color: 'green',
  inventory: 144,
  productNumber: 7,
}

db.collection('products').add(candy)
  .then(doc => console.log('added doc: ' + doc.id))
  .catch(err => console.log(err))