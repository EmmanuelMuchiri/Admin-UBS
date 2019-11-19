import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule,MatPaginatorModule, MatSortModule,MatListModule,MatIconModule } from '@angular/material';

const MaterialComponets = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatListModule,
  MatIconModule,
]


@NgModule({
  imports: [MaterialComponets],
  exports: [MaterialComponets]
})

export class MaterialModule { }
