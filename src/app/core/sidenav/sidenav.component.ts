import { Component, OnInit, HostListener } from '@angular/core';
import { SideNavAnim } from '../../animation/side-nav.anim'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    SideNavAnim
  ]
})
export class SidenavComponent implements OnInit {

  collapse_ad = false
  collapse_target = false

  constructor() { }

  ngOnInit() {
  }
  itemAnim='out';

  @HostListener('mouseenter')
  onmouseenter(){
    this.itemAnim='hover';
  }
  @HostListener('mouseleave')
  onmouseleave(){
    this.itemAnim='out';
  }
  adOpen(){

  }

}
