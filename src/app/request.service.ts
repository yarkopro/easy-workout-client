import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tick} from './models/tick';
import {Observable} from 'rxjs';
import {API_URL} from './API_URL';
import {map} from 'rxjs/operators';
import {Facility} from './models/facility';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) {

  }

  getTicks(): Observable<Tick[]> {
    return this.http.get(API_URL+"/ticks") as Observable<Tick[]>;

    // .pipe(map(text => JSON.parse(text as string))) as Observable<Tick[]>;
    // return
  }

  getFacility(facilityId: number): Observable<Facility> {
    return this.http.get(API_URL + '/facilities/' + facilityId) as Observable<Facility>;
    // .pipe(map(text => JSON.parse(text as string))) as Observable<Tick[]>;
  }
}
