import { Component, OnInit } from "@angular/core";
import { PlaceService } from "../place.service";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { from } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  email = "";
  password = "";

  constructor(
    public placeService: PlaceService,
    public toastCtrl: ToastController,
    public router: Router
  ) {}

  ngOnInit() {}

  signupPressed() {
    this.placeService
      .registerUser(this.email, this.password)
      .subscribe(async resp => {
        console.log(resp);
        if (resp["message"] == "User succesfully registered") {
          let toast = await this.toastCtrl.create({
            message: "Succesfully resgistered.You may log in",
            duration: 2000
          });
          toast.present();
          this.router.navigate(["/login"]);
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
