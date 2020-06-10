import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Tick} from './models/tick';
import {Observable} from 'rxjs';
import {API_URL} from './API_URL';
import {Facility} from './models/facility';
import {TickType} from './models/tickType';
import {Coords} from './models/coords';

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

  getEntityFromTick(tick: Tick): Observable<Facility> {
    if (tick.type == TickType.FACILITY) {
      return this.http.get(API_URL + '/facilities/' + tick.entityId) as Observable<Facility>;
    } else if (tick.type == TickType.STANDALONE_ACTIVITY) {
      return this.http.get(API_URL + '/standalone-activities/' + tick.entityId) as Observable<Facility>;
    }
  }

  getFacility(facilityId: number): Observable<Facility> {
    return this.http.get(API_URL + '/facilities/' + facilityId) as Observable<Facility>;
    // .pipe(map(text => JSON.parse(text as string))) as Observable<Tick[]>;
  }

  getNearbyFacilities(coords: Coords): Observable<Facility[]> {
    let httpParams = new HttpParams()
        .set("longitude", coords.longitude)
        .set("latitude", coords.latitude);
    return this.http.get<Facility[]>(API_URL + '/facilities/nearby', {params: httpParams})
  }
}
