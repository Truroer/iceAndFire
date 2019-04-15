import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HousesComponent } from "./houses/houses.component";
import { HouseComponent } from "./houses/house/house.component";

import { IafServiceService } from "./iaf-service.service";
import { HouseItemComponent } from "./houses/house-item/house-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    HouseComponent,
    HouseItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [IafServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
