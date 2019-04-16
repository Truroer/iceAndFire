import { Component, OnInit } from "@angular/core";
import { IafServiceService } from "../iaf-service.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.css"]
})
export class HousesComponent implements OnInit {
  pageNo = 1;
  houses;

  constructor(private iafService: IafServiceService) {}

  getHouses() {
    this.iafService.getHouses(this.pageNo).subscribe(
      response => {
        this.houses = response;
      },
      error => console.log(error)
    );
  }

  nextPage() {
    this.pageNo++;
    this.getHouses();
  }

  prevPage() {
    this.pageNo--;
    this.getHouses();
  }

  ngOnInit() {
    this.getHouses();
  }
}
