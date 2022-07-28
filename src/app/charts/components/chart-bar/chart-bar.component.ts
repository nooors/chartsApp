import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
@Component({
  selector: "app-chart-bar",
  templateUrl: "./chart-bar.component.html",
  styles: [],
})
export class ChartBarComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() barChartType!: ChartType;
  @Input() barChartData!: ChartData<"bar">;
  @Input() barChartOptions: ChartConfiguration["options"];
  @Output() randomizeEvent = new EventEmitter<void>();
  randomize() {
    this.randomizeEvent.emit();
  }

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

  ngOnInit(): void {}
}
