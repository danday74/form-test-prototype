import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

  fileExists(url: string): Observable<boolean> {
    return this.http.get(url).pipe(
        map(() => true),
        catchError((err: HttpErrorResponse) => {
          const success: boolean = err.status.toString().startsWith('2')
          return of(success)
        })
    )
  }
}
