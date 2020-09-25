import { Component } from '@angular/core';
import { DataLayerService } from './services/data-layer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private dataService: DataLayerService){

  }
  title = 'bowman';
}
