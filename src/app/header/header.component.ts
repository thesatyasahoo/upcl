import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.change();
  }

  change() {
    let myIndex1 = 0;
    carousel1();

    function carousel1() {
      let i1;
      let x1: any = document.getElementsByClassName("mySlides1");
      for (i1 = 0; i1 < 4; i1++) {
        x1[i1].style.display = "none";
      }
      myIndex1++;
      if (myIndex1 > 4) {
        myIndex1 = 1
      }
      x1[myIndex1 - 1].style.display = "block";
      setTimeout(carousel1, 2000);
    }

  }

}
