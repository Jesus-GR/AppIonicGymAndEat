import { Injectable } from '@angular/core';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
  createUserWithEmailAndPassword,
  UserCredential,
  sendPasswordResetEmail
} from '@angular/fire/auth';
import { addDoc } from 'firebase/firestore';
import { Usuario } from '../model/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Usuario;
  constructor(private auth: Auth) { }

  login(email: string, password: string): Promise<boolean>{
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(
      () => true,

      error =>{
        console.error(error);
        return false;
      }
    );
  }

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
    }

    resetPassword(email: string): Promise<void> {
      return sendPasswordResetEmail(this.auth, email);
      }

  getCurrentUser(): any {
    return getAuth().currentUser;
    }

  logout() {
    signOut(this.auth);
    }
}
