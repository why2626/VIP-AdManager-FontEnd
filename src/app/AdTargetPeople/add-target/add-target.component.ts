import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TargetService } from 'src/app/service/target.service';
@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.scss']
})
export class AddTargetComponent implements OnInit {

  targetForm: FormGroup;
  targetName:string='';
  platform:string='';

  //updated_at:Date=null;
  isLoadingResults = false;

  constructor(private router: Router, private targetService: TargetService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.targetForm = this.formBuilder.group({
      'targetName' : [null, Validators.required],
      'platform' : [null, Validators.required],

      //'updated_at' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.targetService.addTarget(form)
      .subscribe(res => {
          //let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/targets']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
