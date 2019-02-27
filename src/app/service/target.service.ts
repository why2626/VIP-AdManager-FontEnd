import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Target } from '../models/target'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = environment.targetApiUrl;
@Injectable({
  providedIn: 'root'
})
export class TargetService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTargets (): Observable<Target[]> {
    return this.http.get<Target[]>(apiUrl)
      .pipe(
        tap(_ => console.log('fetched Targets')),
        catchError(this.handleError('getTargets', []))
      );
  }

  getTarget(id: number): Observable<Target> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Target>(url).pipe(
      tap(_ => console.log(`fetched Target id=${id}`)),
      catchError(this.handleError<Target>(`getTarget id=${id}`))
    );
  }

  addTarget (Target): Observable<Target> {
    const url = `${apiUrl}/create`;
    return this.http.post<Target>(url, Target, httpOptions).pipe(
      tap((Target: Target) => console.log(`added Target w/ id=${Target._id}`)),
      catchError(this.handleError<Target>('addTarget'))
    );
  }

  updateTarget (id, Target): Observable<any> {
    const url = `${apiUrl}/${id}/update`;
    return this.http.put(url, Target, httpOptions).pipe(
      tap(_ => console.log(`updated Target id=${id}`)),
      catchError(this.handleError<any>('updateTarget'))
    );
  }

  deleteTarget (id): Observable<Target> {
    const url = `${apiUrl}/${id}/delete`;

    return this.http.delete<Target>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Target id=${id}`)),
      catchError(this.handleError<Target>('deleteTarget'))
    );
  }
}
