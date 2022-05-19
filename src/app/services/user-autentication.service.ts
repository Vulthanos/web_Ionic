import {Injectable} from '@angular/core';
import {provideAuth, getAuth, createUserWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAutenticationService {

  constructor() { }

  registerUser(email: string, password: string) {
    //return createUserWithEmailAndPassword(email, password);
  }
}
