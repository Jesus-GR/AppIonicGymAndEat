import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../model/usuario';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@capacitor/storage';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  //usuarios: Usuario[] = [];
  usuario: Usuario;

  constructor(private firestore: Firestore,
              private auth: AuthService) {
    //this.getUsuFromStorage().then(data => this.usuario = data);
  }

public async addProduct(usuario: Usuario) {
    await addDoc(collection(this.firestore, 'usuarios'), usuario);
  }

getUserData(id: string): Observable<Usuario>{
  return docData(doc(this.firestore,`usuarios/${id}`),{idField: 'usuarioID'}) as Observable<Usuario>;
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
