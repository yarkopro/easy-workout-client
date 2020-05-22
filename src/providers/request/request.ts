import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API_URL} from "./API_URL";
import {Tick} from "../../models/tick";

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  constructor(public http: HttpClient) {

  }

  getTicks(): Tick[] {
    return [];
  }
}
