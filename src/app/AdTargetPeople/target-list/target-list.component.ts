import { Component, OnInit } from '@angular/core';
import { TargetService } from 'src/app/service/target.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Target } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.scss']
})
export class TargetListComponent implements OnInit {

  displayedColumns: string[] = ['targetName', 'platform', 'peopleEstimate', 'createTime', 'operation'];
  data: Target[] = [];
  isLoadingResults = true;

  constructor(private targetService: TargetService,private router: Router) { }

  ngOnInit() {  //get list of targets immediately.
    this.targetService.getTargets()
    .subscribe(res => {
      this.data = res;
      //console.log(this.data);
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
