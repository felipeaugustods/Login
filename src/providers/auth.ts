import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {resolveId} from "@ionic/app-scripts/dist/plugins/ion-compiler";

@Injectable()
export class Auth {

  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }

  login()
  {

    return new Promise((resolve)=>
    {
        setTimeout(()=>{
          resolve(true);

        },3000);
    });
  }

}
