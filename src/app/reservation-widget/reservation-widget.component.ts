import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservation-widget',
  templateUrl: './reservation-widget.component.html',
  styleUrls: ['./reservation-widget.component.scss']
})
export class ReservationWidgetComponent implements OnInit {
  private Active: boolean = true;
  public today : Date = new Date();
  public boxState : string = 'Minimize';
  public classState : string = 'maximized-widget';

  ngOnInit(): void {
  }

  public getDate(today : Date) : String{
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1 ).padStart(2, '0');
    const year = today.getFullYear();
    return day + '/' + month + '/' + year;
  }

  public getTime(today : Date) : String {
    const minutes = today.getUTCMinutes();
    const hours = today.getUTCHours();
    return hours + ':' + minutes;
  }

  public onClick() :void{
    this.Active = !this.Active;
  }

  public isActiveGovernorate() :boolean{
    return this.Active;
  }

  public changeBoxState() :void{

    if(this.boxState == 'Minimize'){
      this.boxState = 'Corporate Rental / Promo Code'
      this.classState = 'minimized-widget';
    }else{
      this.boxState = 'Minimize';
      this.classState = 'maximized-widget';
    }

  }

}
