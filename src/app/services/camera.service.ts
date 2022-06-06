import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class CameraService {
  imageOptions = {
    quality: 60,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
  };
  constructor(private sanitizer: DomSanitizer) { }

  async takePicture(): Promise<SafeResourceUrl> {
    const image = await Camera.getPhoto(this.imageOptions);
    return this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }
}
