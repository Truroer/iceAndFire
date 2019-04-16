import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-house-item",
  templateUrl: "./house-item.component.html",
  styleUrls: ["./house-item.component.css"]
})
export class HouseItemComponent implements OnInit {
  @Input("house") house;

  constructor() {}

  ngOnInit() {}
}
