import { Component } from "@angular/core";

interface MenuItem {
  route: string;
  text: string;
}
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styles: [
    `
      .list-group-item:hover {
        cursor: default;
      }
    `,
  ],
})
export class MenuComponent {
  menu: MenuItem[] = [
    { route: "charts/bars", text: "Bars" },
    { route: "charts/double", text: "Double Bars" },
    { route: "charts/doughnut", text: "Doughnut" },
    { route: "charts/doughnut-http", text: "Http Doughnut" },
  ];
}
