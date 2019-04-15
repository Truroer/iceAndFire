import { Component, OnInit } from "@angular/core";
import { IafServiceService } from "../iaf-service.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.css"]
})
export class HousesComponent implements OnInit {
  houses;

  constructor(private iafService: IafServiceService) {}

  ngOnInit() {
    this.iafService.getHouses().subscribe(
      response => {
        this.houses = response;
      },
      error => console.log(error)
    );
  }
}
