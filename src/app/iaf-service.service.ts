import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class IafServiceService {
  constructor(private http: HttpClient) {}

  _addHouseNr(house) {
    house.number = house.url.split(
      "https://www.anapioficeandfire.com/api/houses/"
    )[1];
    return house;
  }

  getHouses() {
    return this.http
      .get<object[]>("https://www.anapioficeandfire.com/api/houses")
      .pipe(map(houses => houses.map(house => this._addHouseNr(house))))
      .pipe(
        catchError((error: Response) => {
          return throwError(error);
        })
      );
  }
}
