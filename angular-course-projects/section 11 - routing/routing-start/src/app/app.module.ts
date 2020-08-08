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
//import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

//Generally we declare the way we want to use our routers by using a constant which attaches a route to a  component, but this is not enough, we must declare how can we use them by registering them in our app
// const appRoutes: Routes = [
//   // { path: '', component : HomeComponent},
//   // { path: 'users', component : UsersComponent},
//   // // The following line tells angular that it will load something dinamically, and that is because of the  :id after the  "/", so it will take that as a dinamically parameter that is passed to the router, e.g "users/1" or "users/2"
//   // { path: 'users/:id/:name', component : UserComponent},
//   // { path: 'servers', component : ServersComponent},
//   // { path: 'servers/:id', component : ServerComponent},
//   // //This is a new link
//   // { path: 'servers/:id/edit', component : EditServerComponent},
//   // the followig allow us to make nested calls to the other compoenents, however we still need the 
//   { path: '', component : HomeComponent},
//   { path: 'users', component : UsersComponent, children: [
//     { path: ':id/:name', component : UserComponent},
//   ]},
//   { path: 'servers', component : ServersComponent, children: [
//     { path: ':id', component : ServerComponent},
//     //This is a new link
//     { path: ':id/edit', component : EditServerComponent},
//   ]},
//   //This two lines redirect all the urls that the the Routes does not know, so this is why the ** wildcard is used, to match all the routes that are unknown
//   { path:'not-found', component: PageNotFoundComponent }
//   //Is better to always reditect using the full path due that Angular searches by prefix matching so ''and '/something'will always be redirected
//   { path: '**', redirectTo: '/not-found', pathMatch: 'full' }

// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //The app routing module which now holds the routing part of the appliucation must be imported here instead of the declarations part
    AppRoutingModule
    //be aware of this import
    //this is the declaration we need to do in order to use the routes, we should register the routes in the app by using the appRoutes through the forRoot method of RouterModule
    //RouterModule.forRoot(appRoutes)

  ],
  providers: [ServersService,AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
