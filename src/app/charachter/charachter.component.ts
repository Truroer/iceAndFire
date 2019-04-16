import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IafServiceService } from "../iaf-service.service";

@Component({
  selector: "app-charachter",
  templateUrl: "./charachter.component.html",
  styleUrls: ["./charachter.component.css"]
})
export class CharachterComponent implements OnInit {
  charId;
  character;
  constructor(
    private route: ActivatedRoute,
    private iAfService: IafServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.charId = params["id"];
      this.iAfService
        .getResource(
          "https://www.anapioficeandfire.com/api/characters/" + this.charId
        )
        .subscribe(character => {
          this.character = character;
        });
    });
  }
}
