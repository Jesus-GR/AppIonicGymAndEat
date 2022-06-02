/* eslint-disable max-len */
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../model/usuario';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@capacitor/storage';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Rutina } from '../model/rutina';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  usuarios: Usuario[] = [];
  usuario: Usuario;

  constructor(private firestore: Firestore,
              private auth: AuthService) {
    //this.getUsuFromStorage().then(data => this.usuario = data);
  }

  async addUserInfo(usuario: Usuario) {
    await addDoc(
      collection(
        this.firestore,
        `usuario/${this.auth.getCurrentUser().uid}/infoUser`
      ),
      usuario
    );
  }


getUserData(uid: string): Observable<Usuario>{
  return docData(doc(this.firestore,`usuarios/${uid}`),{idField: 'uid'}) as Observable<Usuario>;
}

public getUsers(): Observable<Usuario[]> {
  return collectionData(collection(this.firestore, `usuario/${this.auth.getCurrentUser().uid}/infoUser`), {
    idField: 'uid',
  }) as Observable<Usuario[]>;
}

//docData es una fila de la bbdd
public getUser(id: string): Observable<Usuario>{
  return docData(doc(this.firestore,`usuario/${this.auth.getCurrentUser().uid}/infoUser${id}`),{idField: 'uid'}) as Observable<Usuario>;
}

//Eliminar producto
async deleteUser(uid: string){
  const docRef = doc(this.firestore,`usuario/${uid}`);
  await deleteDoc(docRef);
}

//Actualizar usuario
async updateUser(usuario: Usuario){
  await setDoc(doc(this.firestore, `usuario/${this.auth.getCurrentUser().uid}/infoUser/${usuario}`), {idField: 'uid'});
}

 /*
  getUsuarios():Observable<Usuario[]>{
    return of(this.usuarios)
  }
  async deleteUsuario(): Promise<boolean>{
    this.usuario = {};
    await this.saveUsuIntoStorage();
    return true;
}

 async saveUsuario(usuario: Usuario): Promise<boolean>{
      this.usuario = usuario;
      await this.saveUsuIntoStorage();
      return true;
  }

  async saveUsuIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'Usuario',
      value: JSON.stringify(this.usuario)
    });
    return true;
  }



  async getUsuFromStorage(): Promise<Usuario> {
    const retorno = await Storage.get({ key: 'Usuario' });
    return JSON.parse(retorno.value) ? JSON.parse(retorno.value) : {};
  }
*/
}
