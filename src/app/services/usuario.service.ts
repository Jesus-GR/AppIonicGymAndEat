/* eslint-disable @angular-eslint/contextual-lifecycle */
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
export class UsuarioService implements OnInit{
  usuarios: Usuario[] = [];
  usuario: Usuario;

  constructor(private firestore: Firestore,
              private auth: AuthService) {
    //this.getUsuFromStorage().then(data => this.usuario = data);
  }
  ngOnInit(): void {
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
  return collectionData(collection(this.firestore, `usuario/${this.auth.getCurrentUser()?.uid}/infoUser`), {
    idField: 'uid',
  }) as Observable<Usuario[]>;
}

//docData es una fila de la bbdd
public getUser(id: string): Observable<Usuario>{
  return docData(doc(this.firestore,`usuario/${this.auth.getCurrentUser()?.uid}/infoUser${id}`),{idField: 'uid'}) as Observable<Usuario>;
}




//Actualizar usuario
async updateUser(usuario: Usuario){
  await setDoc(doc(this.firestore, `usuario/${this.auth.getCurrentUser().uid}/infoUser/${usuario?.uid}`), usuario);
}
//Eliminar usuario
async deleteUser(uid: string,id: string) {
  await deleteDoc(doc(this.firestore, `usuario/${uid}/infoUser/${id}`));
}

}
