import { Component, OnInit } from "@angular/core";
import { ChartData, ChartType } from "chart.js";
import { ChartsService } from "./../../services/charts.service";

@Component({
  selector: "app-doughnut-http",
  templateUrl: "./doughnut-http.component.html",
  styles: [],
})
export class DoughnutHttpComponent implements OnInit {
  public barChartTypeDought: ChartType = "doughnut";
  public barChartDataDought: ChartData<"bar"> = {
    // labels: ["2006", "2007", "2008", "2009", "2010"],
    datasets: [
      {
        data: [],
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
    ],
  };
  constructor(private chartSrv: ChartsService) {}

  ngOnInit(): void {
    // Here manipulate data once we have received it

    // this.chartSrv.getUsersSocialMedia().subscribe((resp) => {
    //   console.log(resp);
    //   const labels = Object.keys(resp);
    //   const values = Object.values(resp);
    //   this.barChartDataDought.datasets[0].data = values;
    //   this.barChartDataDought.labels = labels;
    // });

    // Here we receive data in the fornat we want from the service. In this case we have an object with two arrays that we can destructure
    this.chartSrv
      .getUsersSocialMediaDoughnutData()
      .subscribe(({ values, labels }) => {
        this.barChartDataDought.labels = labels;
        this.barChartDataDought.datasets[0].data = values;
      });
  }
}
