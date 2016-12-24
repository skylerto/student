import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { MarkComponent } from './mark/mark.component';
import { CourseService } from './course.service';
import { EngineeringComponent } from './engineering/engineering.component';
import { MakelogComponent } from './makelog/makelog.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    MarkComponent,
    EngineeringComponent,
    MakelogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
