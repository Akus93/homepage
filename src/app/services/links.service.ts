import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Section } from '../models/link.models';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private http: HttpClient,
  ) {}

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>('./assets/data.json');
  }

}
