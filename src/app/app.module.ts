import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './description/interpolation/interpolation.component';
import { TemplateStatemantComponent } from './description/template-statemant/template-statemant.component';

import { OutputComponent } from './output/output.component';
import { DescriptionService } from './description.service';
import { MaterialModule } from './material/material.module';
import { DirGagDirective } from './dir-gag.directive';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TemplateStatemantComponent,
    OutputComponent,
         DirGagDirective,
         PipeComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ DescriptionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
