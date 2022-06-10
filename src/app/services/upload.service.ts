/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable, OnInit } from '@angular/core';
import { getApp, initializeApp } from 'firebase/app';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  uploadString,
} from 'firebase/storage';

const firebaseApp = getApp();
const storage = getStorage(firebaseApp, 'gs://gymandeat-f143b.appspot.com');


@Injectable({
  providedIn: 'root',
})
export class UploadService implements OnInit {
  files = [];
  uploadProgress = 0;
  constructor() {}

  ngOnInit(): void {}

 /* async uploadFile(file: any, nombre: string): Promise<any> {
    const imageRef = ref(storage,'dieta-equilibrada.png');
    const imageUploadsRef = ref(storage, `uploads/${nombre}.jpg`);
    const metadata = {
      contentType: 'image/jpeg',
    };
    const uploadTask = uploadBytes(imageUploadsRef, file, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }*/



  async downloadFile(nombre: string){
    getDownloadURL(ref(storage, `uploads/${nombre}'+'.jpg`))
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }
}
