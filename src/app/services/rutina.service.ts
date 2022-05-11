import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Rutina } from '../model/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  constructor(private firestore: Firestore) { }

  public async addProduct(rutina: Rutina) {
  await addDoc(collection(this.firestore, 'rutinas'), rutina);
}

}
