import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MarvelHerosComponent } from './marvel-heros/marvel-heros.component';
import {FormsModule} from '@angular/forms';
import { DCcomicsComponent } from './dccomics/dccomics.component';
import{RouterModule,Routes} from '@angular/router';


const routeLists : Routes =[
{path:"",component:DCcomicsComponent},
{path:"marvels",component:MarvelHerosComponent}

]




@NgModule({
  declarations: [
    AppComponent,
    MarvelHerosComponent,
    DCcomicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
