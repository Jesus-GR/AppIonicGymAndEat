import { Component, OnInit } from '@angular/core';
import { FatSecretService } from 'src/app/providers/fat-secret.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(public fatSecretService: FatSecretService) { }

  ngOnInit() {
  }

}
