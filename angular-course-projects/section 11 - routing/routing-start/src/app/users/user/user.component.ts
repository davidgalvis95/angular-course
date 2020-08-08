import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // The following code enables to load the dynamic parameters that are passed in the router from the app.module, so that when they get passed in the url, they get read from the component and can be operated and binded in the component, so for this, we need to inject the ActivatedRoute
    //However it wont work when some update is coming from the the same component as the link we passed here, because angular won't render a component we already are on
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //This is why we should follow a different approach so that we set an observable that subscribes to an event that happens in the component, the param property of the router is an observable that work asyncroniuly, so that it wait for some event to happen so that it takes it when it occurs
    //Now this subscription is attached to the Subscription object
    this.paramSubscription = this.route.params
    .subscribe(
      (params:Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
  //If we do this manually we should unsubscribe an observable because if the component is destroed the observable is not, so we do this in the ondestroy hook cycle phase
  // The following code is not needed because angular does it automatucally
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
}
