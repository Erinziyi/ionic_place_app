import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlaceService {
  apiPlaces;
  constructor(public httpClient: HttpClient) {}

  getapiPlaces() {
    return this.httpClient
      .get("https://wanmuz-rest-api-2019.herokuapp.com/api/places")
      .pipe(
        tap(resp => {
          this.apiPlaces = resp;
        })
      );
  }

  getItemById(id) {
    for (let i = 0; i < this.apiPlaces.length; i++) {
      console.log(this.apiPlaces);
      if (this.apiPlaces[i].id == id) {
        return this.apiPlaces[i];
      }
    }
  }
}
