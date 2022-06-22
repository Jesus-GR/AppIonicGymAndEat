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

  /**
   * Efectua el login
   */
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

  /**
   *
   * @param email Email que introduce el usuario
   * @param password Contraseña que introduce el usuario
   * @returns Registra al usuario
   */

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
    }

    /**
     *
     * @param email al que manda la contraseña
     * @returns
     */
    resetPassword(email: string): Promise<void> {
      return sendPasswordResetEmail(this.auth, email);
      }

      /**
       *
       * @returns Obtiene el usuario actual
       */
  getCurrentUser(): any {
    return getAuth().currentUser;
    }

    /**
     * Desloguear usuario
     */
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
