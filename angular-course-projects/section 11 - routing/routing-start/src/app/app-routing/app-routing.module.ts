import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuardService } from '../auth-guard.service';

//Generally we declare the way we want to use our routers by using a constant which attaches a route to a  component, but this is not enough, we must declare how can we use them by registering them in our app
const appRoutes: Routes = [
  // { path: '', component : HomeComponent},
  // { path: 'users', component : UsersComponent},
  // // The following line tells angular that it will load something dinamically, and that is because of the  :id after the  "/", so it will take that as a dinamically parameter that is passed to the router, e.g "users/1" or "users/2"
  // { path: 'users/:id/:name', component : UserComponent},
  // { path: 'servers', component : ServersComponent},
  // { path: 'servers/:id', component : ServerComponent},
  // //This is a new link
  // { path: 'servers/:id/edit', component : EditServerComponent},
  // the followig allow us to make nested calls to the other compoenents, however we still need the 
  { path: '', component : HomeComponent},
  { path: 'users', component : UsersComponent, children: [
    { path: ':id/:name', component : UserComponent},
  ]},
  { path: 'servers', canActivate: [AuthGuardService],component : ServersComponent, children: [
    { path: ':id', component : ServerComponent},
    //This is a new link
    { path: ':id/edit', component : EditServerComponent},
  ]},
  //This two lines redirect all the urls that the the Routes does not know, so this is why the ** wildcard is used, to match all the routes that are unknown
  { path:'not-found', component: PageNotFoundComponent },
  //Is better to always reditect using the full path due that Angular searches by prefix matching so ''and '/something'will always be redirected
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
