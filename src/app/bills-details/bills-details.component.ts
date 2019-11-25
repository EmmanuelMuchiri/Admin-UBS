import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// import { DataSource } from '@angular/cdk/collections';
import { Bills } from '../postdataObj';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material';
import * as XLSX from 'xlsx'; 
// import { ExportAsService, ExportAsConfig } from 'ngx-export-as';



@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})

export class BillsDetailsComponent implements OnInit {
  
  dataSource = new MatTableDataSource();
  displayedColumns = ['bill_id','Revstreams','customer_name','customer_phone','narration','subtotal','quantity','status', 'generated_by'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private apiservice: ApiService) { }

  ngOnInit():void{ 

    this.apiservice.getBills().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    
    /*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
  }

  

  


// export class BillsDataSource extends DataSource<any>{
//   constructor(private apiservice:ApiService){
//     super();
// }

// connect():Observable<Bills[]>{
//   return this.apiservice.getBills()
// }

// disconnect() {}

// }