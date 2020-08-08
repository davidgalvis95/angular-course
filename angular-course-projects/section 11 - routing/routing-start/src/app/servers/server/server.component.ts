import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    //Here this is only loading the server with an id of 1
    //this.server = this.serversService.getServer(1);
    // This param will always be received as a string param e.g '1', so we need to convert it to number, in this case we use the + operator
    const id = +this.route.snapshot.params['id'];
    //const id =2;
    console.log(id);
    //now we want to load the id that is passed from the html
    this.server = this.serversService.getServer(id);
    console.log(this.server);
    //to make it dynamic
    this.route.params.subscribe(
      (params:Params) => {
        // Here is also needed to load the id using the params as a number, this is why it is converted to number
        this.server = this.serversService.getServer(+params['id']);
        console.log(this.server);
      }
    );
  }

  onEdit(){
    //this.router.navigate(['/servers', this.server.id, 'edit'], {relativeTo: this.route})
    // this.router.navigate(['edit'], {relativeTo: this.route})
    // in the following code we are preserving the params that are being called from the servers.component, so that they do not get missed in the road
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
