import { DoughnutComponent } from "./pages/doughnut/doughnut.component";
import { DoubleBarsComponent } from "./pages/double-bars/double-bars.component";
import { BarsComponent } from "./pages/bars/bars.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoughnutHttpComponent } from "./pages/doughnut-http/doughnut-http.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "bars", component: BarsComponent },
      { path: "double", component: DoubleBarsComponent },
      { path: "doughnut", component: DoughnutComponent },
      { path: "doughnut-http", component: DoughnutHttpComponent },
      { path: "**", redirectTo: "bar" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
