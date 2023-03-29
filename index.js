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
const candy2 = {
  name: 'Twix',
  unitPrice: 2.99,
  size: '12 oz',
  color: 'gold',
  inventory: 288,
  productNumber: 2,
}

//add document to firestore
// db.collection('products').add(candy2)
//   .then((doc) => {
//   console.log('added doc: ' + doc.id)
// })
// .catch(err => console.log(err))

//how to read a document from firestore
//db.collection('products').doc('FNFqop0KgKpocmY8UywG').delete()
db.collection('products').doc('FNFqop0KgKpocmY8UywG').get()
.then((doc) => {
  //console.log(doc.data())
})
.catch(console.log)

//how to update a document in firestore
db.collection('products').doc('FNFqop0KgKpocmY8UywG').update({
  inventory: 555,
  //will add if their isn't already a key value pair
  customerFavorite: true
})

//how to get a whole collection
db.collection('products').get()
.then(collection => {
  const productList = collection.docs.map(doc => ({...doc.data(), id: doc.id}))
  console.table(productList)
})
.catch(console.log)

