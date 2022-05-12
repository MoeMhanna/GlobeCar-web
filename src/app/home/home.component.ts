import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.automaticSlide();


  }
  images = [
    { imgSrc: "https://cdn.globecar.io/wp-content/uploads/2017/03/homeslide-01.jpg" },
    { imgSrc: "https://cdn.globecar.io/wp-content/uploads/2017/03/homeslide-03.jpg" },
    { imgSrc: "https://cdn.globecar.io/wp-content/uploads/2017/03/homeslide-08.jpg" },
    { imgSrc: "https://cdn.globecar.io/wp-content/uploads/2022/03/shutterstock_673616299-1-1.jpg" },
    { imgSrc: "https://cdn.globecar.io/wp-content/uploads/2020/04/girl_rainbow@2x.jpg" },
    { imgSrc: "https://cdn.globecar.io/wp-content/uploads/2020/06/COVID_recovery_slider@2x-1.jpg" },
  ];
  selectedIndex =  0;
  indicators: boolean = true;

  selectImage(index : number) : void{
    this.selectedIndex = index;
  }

  toNextSlide() : void{
    if( this.selectedIndex == this.images.length - 1 ){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
  toPrevSlide() : void{
    if( this.selectedIndex == 0 ){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  }

  automaticSlide(){
    setInterval(()=> {
      this.toNextSlide();
    },4000)
  }


}
