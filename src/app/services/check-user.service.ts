import { Injectable } from '@angular/core';
import {collection, doc, getDoc, getDocs, getFirestore, setDoc} from "@angular/fire/firestore";
import {app} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  constructor() { }

  async getUserId(){
    const db = getFirestore(app);
    const docSnap = await getDoc(doc(db, "logs", "logged"));
    if (docSnap.exists()) {
      if(docSnap.data()['logged']){
        return docSnap.data()['loggedUser'];
      } else{
        console.log("No hay usuarios logueados");
      }
    } else {
      console.log("No existe el document");
    }
  }

  async addProductoToUserCart(pDesc, pName, pPrice, pImg){
    const db = getFirestore(app);
    const docSnap = await getDoc(doc(db, "logs", "logged"));
    if (docSnap.exists()) {
      if(docSnap.data()['logged']){
        const user = await getDoc(doc(db, "users", docSnap.data()['loggedUser']));
        const userCart = user.data()['cart'];
        const productsSnap = await getDocs(collection(db, "products"));
        productsSnap.forEach(p => {
          const pData = p.data();
          if (pData['description'] === pDesc && pData['name'] === pName && pData['price'] === pPrice && pData['img'] === pImg) {
            userCart.push(p.id);
            const userEmail = user.data()['email'];
            const userName = user.data()['name'];
            const userPassword = user.data()['password'];
            const userSurname = user.data()['surname'];
            setDoc(doc(db, "users", docSnap.data()['loggedUser']), {userCart, userEmail, userName, userPassword, userSurname});
          }
        });
      } else{
        console.log("No hay usuarios logueados");
      }
    } else {
      console.log("No existe el document");
    }
  }
}
