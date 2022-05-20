import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserAutenticationService {

  constructor(private auth: Auth, private firestore: Firestore,) { }

  async register({name, surname, email, password}) {
    try {
       const userRegistration = await createUserWithEmailAndPassword(this.auth, email, password);
       const user = this.auth.currentUser;
       if (user) {
         const userDocRef = doc(this.firestore, `users/${user.uid}`);
         await setDoc(userDocRef, {
           cart: [],
           name,
           surname,
           email
         });
       }
       return userRegistration;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async updateNameSurname({name, surname}) {
    const user = this.auth.currentUser;
    if(user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        name,
        surname,
      });
      return true;
    }
    return false;
  }

  async login({email, password}) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
