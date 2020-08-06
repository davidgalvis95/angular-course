import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
//In order to use the router we must select the Routes package from angular/core
import { Routes, RouterModule } from '@angular/router';

//Generally we declare the way we want to use our routers by using a constant which attaches a route to a  component, but this is not enough, we must declare how can we use them by registering them in our app
const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'users', component : UsersComponent},
  { path: 'servers', component : ServersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //be aware of this import
    //this is the declaration we need to do in order to use the routes, we should register the routes in the app by using the appRoutes through the forRoot method of RouterModule
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
