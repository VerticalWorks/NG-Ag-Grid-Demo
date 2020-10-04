import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { ColorTileState } from '../../shared/state/color-tile.state'
@Component({
  selector: 'app-color-tile',
  templateUrl: './color-tile.component.html',
  styleUrls: ['./color-tile.component.less']
})
export class ColorTileComponent implements OnInit {
  
  styleBackGroundColor = 'red'
  tileMode$: Observable<string>;

  constructor(private store:Store) {
    this.tileMode$ = this.store.select(state => state.tileMode); 
    this.tileMode$.subscribe( data => {
      if(data==="Reset"){
        this.styleBackGroundColor='red';
      }
      if(data==="Randomize"){
        this.styleBackGroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      }
    });
  }

  ngOnInit(): void {
    
  }

}
