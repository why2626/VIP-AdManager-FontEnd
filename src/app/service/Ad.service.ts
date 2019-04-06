import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ad } from '../models';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.adApiUrl;
@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAds (): Observable<Ad[]> {
    return this.http.get<Ad[]>(apiUrl)
      .pipe(
        tap(_ => console.log('fetched Ads')),
        catchError(this.handleError('getAds', []))
      );
  }

  getAd(id: number): Observable<Ad> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Ad>(url).pipe(
      tap(_ => console.log(`fetched Ad id=${id}`)),
      catchError(this.handleError<Ad>(`getAd id=${id}`))
    );
  }

  addAd (Ad): Observable<Ad> {
    const url = `${apiUrl}/create`;
    return this.http.post<Ad>(url, Ad, httpOptions).pipe(
      tap((Ad: Ad) => console.log(`added Ad w/ id=${Ad._id}`)),
      catchError(this.handleError<Ad>('addAd'))
    );
  }

  updateAd (id, Ad): Observable<any> {
    const url = `${apiUrl}/${id}/update`;
    return this.http.put(url, Ad, httpOptions).pipe(
      tap(_ => console.log(`updated Ad id=${id}`)),
      catchError(this.handleError<any>('updateAd'))
    );
  }

  deleteAd (id): Observable<Ad> {
    const url = `${apiUrl}/${id}/delete`;

    return this.http.delete<Ad>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Ad id=${id}`)),
      catchError(this.handleError<Ad>('deleteAd'))
    );
  }
}
