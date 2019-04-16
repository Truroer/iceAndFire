import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HousesComponent } from "./houses/houses.component";
import { HouseComponent } from "./houses/house/house.component";
import { CharachterComponent } from "./charachter/charachter.component";

const routes: Routes = [
  { path: "characters/:id", component: CharachterComponent, pathMatch: "full" },
  { path: "houses/:id", component: HouseComponent, pathMatch: "full" },
  { path: "houses", component: HousesComponent },
  { path: "", redirectTo: "/houses", pathMatch: "full" },
  { path: "**", redirectTo: "/houses" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
