import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, updateDoc} from '@angular/fire/firestore';
import {ref, Storage, uploadString, getDownloadURL} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage
  ) { }

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef);
  }

  async uploadImage(cameraFile: Photo) {
    const user = this.auth.currentUser;
    const path = `profile-images/${user.uid}/profile_image.png`;
    const storageRef = ref(this.storage, path);
    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');
      const imageUrl = await getDownloadURL(storageRef);
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        imageUrl,
      });
      return true;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

}
