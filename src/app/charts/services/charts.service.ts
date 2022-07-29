import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChartsService {
  constructor(private httpSrv: HttpClient) {}

  getUsersSocialMedia() {
    return this.httpSrv.get("http://localhost:3000/chart");
  }

  // with RxJS return the data in the formant we want.
  getUsersSocialMediaDoughnutData() {
    return this.httpSrv.get("http://localhost:3000/chart").pipe(
      delay(1000),
      map((resp) => {
        const values = Object.values(resp);
        const labels = Object.keys(resp);
        return { values, labels };
      }),
    );
  }
}
