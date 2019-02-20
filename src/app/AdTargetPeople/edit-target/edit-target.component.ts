import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TargetService } from 'src/app/service/target.service';
import { Target } from 'src/app/models';
@Component({
  selector: 'app-edit-target',
  templateUrl: './edit-target.component.html',
  styleUrls: ['./edit-target.component.scss']
})
export class EditTargetComponent implements OnInit {

  targetForm: FormGroup;
  _id:string ='';
  targetName:string='';
  platform:string='';
  isLoadingResults = false;
  target: Target;

  constructor(private router: Router, private route: ActivatedRoute, private targetService: TargetService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTarget(this.route.snapshot.params['id']);
    this.targetForm = this.formBuilder.group({
    'targetName' : [null, Validators.required],
    'platform' : [null, Validators.required],
  });
  }
  getTarget(id) {
    this.targetService.getTarget(id).subscribe(data => {
      this.target = data;
      this._id = this.target._id;
      
      this.targetForm.setValue({
        targetName: data.targetName,
        platform: data.platform,
      });
    });
  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.targetService.updateTarget(this._id, form)
      .subscribe(res => {
          //let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/target-details', this._id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  targetDetails() {
    this.router.navigate(['/target-details', this._id]);
  }

}
