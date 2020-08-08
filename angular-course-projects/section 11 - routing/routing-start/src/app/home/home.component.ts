import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    // This is another way of navigatinf, by doing this directly into the TS
    // To navigate we need to inject the router into the TS as we did using the constructor, also there's needed the navigation where it has to be addressed
    this.router.navigate(['/servers']);
  }
  onLoadServer(id:number){ //as the number in input is 1
    //This does the same that we did in the servers component html, but in the TS, so it takes a parameter as an input and loads the component dynamically and also enables to load som query parameter that is set to 1, and some fragment which is a url that has a # and leads us to some part of the code
    // http://localhost:4200/servers/1/edit?allowEdit=1#loading
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit: '1'},fragment:'loading'});
  }

}
