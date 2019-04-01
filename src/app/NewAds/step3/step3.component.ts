import { Component, OnInit } from '@angular/core';
import { Target } from 'src/app/models';
import { TargetService } from 'src/app/service/target.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { PeriodicElement } from '../ad-position-list/ad-position-list.component';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  targetName: string;
  peopleEstimate: number;
}
/*
const ELEMENT_DATA: PeriodicElement[] = [
  { targetName: '', peopleEstimate: ''}
]
*/
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})

export class Step3Component implements OnInit {

  displayedColumns: string[] = ['select', 'targetName', 'peopleEstimate'];
  data: Target[] = [];
  isLoadingResults = true;
  selection = new SelectionModel<PeriodicElement>(true, []);
  public searchText : string;

  constructor(private targetService: TargetService,private router: Router) { }
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngOnInit() {  //get list of targets immediately.
    this.targetService.getTargets()
    .subscribe(res => {
      this.data = res;
      // ELEMENT_DATA.push(new MatTableDataSource<ReleaseNoteData>(res as {targetName:string, peopleEstimate:number}))
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
/** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
 /*  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.data.forEach(row => this.selection.select(row));
  }
 applyFilter(filterValue: string) {
    this.filter = filterValue.trim().toLowerCase();
  }
*/

}
