import { Component, OnInit } from '@angular/core';
import { TargetService } from 'src/app/service/target.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Target } from 'src/app/models';
@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.scss']
})
export class TargetListComponent implements OnInit {

  displayedColumns: string[] = ['targetName', 'platform'];
  data: Target[] = [];
  isLoadingResults = true;

  constructor(private targetService: TargetService) { }

  ngOnInit() {  //get list of targets immediately.
    this.targetService.getTargets()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
