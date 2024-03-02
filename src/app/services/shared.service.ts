import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log('A http call')
  }

  mySharedFunction() {
    console.log("my shared function is called")
  }
}
