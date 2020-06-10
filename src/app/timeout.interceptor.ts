import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    @Inject(HttpClient)
    httpClient: HttpClient;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            // .pipe(
            // filter((http: HttpEvent<any>) => http.statusCode == 504),
            // switchMap( (http: HttpEvent<any>) => this.httpClient.request(request))
            // )

    }
}
