import {Inject, Injectable} from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpSentEvent
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {delayedRetry} from './delayedRetry';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    @Inject(HttpClient)
    httpClient: HttpClient;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                filter((http: HttpResponse<any>) => http.status === 504),
                delayedRetry(500, 5)
            );
    }
}
