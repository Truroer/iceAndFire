import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
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

  getHouses(pageNo) {
    const params = new HttpParams()
      .set("page", `${pageNo}`)
      .set("pageSize", "12");
    return this.http
      .get<object[]>("https://www.anapioficeandfire.com/api/houses", {
        params
      })
      .pipe(map(houses => houses.map(house => this._addHouseNr(house))))
      .pipe(
        catchError((error: Response) => {
          return throwError(error);
        })
      );
  }
  getHouseDetails(houseId) {
    return (
      this.http
        .get<object>("https://www.anapioficeandfire.com/api/houses/" + houseId)
        // .pipe(house => house)
        .pipe(
          catchError((error: Response) => {
            return throwError(error);
          })
        )
    );
  }

  getResource(url) {
    return (
      this.http
        .get(url)
        // .pipe(
        // )
        .pipe(
          catchError((error: Response) => {
            return throwError(error);
          })
        )
    );
  }
}
