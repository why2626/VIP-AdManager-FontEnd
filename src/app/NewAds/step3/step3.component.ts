import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Target } from 'src/app/models';
import { TargetService } from 'src/app/service/target.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})

export class Step3Component implements OnInit {

  displayedColumns: string[] = ['select', 'targetName', 'peopleEstimate'];
  selectedTargetColumns: string[] = ['targetName', 'peopleEstimate'];

  data: Target[] = []
  selectedTarget: Target[] = []
  isLoadingResults = true;
  selection = new SelectionModel<Target>(true, [])
  selectedLength = 0

  constructor(private targetService: TargetService) { }

  ngOnInit() {  //get list of targets immediately.
    this.targetService.getTargets()
    .subscribe(res => {
      this.data = res;
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
   masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.data.forEach(row => this.selection.select(row));
  }
  showSelectedTarget(){
    this.selectedTarget = [] //先清空
    this.data.forEach(
      function(row){
      if(this.selection.isSelected(row)){
        this.selectedTarget.push(row)
    }},this)  //forEach第二个参数this！！

    this.selectedLength = 0 //先清空
    this.selectedLength = this.selection.selected.length
  }
}
