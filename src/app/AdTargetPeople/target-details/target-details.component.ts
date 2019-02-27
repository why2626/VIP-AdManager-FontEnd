import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TargetService } from 'src/app/service/target.service';
import { Target } from 'src/app/models';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit {

  target: Target ={
    _id: '',
    targetName: '',
    platform: '',
    createTime: null,
    gender: '',
    age: '',
    userBtn_1: '',
    userBtn_2: '',
    userBtn_3: '',
    userBtn_4: '',
    userBtn_5: '',
    branBtn_1: '',
    branBtn_2: '',
    branBtn_3: '',
    branBtn_4: '',
    branBtn_5: '',
    categBtn_1: '',
    categBtn_2: '',
    categBtn_3: '',
    categBtn_4: '',
    categBtn_5: '',
  };
  isLoadingResults = true;


  constructor(private route: ActivatedRoute, private targetService: TargetService, private router: Router) { }

  ngOnInit() {
    //Call that function when the component is initiated.
    this.getTargetDetails(this.route.snapshot.params['id']);
  }

  getTargetDetails(_id) {
    this.targetService.getTarget(_id)
      .subscribe(res => {
        this.target = res;

        console.log(this.target);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  deleteTarget(_id) {
    this.isLoadingResults = true;
    this.targetService.deleteTarget(_id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/targets']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
