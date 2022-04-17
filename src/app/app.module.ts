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
import { PipeComponent,PurePipeComponent,DirtyPipeComponent, HeroAsyncMessageComponent, HeroListComponent } from './description/pipe/pipe.component';
import { DeclinationWordPipe, exponentialStrengthPipe, youngerPipe, dirtyYoungerPipe, FetchJsonPipe } from './Pipes.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TemplateStatemantComponent,
    OutputComponent,
         DirGagDirective,
         PipeComponent,
         exponentialStrengthPipe,
         DeclinationWordPipe,
         PurePipeComponent,youngerPipe, dirtyYoungerPipe,
         DirtyPipeComponent,
         HeroAsyncMessageComponent,
         HeroListComponent,
         FetchJsonPipe,
         


  ],
  imports: [
    BrowserModule, 
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ DescriptionService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
