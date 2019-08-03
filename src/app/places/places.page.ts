import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlaceService } from "../place.service";
@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"]
})
export class PlacesPage implements OnInit {
  apiPlaces;
  constructor(private router: Router, private placeService: PlaceService) {}

  ngOnInit() {
    this.placeService.getapiPlaces().subscribe(resp => {
      console.log(resp);
      this.apiPlaces = resp;
    });
  }
}
