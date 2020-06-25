import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Tick} from './models/tick';
import {from, Observable} from 'rxjs';
import {API_URL} from './API_URL';
import {Facility} from './models/facility';
import {TickType} from './models/tickType';
import {Coords} from './models/coords';
import {Activity, FacilityActivity} from './models/activity';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) {

  }

  getTicks(): Observable<Tick[]> {
    return this.http.get(API_URL+"/ticks/") as Observable<Tick[]>;

    // .pipe(map(text => JSON.parse(text as string))) as Observable<Tick[]>;
    // return
  }

  getEntityFromTick(tick: Tick): Observable<Facility> {
    let params = new HttpParams().set("id", tick.entityId.toString())
    if (tick.type == TickType.FACILITY) {
      return this.http.get(API_URL + '/facilities', {params: params}) as Observable<Facility>;
    } else if (tick.type == TickType.STANDALONE_ACTIVITY) {
      return this.http.get(API_URL + '/standalone-activities' + tick.entityId) as Observable<Facility>;
    }
  }

  getFacility(facilityId: number): Observable<Facility> {
    let params = new HttpParams().set("id", facilityId.toString())
    return this.http.get(API_URL + '/facilities',{params: params}) as Observable<Facility>;
  }

  getNearbyFacilities(coords: Coords): Observable<Facility[]> {
    let httpParams = new HttpParams()
        .set("longitude", coords.longitude)
        .set("latitude", coords.latitude);
    return this.http.get<Facility[]>(API_URL + '/facilities/nearby', {params: httpParams})
  }

  getActivity(id: number): Observable<Activity> {
    let params = new HttpParams().set("id", id.toString())
    return this.http.get<Activity>(API_URL + '/activities', {params: params});
  }

  subscribeToActivity(activityId: number) {
    return this.http.post(API_URL + '/activity-assignment/', {id: activityId}, {responseType: 'text'})
  }

  postActivity(activity: FacilityActivity): Observable<any> {
    return this.http.post(API_URL + '/activities', activity, {responseType: 'text'})
  }
}
