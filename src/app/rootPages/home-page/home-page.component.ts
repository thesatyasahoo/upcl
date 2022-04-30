import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data: any[] = [{
    "acc_no": "3583847692993556",
    "serv_conn": "3538824805284385",
    "name": "Marcellus",
    "addr": "4 Charing Cross Street",
    "service_status": "Account Closed",
    "due_date": "12/05/2021",
    "netPaybleAmount": "1083379.43",
    "paymentStatus": "Pending"
  }, {
    "acc_no": "3556715974851524",
    "serv_conn": "5602247710631076",
    "name": "Starla",
    "addr": "1623 Russell Trail",
    "service_status": "Account Closed",
    "due_date": "03/17/2022",
    "netPaybleAmount": "2452212.85",
    "paymentStatus": "Pending"
  }, {
    "acc_no": "6390347762336246",
    "serv_conn": "374288162105257",
    "name": "Ellsworth",
    "addr": "71 Esch Avenue",
    "service_status": "Account Closed",
    "due_date": "06/28/2021",
    "netPaybleAmount": "3199417.03",
    "paymentStatus": "Pending"
  }, {
    "acc_no": "4844120384225817",
    "serv_conn": "201604073603124",
    "name": "Dody",
    "addr": "26 Schiller Lane",
    "service_status": "Live",
    "due_date": "01/12/2022",
    "netPaybleAmount": "4585822.75",
    "paymentStatus": ""
  }, {
    "acc_no": "5100144878853708",
    "serv_conn": "5348023079745222",
    "name": "Corbie",
    "addr": "3054 Reinke Terrace",
    "service_status": "Live",
    "due_date": "11/18/2021",
    "netPaybleAmount": "3636731.37",
    "paymentStatus": ""
  }, {
    "acc_no": "3552393069821283",
    "serv_conn": "201772852646067",
    "name": "Tynan",
    "addr": "7 Marquette Place",
    "service_status": "",
    "due_date": "01/11/2022",
    "netPaybleAmount": "4035757.08",
    "paymentStatus": ""
  }, {
    "acc_no": "30520766891932",
    "serv_conn": "36224493675676",
    "name": "Shayne",
    "addr": "4 Stuart Park",
    "service_status": "Live",
    "due_date": "03/15/2022",
    "netPaybleAmount": "4222452.86",
    "paymentStatus": ""
  }, {
    "acc_no": "3530872788584717",
    "serv_conn": "50182760758078400",
    "name": "Adam",
    "addr": "99609 Green Road",
    "service_status": "Live",
    "due_date": "03/17/2022",
    "netPaybleAmount": "4483461.09",
    "paymentStatus": ""
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
