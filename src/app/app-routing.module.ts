import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChartsRoutingModule } from "./charts/charts-routing.module";

const routes: Routes = [
  { path: "", component: AppComponent },
  {
    path: "charts",
    loadChildren: () =>
      import("./charts/charts.module").then((m) => m.ChartsModule),
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ChartsRoutingModule],
})
export class AppRoutingModule {}
