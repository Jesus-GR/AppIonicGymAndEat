/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Rutina } from '../model/rutina';
import { Usuario } from '../model/usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {


  constructor(private firestore: Firestore,
              private auth: AuthService) { }

  public async addProduct(rutina: Rutina) {
  await addDoc(collection(this.firestore, 'rutinas'), rutina);
}

async addUserRutina(rutina: Rutina) {
  await addDoc(
    collection(
      this.firestore,
      `usuario/${this.auth.getCurrentUser().uid}/rutinas`
    ),
    rutina
  );
}

/* Get All Rutinas */
getRutinas(): Observable<Rutina[]> {
  return collectionData(collection(this.firestore, `usuario/${this.auth.getCurrentUser()?.uid}/rutinas`), {
    idField: "rutinaID"
  }) as Observable<Rutina[]>;
}

/* Get a Rutina*/
getRutina(id: string): Observable<Rutina> {
  return docData(doc(this.firestore,`usuario/${this.auth.getCurrentUser()?.uid}/rutinas/${id}`), {
    idField: "rutinaID"
  }) as Observable<Rutina>;
}


//Actualizar Rutina
async updateRutina(rutina: Rutina){
  await setDoc(doc(this.firestore, `usuario/${this.auth.getCurrentUser().uid}/rutinas/${rutina.rutinaID}`), rutina );
}

async deleteRutina(id: string){
  const docRef = doc(this.firestore,`usuario/${this.auth.getCurrentUser().uid}/rutinas/${id}`);
  await deleteDoc(docRef);
}

}
