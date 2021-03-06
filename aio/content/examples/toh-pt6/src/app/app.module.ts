// #docplaster
// #docregion, v1
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// #docregion import-in-mem-stuff
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// #enddocregion import-in-mem-stuff

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
// #enddocregion v1
import { HeroSearchComponent } from './hero-search/hero-search.component';
// #docregion v1
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { HeroDetail2Component } from './hero-detail-2/hero-detail-2.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyHighLightDirective } from './directive/my-high-light.directive';
import { MyHighLightComponentComponent } from './my-high-light-component/my-high-light-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // #docregion in-mem-web-api-imports
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule

    // #enddocregion in-mem-web-api-imports
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroDetail2Component,
    MessagesComponent,
    // #enddocregion v1
    HeroSearchComponent,
    HeroDetail2Component,
    MyHighLightDirective,
    MyHighLightComponentComponent
    // #docregion v1
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// #enddocregion , v1
