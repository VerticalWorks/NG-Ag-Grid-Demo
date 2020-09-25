import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
  

export class DataLayerService {
  
  constructor() { }
  
  getData(){
    return [
      {
        id: 1,
        title: 'Yikes Man, It\'s Darth'
      },
      {
        id: 2,
        title: 'Luke Help Me'
      }
    ];
  }
}