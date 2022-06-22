import { Injectable } from '@angular/core';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
  createUserWithEmailAndPassword,
  UserCredential,
  sendPasswordResetEmail,
  deleteUser
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { addDoc, deleteDoc,doc, Firestore } from 'firebase/firestore';
import { Usuario } from '../model/usuario';
import { UsuarioService } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Usuario;
  constructor(private auth: Auth,
              private router: Router,
           ) { }

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
    signOut(this.auth).then(()=>{this.router.navigateByUrl('/welcome');});
    }

    /**
     * Borrar usuario
     */
    async deleteUserAuth(){
      const auth = getAuth();
      const user = auth.currentUser;
      await deleteUser(user).then(() => {
        this.logout();
        console.log('User deleted');
      }).catch((error) => {
        console.log('Fucking user continue');
      });
    }
}
