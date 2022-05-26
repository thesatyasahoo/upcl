import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  signup(){
    this.route.navigate(['/signup'])
  }
}
