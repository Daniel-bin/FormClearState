import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { routingTable } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routingTable),
     ],
  declarations: [ 
    AppComponent, 
    FlopSuggestionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
