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
    return this.httpClient.get(
      "https://wanmuz-rest-api-2019.herokuapp.com/api/places"
    );
    // .pipe(
    //   tap(resp => {
    //     this.apiPlaces = resp;
    //   })
    // );
  }

  getPlaceById(id) {
    return this.httpClient.get(
      "https://wanmuz-rest-api-2019.herokuapp.com/api/places/" + id
    );
  }

  registerUser(email, password) {
    let data = {
      username: email,
      password: password
    };
    return this.httpClient.post(
      "http://wanmuz-rest-api-week5.herokuapp.com/api/register",
      data
    );
  }

  loginUser(email, password) {
    let data = {
      username: email,
      password: password
    };
    return this.httpClient.post(
      "http://wanmuz-rest-api-week5.herokuapp.com/api/login",
      data
    );
  }
}
