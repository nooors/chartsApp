import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-double-bars",
  templateUrl: "./double-bars.component.html",
  styles: [],
})
export class DoubleBarsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartType1: ChartType = "bar";
  public barChartOptions1: ChartConfiguration["options"] = {
    responsive: true,
    indexAxis: "y",
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
  };
  public barChartData1: ChartData<"bar"> = {
    labels: ["2006", "2007"],
    datasets: [
      {
        data: [100, 200, 300, 400, 500],
        label: "Salesman A",
        backgroundColor: "#F5D905",
      },
      {
        data: [50, 250, 30, 450, 200],
        label: "Salesman B",
        backgroundColor: "#4E05FC",
      },
    ],
  };

  randomize1() {
    this.barChartData1.datasets[0].data = [Math.round(Math.random() * 100)];
    this.barChartData1.datasets[1].data = [Math.round(Math.random() * 100)];
  }

  public barChartType2: ChartType = "bar";
  public barCharOptions2: ChartConfiguration["options"] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
  };
  public chart2Data: ChartData<"bar"> = {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: "Series A",
        backgroundColor: "#F5D905",
        hoverBackgroundColor: "#F5B80A",
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: "Series B",
        backgroundColor: "#FC7605",
        hoverBackgroundColor: "#FC6203",
      },
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: "Series C",
        backgroundColor: "#E60759",
        hoverBackgroundColor: "#E6092F",
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: "Series D",
        backgroundColor: "#4E05FC",
        hoverBackgroundColor: "#A503FC",
      },
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: "Series E",
        backgroundColor: "#05B2F2",
        hoverBackgroundColor: "#0226F2",
      },
    ],
  };

  public randomize2(): void {
    debugger;
    this.chart2Data.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart2Data.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart2Data.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart2Data.datasets[3].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart2Data.datasets[4].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }

  constructor() {}

  ngOnInit(): void {}
}
