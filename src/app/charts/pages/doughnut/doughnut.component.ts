import { Component, OnInit } from "@angular/core";
import { ChartData, ChartType } from "chart.js";

@Component({
  selector: "app-doughnut",
  templateUrl: "./doughnut.component.html",
  styles: [],
})
export class DoughnutComponent implements OnInit {
  public barChartTypeDought: ChartType = "doughnut";
  public barChartDataDought: ChartData<"bar"> = {
    labels: ["2006", "2007", "2008", "2009", "2010"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: "Series A",
        backgroundColor: [
          "#F5D905",
          "#FC7605",
          "#4E05FC",
          "#05B2F2",
          "#E60759",
        ],
        hoverBackgroundColor: ["#F5B80A"],
      },
      // {
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   label: "Series B",
      //   backgroundColor: "#FC7605",
      //   hoverBackgroundColor: "barChartTypeDought,
      // },
      // {
      //   data: [65, 59, 80, 81, 56, 55, 40],
      //   label: "Series C",
      //   backgroundColor: "#E60759",
      //   hoverBackgroundColor: "#E6092F",
      // },
      // {
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   label: "Series D",
      //   backgroundColor: "#4E05FC",
      //   hoverBackgroundColor: "#A503FC",
      // },
      // {
      //   data: [65, 59, 80, 81, 56, 55, 40],
      //   label: "Series E",
      //   backgroundColor: "#05B2F2",
      //   hoverBackgroundColor: "#0226F2",
      // },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
