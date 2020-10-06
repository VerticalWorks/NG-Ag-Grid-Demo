// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { ColorTileModel } from '../models/color-tile.model'
import { ColorTile } from '../actions/color-tile.actions'
import { Injectable } from '@angular/core';
import { TileStyler } from '@angular/material/grid-list/tile-styler';

// Section 2
export class ColorTileStateModel {
    tileMode: string;
}

// Section 3
@State<ColorTileStateModel>({
    name: 'tileMode',
    defaults: {tileMode: 'Reset'}
})

@Injectable()
export class ColorTileState {
    @Selector()
    static fetchAll(state: ColorTileStateModel) {
        return state.tileMode
    }
    
    @Action(ColorTile.Reset)
    resetTiles(store: StateContext<string>) {
      const tileMode = store.getState();
      store.setState('Reset');
    } 

    @Action(ColorTile.Randomize)
    randomizeTiles(store: StateContext<string>) {
      const tileMode = store.getState();
      store.setState('');
      store.setState('Randomize');
    } 
}
