import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Tick} from './models/tick';
import {from, Observable} from 'rxjs';
import {API_URL} from './API_URL';
import {Facility} from './models/facility';
import {TickType} from './models/tickType';
import {Coords} from './models/coords';
import {Activity, FacilityActivity} from './models/activity';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) {

  }

  getTicks(): Observable<Tick[]> {
    return this.http.get(API_URL+"/ticks/") as Observable<Tick[]>;
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
    return this.http.get(API_URL + '/facilities',{params: params}).pipe(map(setActivityHeader)) as Observable<Facility>;
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

  postFacility(facility: Facility): Observable<any> {
    return this.http.post(API_URL + '/activities', facility, {responseType: 'text', })
  }
}







var users = [
  {
    id: 1,
    email: "yarkopro@gmail.com",
    firstName: "Yaroslav",
    lastName: "Prokopovych",
    avatarUrl: "https://lh3.googleusercontent.com/a-/AOh14Gj6tjV7pP8yb0YjZQCVTCJ6XuaUG6zVuH3sMIP0=s192-c-rg-br100"
  },{
    id: 2,
    email: "yaroslav.prokopovych.pi.2015@lpnu.ua",
    firstName: "Ярослав",
    lastName: "Прокопович",
    avatarUrl: "https://lh6.googleusercontent.com/-_YAFNpH2t20/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn0hha4ToIxPHMczPF9MEN5-t-7uw/s192-c-rg-br100/photo.jpg"
  },
]

var setActivityHeader = function(facility) {
  facility.activities.forEach(act => {
    act.author = users[1];
    act.userAssignments = [users[1]];
  })
  return facility;
}
