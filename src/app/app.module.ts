import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GiveAplozComponent } from './give-aploz/give-aploz.component';
import { LeadingHouseCardComponent } from './leading-house-card/leading-house-card.component';
import { MyScoreComponentComponent } from './my-score-component/my-score-component.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { StoryListComponent } from './story/list/story-list.component';
import { StoryListItemComponent } from './story/list-item/story-list-item.component';
import { AplozSocialItemComponent } from './aploz-social/aploz-social-item/aploz-social-item.component';
import { AplozSocialListComponent } from './aploz-social/aploz-social-list/aploz-social-list.component';
import { AplozExchangeComponent } from './aploz-exchange/aploz-exchange.component';
import { SendAplozComponent } from './send-aploz/send-aploz.component';
import { AplozDetailsComponent } from './aploz-details/aploz-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    CarouselComponent,
    GiveAplozComponent,
    LeadingHouseCardComponent, 
    MyScoreComponentComponent,
    ClassCardComponent,
    StoryListComponent,
    StoryListItemComponent,
    AplozSocialItemComponent,
    AplozSocialListComponent,
    AplozExchangeComponent,
    SendAplozComponent,
    AplozDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
