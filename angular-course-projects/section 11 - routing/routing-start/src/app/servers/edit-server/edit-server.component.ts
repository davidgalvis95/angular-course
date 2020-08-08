import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    //This is a way to access the data that comes from the link, we mean the query parameters and the fragment, however it wont be reactive, olly will be shown wgen the component is loaded
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //tHIS OTHER WAY DOES ATHE SAME THAN THE LAST TWO LINES BUT ITS REACTIVE, SO IT LOADS WHEN SOME CHANGE IS REPORTED THERE
    // There is route navigation emmited from the server componenr that now can be listened every time the onEdit method is called, it listens to the queryParams that were set in the link of the servers due that they are preserved in the onEdit method
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(2);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
