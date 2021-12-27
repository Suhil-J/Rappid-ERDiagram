import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErDiagramServiceService {

  constructor(private http: HttpClient) { }
  LoadGraphItems() {
    return this.http.get("../assets/ERDiagram.json");
  }
}
