import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BuildData } from './build-data';


export class ProductService {
  constructor(private http: HttpClient) {
  }

getBuildData(VC_Service: string): Observable<BuildData[]> {
    return this.http.get('https://sct-api.gaiacloud.jpmchase.net/VC')
      .pipe(
        map((data: BuildData[]) => {
          return data;
        })
      );
  }
}