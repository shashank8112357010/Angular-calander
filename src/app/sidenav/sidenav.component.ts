import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  array = ["January,2021","February,2021","March,2021","April ,2021","May ,2021","June,2021 ","July,2021" , "August,2021" ,"September,2021" ,"October,2021" ,"November,2021","December,2021"];
  months:any="July,2021"
  month:any
  i:any=0
 

  constructor() { }

  ngOnInit(): void {
  }
//   nextFn(){
//     var i=0;
// i++;
//  this.months=this.array[i]
//  console.log("months", this.months);

//   }
//   previousFn(){
//     var i=0;
//     i--;
//   this.month=this.array[i] 
//   }

goTo() {
  console.log()
  this.i++;
   this.months=this.array[this.i]
   console.log("hello", this.months);
   if(this.i==this.array.length-1){
    this.i=0
  }
  
//  var months = this.array.goTo(this.index);
}

// next() {
//   this.i++;
//    this.months=this.array[this.i]
//    console.log("months", this.months);
//   }


// previous() { 
//   this.i=this.array.length-1
//    this.month=this.array[this.i]
//    this.i--;
//    console.log("months", this.months);
//    if(this.i==0){
//     this.i=this.array.length
//   }

//   return this.i
  
  
// }

}
