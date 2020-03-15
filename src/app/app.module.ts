import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CarousalComponent } from './carousal/carousal.component';
import { GiveAplozComponent } from './give-aploz/give-aploz.component';
import { LeadingHouseCardComponent } from './leading-house-card/leading-house-card.component';
import { MyScoreComponentComponent } from './my-score-component/my-score-component.component';
import { ClassCardComponent } from './class-card/class-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    CarousalComponent,
    GiveAplozComponent,
    LeadingHouseCardComponent,
    MyScoreComponentComponent,
    ClassCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
