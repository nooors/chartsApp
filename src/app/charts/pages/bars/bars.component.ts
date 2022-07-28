import { Component, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-bars",
  templateUrl: "./bars.component.html",
  styles: [],
})
export class BarsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
  };
  public barChartType: ChartType = "bar";

  public barChartData: ChartData<"bar"> = {
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

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[3].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData.datasets[4].data = [
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
}
