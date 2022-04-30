import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'upclTest';
  window: any = window;
  showMe:boolean=false
  ngOnInit() {
    // ((d, m) => {
    //     var kommunicateSettings =
    //         {"appId":"364376aa96028b3aa0a8515e2037a4c35","popupWidget":true,"automaticChatOpenOnNavigation":true};
    //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //     this.window.kommunicate = m; m._globals = kommunicateSettings;
    // })(document, this.window.kommunicate || {});
  }
  // click(){
  //   this.showMe=!this.showMe
  // }
}
