import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id',  'first_name', 'last_name' , 'email', 'invoice_rate','Acciones'];
  texto:any;
  data:any = new MatTableDataSource<any>([]);
  @ViewChild('paginator') paginator: MatPaginator | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    }


    filter_table (filterValue :string) {
      this.data.filter = filterValue.trim().toLowerCase();
   }

}
