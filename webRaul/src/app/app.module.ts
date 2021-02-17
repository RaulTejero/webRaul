import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppsComponent } from './components/apps/apps.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TecnologiesAllComponent } from './components/tecnologies-all/tecnologies-all.component';
import { AppDetailsComponent } from './components/app-details/app-details.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';




@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    InicioComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    TechnologiesComponent,
    CoursesComponent,
    AboutComponent,
    FooterComponent,
    TecnologiesAllComponent,
    AppDetailsComponent,
    AllCoursesComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
