import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  bootstrap: [PaginationComponent]
})
export class PaginationModule { }
