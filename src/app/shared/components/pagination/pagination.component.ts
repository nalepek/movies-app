import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  providers: [NgbPaginationConfig]
})
export class PaginationComponent implements OnInit {

  pageSize = 10;

  @Input() page: number;
  @Input() collectionSize: number;
  @Output() pageChange = new EventEmitter<any>(true);
 
  constructor(config: NgbPaginationConfig) {
    config.maxSize = 3;
    config.pageSize = 20;
   }

  ngOnInit(): void {
  }

  onPageChange = (page) => {
    this.pageChange.emit(page);
  }
}