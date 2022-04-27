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
import { DeclinationWordPipe, exponentialStrengthPipe, youngerPipe, dirtyYoungerPipe, FetchJsonPipe, sortDescriptionPipe } from './Pipes.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { childItemComponent, PropBindComponent } from './description/prop-bind/prop-bind.component';
import { ClassStyleAttrComponent, MyInputWithAttributeDecoratorComponent } from './description/class-style-attr/class-style-attr.component';
import { EventBindingComponent } from './description/event-binding/event-binding.component';
import { ChildEventEmmiterComponent } from './description/event-binding/child-event-emmiter/child-event-emmiter.component';
import { MyclickDirective } from './myclick.directive';
import { TwoWayBindingComponent } from './description/two-way-binding/two-way-binding.component';
import { Child2waybindingComponent } from './description/two-way-binding/child2waybinding/child2waybinding.component';
import { TemplateVarComponent } from './description/template-var/template-var.component';
import { SvgComponent } from './description/svg/svg.component';
import { BuildinDirectivComponent } from './description/buildin-directiv/buildin-directiv.component';
import { ChildBuildingDirectiveComponent } from './description/buildin-directiv/child-building-directive/child-building-directive.component';
import { AttrDirectiveComponent } from './description/attr-directive/struc-directive.component';
import { HighlightDirective } from './highlight.directive';
import { StrucDirectiveComponent } from './description/struc-directive/struc-directive.component';
import { UnlessDirective } from './unless.directive';
import { DependencyInjectionComponent } from './description/dependency-injection/dependency-injection.component';

import { ProvidersModule } from './description/dependency-providers/providers/providers.module';




@NgModule({
  imports: [
    BrowserModule, 
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ProvidersModule
    
  ],
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
         PropBindComponent,
         childItemComponent,
         ClassStyleAttrComponent,
         MyInputWithAttributeDecoratorComponent,
         EventBindingComponent,
         ChildEventEmmiterComponent,
         MyclickDirective,
         TwoWayBindingComponent,
         Child2waybindingComponent,
         TemplateVarComponent,
         SvgComponent,
         sortDescriptionPipe,
         BuildinDirectivComponent,
         ChildBuildingDirectiveComponent,
         AttrDirectiveComponent,
         HighlightDirective,
         StrucDirectiveComponent,
         UnlessDirective,
         DependencyInjectionComponent,
         
         

  ],
  
  providers: [  ],// DescriptionService
  bootstrap: [AppComponent]
})

export class AppModule { }
