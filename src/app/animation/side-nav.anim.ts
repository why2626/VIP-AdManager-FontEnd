import { trigger, state, transition, style, animate } from "@angular/animations"

export const SideNavAnim = trigger('item', [
  state('out', style({background:'white'})),
  state('hover', style({background:'green'})),
  transition('out=>hover',animate('100ms')),
  transition('hover=>out',animate('100ms')),
])
