import {ColorTileModel} from '../models/color-tile.model'

export namespace ColorTile {
    export class Reset {
      static readonly type = '[ColorTile] Reset';
      constructor(public payload: ColorTileModel) {}
    }
    export class Randomize {
      static readonly type = '[ColorTile] Randomize';
      constructor(public payload: ColorTileModel) {}
    }
  }