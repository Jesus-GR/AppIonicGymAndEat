/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Photo } from "../model/photo";
import { AngularFireStorage } from "@angular/fire/compat/storage";


@Injectable({
  providedIn: 'root'
})
export class CameraService {
  pathToPhotos = `users/${this.auth.getCurrentUser().uid}/photos`;


  constructor(private firestore: Firestore,
              private auth: AuthService,
              private storage: AngularFireStorage) { }

   /* Toma la fotografía */
   async takePicture() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });
    const blob = await fetch(image.webPath).then(i => i.blob());
    return blob;
  }

   /* Guarda la fotografía en firebase storage */

   uploadFile(file: any, path: string): Promise<string> {
    const nameIdPhoto =
      this.auth.getCurrentUser().uid + '/' + Date.now().toString();
    return new Promise(resolve => {
      const filePath = `${path}/${nameIdPhoto}`;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe(res => {
              const downloadURL = res;
              resolve(downloadURL);
              return;
            });
          })
        )
        .subscribe();
    });
  }

  /* Obtiene una foto de firebase storage */
  getPhoto(id: string): Observable<Photo> {
    return docData(doc(this.firestore, `${this.pathToPhotos}/${id}`), {
      idField: "photoId"
    }) as Observable<Photo>;
  }
   /* Añade una fotografía */
   async addPhoto(photo: Photo) {
    await addDoc(collection(this.firestore, this.pathToPhotos), photo);
  }

  /* Elimina la fotografía */
  async deletePhoto(id: string) {
    await deleteDoc(doc(this.firestore, `${this.pathToPhotos}/${id}`));
  }

  /* Actualiza la fotografía*/
  async updatePhoto(photo: Photo) {
    await setDoc(
      doc(this.firestore, `${this.pathToPhotos}/${photo.photoId}`),
      photo
    );
  }
}
