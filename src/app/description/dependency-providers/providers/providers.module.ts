import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material/material.module';
import { AliasingParent, AliasingRef, DependencyProvidersComponent,
         FactoryListComponent,
         FactoryProviderComponent,
         Provider1Component,
          Provider2Component, 
          Provider3Component,
          Provider4Component,
          Provider5aComponent,
          Provider5bComponent,
          Provider6Component,
          Provider7Component} from '../dependency-providers.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    Provider1Component,
    Provider2Component,
    Provider3Component,
    Provider4Component,
    Provider5aComponent,
    Provider5bComponent,
    Provider6Component,
    Provider7Component,
    FactoryProviderComponent,
    FactoryListComponent,
    AliasingRef,
    AliasingParent,
    DependencyProvidersComponent
  ],
 
  exports:[DependencyProvidersComponent],
  
  imports:[MaterialModule,BrowserModule]
})
export class ProvidersModule { }
