import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimpleModalsComponent} from "./simple-modals.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [SimpleModalsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports : [SimpleModalsComponent]
})
export class SimpleModalsModule { }
