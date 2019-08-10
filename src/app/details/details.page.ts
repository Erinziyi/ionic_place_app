import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlaceService } from "../place.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  place;
  constructor(
    public route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   let id = params["id"];
    //   console.log(id);
    //   this.place = this.placeService.getItemById(id);
    // });

    let id = this.route.snapshot.paramMap.get("place_id");
    this.placeService.getPlaceById(id).subscribe(resp => {
      this.place = resp;
    });
  }
}
