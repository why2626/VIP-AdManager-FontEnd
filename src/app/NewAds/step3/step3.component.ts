import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Target } from 'src/app/models';
import { TargetService } from 'src/app/service/target.service';
import { gatherAdInfoService } from 'src/app/service/gatherAdInfo';
import { Validators, FormBuilder } from '@angular/forms';
import { adFormService } from 'src/app/service/adForm.service';

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
  selectedDevice = '不限'
  pricingType = '点击(CPC)'
  compativeType = '实时竞价(RTB)'
  stepThreeForm

  constructor(
    private targetService: TargetService,
    private gatherAdInfoService: gatherAdInfoService,
    private adformService: adFormService,
    private formBuilder: FormBuilder) {
      this.stepThreeForm = this.formBuilder.group({
        adPrice: ['', Validators.required],
        dayLimit: ['', Validators.required],
      })
      this.adformService.formThreeReady(this.stepThreeForm)
     }

  ngOnInit() {  //get list of targets immediately.
    this.targetService.getTargets()
    .subscribe(res => {
      this.data = res;
      this.isLoadingResults = false;
      // for(let i=0;i<this.data.length;i++){
      //   this.data[i].peopleEstimate = this.numFormat(this.data[i].peopleEstimate)
      // }
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
  numFormat(num) {
    var number = (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return number;
  }
  emiting(){
    this.gatherAdInfoService.creatingAd.divices = this.selectedDevice
    this.gatherAdInfoService.creatingAd.pricingType = this.pricingType
    this.gatherAdInfoService.creatingAd.compativeType = this.compativeType
    this.gatherAdInfoService.creatingAd.dayLimitPrice = this.stepThreeForm.get('dayLimit').value
    this.gatherAdInfoService.creatingAd.adPrice = this.stepThreeForm.get('adPrice').value
    this.gatherAdInfoService.creatingAd.targets = this.selectedTarget
    this.gatherAdInfoService.showAdInfo()
  }
}
