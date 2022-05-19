import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  exports: [
    MatIconModule,
    MatTreeModule, 
    MatButtonModule, 
    MatCardModule, 
    MatProgressBarModule,
     MatInputModule, 
    MatFormFieldModule, 
    MatTabsModule, 
    MatGridListModule, 
    MatSidenavModule
  ],
  imports: [
    MatIconModule,
    MatTreeModule, 
    MatButtonModule, 
    MatCardModule, 
    MatProgressBarModule,
     MatInputModule, 
    MatFormFieldModule, 
    MatTabsModule, 
    MatGridListModule, 
    MatSidenavModule
  ]
})
export class MaterialModule { }
