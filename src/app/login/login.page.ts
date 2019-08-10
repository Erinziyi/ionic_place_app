import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { PlaceService } from "../place.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email;
  password;
  constructor(
    public placeService: PlaceService,
    public router: Router,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  // loginPressed() {
  //   this.httpClient
  //     .post(
  //       "http://wanmuz-rest-api-week5.herokuapp.com/api/login",
  //       {
  //         username: "wanmuz86@gmail.com",
  //         password: "abcd1234"
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" }
  //       }
  //     )
  //     .subscribe(
  //       data => {
  //         this.router.navigate(["/places"]);
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error.status);
  //       }
  //     );
  // }
  loginPressed() {
    this.placeService
      .loginUser(this.email, this.password)
      .subscribe(async resp => {
        console.log(resp);
        if (resp["success"] == true) {
          this.router.navigate(["/places"]);
        } else {
          let toast = await this.toastCtrl.create({
            message: "Something wrong try again",
            duration: 2000
          });
          toast.present();
        }
      });
  }
}
