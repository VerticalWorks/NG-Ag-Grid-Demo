import { Component, OnInit } from '@angular/core';
import { ColorTileComponent } from '../color-tile/color-tile.component';
import { Store } from '@ngxs/store';
import { ColorTile} from './../../shared/actions/color-tile.actions'

@Component({
  selector: 'app-color-tiles',
  templateUrl: './color-tiles.component.html',
  styleUrls: ['./color-tiles.component.less']
})
export class ColorTilesComponent implements OnInit {
  
  tiles: ColorTileComponent[] = new Array(3000)
  
  constructor(private store:Store) {

  }

  ngOnInit(): void {
  }
  changeColor(){
    this.store.dispatch(ColorTile.Randomize)
  }
  resetColor(){
    this.store.dispatch(ColorTile.Reset)
  }
}
