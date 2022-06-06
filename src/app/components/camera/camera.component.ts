import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource,Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { base64 } from '@firebase/util';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


}
