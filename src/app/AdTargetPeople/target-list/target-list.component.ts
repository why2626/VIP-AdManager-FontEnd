import { Component, OnInit, ViewChild } from '@angular/core';
import { TargetService } from 'src/app/service/target.service';
import { Target } from 'src/app/models';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.scss']
})
export class TargetListComponent implements OnInit {


  displayedColumns: string[] = ['targetName', 'platform', 'peopleEstimate', 'createTime', 'operation'];
  data: Target[] = [];
  isLoadingResults = true;
  //dataSource = new MatTableDataSource<Target>(this.data);
 // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private targetService: TargetService,private router: Router) { }

  ngOnInit() {  //get list of targets immediately.
    this.targetService.getTargets()
    .subscribe(res => {
      this.data = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
   // this.dataSource.paginator = this.paginator;
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
