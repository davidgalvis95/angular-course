import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReaload(){
    // Here this is done using the absolute path so nothing will happen because it only reloads using the router that was injected using the constructor
    //this.router.navigate(['/servers']);
    //The following code will not show error because the navigate method of the router does not know where the component rout is, so it is unknown for them, in this case the relative and absolute paths for the servers will be treated as an absolute one
    //this.router.navigate(['servers'])
    //To make the navigate to take as reference the active route we need to inject ActivatedRoute element in the component and pass a second argument in the navigate so that it takes it as reference
    this.router.navigate(['servers'], { relativeTo: this.route })
  }

}
