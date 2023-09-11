import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public obj: any | undefined;
  public stringVar: string | undefined;
  public dateVar: number | undefined;
  public currencyVar: number | undefined;
  public decimalVar: number | undefined;
  public  data$: Observable<any>;
  public  data: number | undefined;
  public precio: number = 0;

     constructor(){
      this.obj = [{id:1, name: 'John', age: 25, salary: 10000}];
      this.stringVar = 'Hello';
      this.dateVar = new Date().getTime();
      this.currencyVar =1240593.20
      this.decimalVar = 0.259;
      this.data$ = new Observable(observer => {
        setTimeout(() => {
          observer.next('Datos asincrónicos');
          observer.complete();
        }, 1000);
      });
      this.data$ = interval(1000); 
      this.precio = 190;
     }

     ngOnInit(): void {
      this.data$.subscribe(data => {
        console.log(data); 
      });
     }
}
