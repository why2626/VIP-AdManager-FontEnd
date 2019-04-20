import { Component, OnInit } from '@angular/core';
import { adFormService } from 'src/app/service/adForm.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss'],
  providers:[adFormService]
})
export class CreateAdComponent implements OnInit {

  ngOnInit() {
  }
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup

  constructor(private adFormService: adFormService) {
    this.adFormService.locationOneForm.subscribe(form => this.firstFormGroup = form)
    this.adFormService.locationTwoForm.subscribe(form => this.secondFormGroup = form)
    this.adFormService.locationThreeForm.subscribe(form => this.thirdFormGroup = form)
  }
}
