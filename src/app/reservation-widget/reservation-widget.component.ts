import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservation-widget',
  templateUrl: './reservation-widget.component.html',
  styleUrls: ['./reservation-widget.component.scss']
})
export class ReservationWidgetComponent implements OnInit {
  private Active: boolean = true;
  today : Date = new Date();
  boxState : string = 'Minimize';
  classState : string = 'maximized-widget' +
    '';
  constructor() { }

  ngOnInit(): void {
  }

  getDate(today : Date) : String{

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1 ).padStart(2, '0');
    const yyyy = today.getFullYear();

    let day = dd + '/' + mm + '/' + yyyy;
    return day;
  }

  getTime(today : Date) : String {
    const minutes = today.getUTCMinutes();
    const hours = today.getUTCHours();
    return hours + ':' + minutes;

  }
  onClick() :void{
    this.Active = !this.Active;
  }
  isActiveProbence() :boolean{
    return this.Active;
  }

  changeBoxState() :void{
    if(this.boxState == 'Minimize'){
      this.boxState = 'Corporate Rental / Promo Code'
      this.classState = 'minimized-widget';
    }else{
      this.boxState = 'Minimize';
      this.classState = 'maximized-widget';
    }
  }
}
