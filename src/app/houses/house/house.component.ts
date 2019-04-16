import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IafServiceService } from "../../iaf-service.service";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"]
})
export class HouseComponent implements OnInit {
  houseId;
  house;

  constructor(
    private route: ActivatedRoute,
    private iAfService: IafServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.houseId = params["id"];
      this.iAfService.getHouseDetails(this.houseId).subscribe(response => {
        this.house = response;
        this.house.swornMembersLoaded = [];
        this.house.cadetBranchesLoaded = [];
        this.getResource(this.house.founder).subscribe(founder => {
          this.house.founderLoaded = founder;
        });
        this.getResource(this.house.overlord).subscribe(overlord => {
          this.house.overlordLoaded = overlord;
        });
        this.getResource(this.house.heir).subscribe(heir => {
          this.house.heirLoaded = heir;
        });
        this.house.swornMembers.forEach(member => {
          this.getResource(member).subscribe(member => {
            this.house.swornMembersLoaded.push(member);
          });
        });
        this.house.cadetBranches.forEach(branch => {
          this.getResource(branch).subscribe(branch => {
            this.house.cadetBranchesLoaded.push(branch);
          });
        });
      });
    });
  }
  getResource(url) {
    return this.iAfService.getResource(url);
  }

  getCharParam(url) {
    return url.split("https://www.anapioficeandfire.com/api/characters/")[1];
  }

  getHouseParam(url) {
    return url.split("https://www.anapioficeandfire.com/api/houses/")[1];
  }
}
