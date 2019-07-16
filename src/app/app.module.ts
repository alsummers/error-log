import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'
import { LoginComponent } from './views/login/login.component';
import { MainLayoutComponent } from './views/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelLayoutComponent } from './views/panel-layout/panel-layout.component';
import { ErrorCardComponent } from './components/error-card/error-card.component';
import { TypeCardComponent } from './components/type-card/type-card.component';
import { LogTypeComponent } from './components/log-type/log-type.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestbarComponent } from './components/testbar/testbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    NavbarComponent,
    PanelLayoutComponent,
    ErrorCardComponent,
    TypeCardComponent,
    LogTypeComponent,
    TestbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
