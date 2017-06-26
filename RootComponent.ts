import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>MY FIRST OWN COMPONENT</h1>
  </div>
  `
})

export class RootComponent { 
  title = 'MY FIRST OWN COMPONENT';
}