import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { TargetService } from 'src/app/service/target.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.scss'],
})
export class CreateTargetComponent implements OnInit {

  targetForm: FormGroup;

  selectedPlatform: string = 'iOS';

  ageSelectedItems: string;
  genderSelectedItems: string;

  userBtn_1: any;
  userBtn_2: any;
  userBtn_3: any;
  userBtn_4: any;
  userBtn_5: any;

  branBtn_1:any;
  branBtn_2:any;
  branBtn_3:any;
  branBtn_4:any;
  branBtn_5:any;

  categBtn_1:any;
  categBtn_2:any;
  categBtn_3:any;
  categBtn_4:any;
  categBtn_5:any;

  targetName = new FormControl('',[Validators.required]);

  constructor(
    private targetService: TargetService,
    private router: Router,
    private formBuilder: FormBuilder){}

  ngOnInit() {
    this.target_form();
  }

 target_form(): void{
    this.targetForm = this.formBuilder.group({
      targetName : [null, Validators.required],
      platform : [null, Validators.required],
      createTime : [(new Date()).toLocaleDateString, Validators.required],
      gender: [null],
      age: [null],
      userBtn_1: [null],
      userBtn_2: [null],
      userBtn_3: [null],
      userBtn_4: [null],
      userBtn_5: [null],
      branBtn_1: [null],
      branBtn_2: [null],
      branBtn_3: [null],
      branBtn_4: [null],
      branBtn_5: [null],
      categBtn_1: [null],
      categBtn_2: [null],
      categBtn_3: [null],
      categBtn_4: [null],
      categBtn_5: [null],
    });
  }

  getErrorMessage() {
    return this.targetName.hasError('required') ? '人群名称不能为空' : '';
  }
    ageSelectChange(event: string){
      this.ageSelectedItems = `${event}`;
      this.targetForm.controls['age'].patchValue(this.ageSelectedItems);
    }
    genderSelectChange(event: string){
      this.genderSelectedItems = `${event}`;
      this.targetForm.controls['gender'].patchValue(this.genderSelectedItems);
    }
//-----展示用户行为------
    valUserBtn_1(event: string){
      this.userBtn_1 = `${event}`;
      this.targetForm.controls['_userBtn_1'].patchValue(this.userBtn_1);
      console.log(this.userBtn_1)
   }
   valUserBtn_2(event: string){
      this.userBtn_2 = `${event}`;
      this.targetForm.controls['userBtn_2'].patchValue(this.userBtn_2);
   }
   valUserBtn_3(event: string){
      this.userBtn_3 = `${event}`;
      this.targetForm.controls['userBtn_3'].patchValue(this.userBtn_3);
   }
   valUserBtn_4(event: string){
      this.userBtn_4 = `${event}`;
      this.targetForm.controls['userBtn_4'].patchValue(this.userBtn_4);
   }
   valUserBtn_5(event: string){
      this.userBtn_5 = `${event}`;
      this.targetForm.controls['userBtn_5'].patchValue(this.userBtn_5);

   }
//-----展示品牌行为------
    showBrandBtn_1(event: string){
      this.branBtn_1 = `${event}`;
      this.targetForm.controls['branBtn_1'].patchValue(this.branBtn_1);
   }
    showBrandBtn_2(event: string){
      this.branBtn_2 = `${event}`;
      this.targetForm.controls['branBtn_2'].patchValue(this.branBtn_2);
   }
    showBrandBtn_3(event: string){
      this.branBtn_3 = `${event}`;
      this.targetForm.controls['branBtn_3'].patchValue(this.branBtn_3);
   }
    showBrandBtn_4(event: string){
      this.branBtn_4 = `${event}`;
      this.targetForm.controls['branBtn_4'].patchValue(this.branBtn_4);
   }
    showBrandBtn_5(event: string){
      this.branBtn_5 = `${event}`;
      this.targetForm.controls['branBtn_5'].patchValue(this.branBtn_5);
   }
//-----展示类品行为------
    showCategoryBtn_1(event: string){
      this.categBtn_1 = `${event}`;
      this.targetForm.controls['categBtn_1'].patchValue(this.categBtn_1);
   }
    showCategoryBtn_2(event: string){
      this.categBtn_2 = `${event}`;
      this.targetForm.controls['categBtn_2'].patchValue(this.categBtn_2);
   }
    showCategoryBtn_3(event: string){
      this.categBtn_3 = `${event}`;
      this.targetForm.controls['categBtn_3'].patchValue(this.categBtn_3);
   }
    showCategoryBtn_4(event: string){
      this.categBtn_4 = `${event}`;
      this.targetForm.controls['categBtn_4'].patchValue(this.categBtn_4);
   }
    showCategoryBtn_5(event: string){
      this.categBtn_5 = `${event}`;
      this.targetForm.controls['categBtn_5'].patchValue(this.categBtn_5);
   }
    onFormSubmit(form:NgForm) {
      this.targetService.addTarget(form)
          .subscribe(res => {
         this.router.navigate(['/targets']);
          }, (err) => {
          console.log(err);
         });
      }
}
