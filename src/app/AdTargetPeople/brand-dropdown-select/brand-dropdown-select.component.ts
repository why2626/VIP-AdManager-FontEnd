import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { gatherTargetInfoService } from 'src/app/service';

@Component({
  selector: 'app-brand-dropdown-select',
  templateUrl: './brand-dropdown-select.component.html',
  styleUrls: ['./brand-dropdown-select.component.scss']
})
export class BrandDropdownSelectComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  brandCtrl = new FormControl();
  filteredbrands: Observable<string[]>;
  brands: string[] = [];
  allbrands: string[] = ['清扬', '海飞丝', 'Mac', 'Dior', '丝塔芙'];

  @ViewChild('brandInput') brandInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private gatherTargetInfoService : gatherTargetInfoService) {
    this.filteredbrands = this.brandCtrl.valueChanges.pipe(
        startWith(null),
        map((brand: string | null) => brand ? this._filter(brand) : this.allbrands.slice()));
  }
  ngOnInit() {
  }

  openDropDown(){
    this.matAutocomplete.opened
  }

  remove(brand: string): void {
    const index = this.brands.indexOf(brand);
    if (index >= 0) {
      this.brands.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.brands.push(event.option.viewValue);
    this.brandInput.nativeElement.value = '';
    this.brandCtrl.setValue(null);
    this.gatherTargetInfoService.brandItems = this.brands
    this.gatherTargetInfoService.showBrandInfo()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allbrands.filter(brand => brand.toLowerCase().indexOf(filterValue) === 0);
  }

}
