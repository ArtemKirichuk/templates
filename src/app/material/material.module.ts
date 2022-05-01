import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  exports:[MatButtonModule,MatCardModule,MatProgressBarModule,MatInputModule,MatFormFieldModule,MatTabsModule ],
  imports: [ MatButtonModule,MatCardModule,MatProgressBarModule, MatInputModule,MatFormFieldModule,MatTabsModule ]
})
export class MaterialModule { }
