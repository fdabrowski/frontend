import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Athlete} from "../../model/athletes.model";


@Component({
  selector: 'app-athletes-search',
  templateUrl: './athletes-search.component.html',
  styleUrls: ['./athletes-search.component.css']
})
export class AthletesSearchComponent {

  @Input() public searchControl: FormControl = new FormControl();
  @Input() allAthletes: Athlete[];
  searchItems: Athlete[] = [];

  constructor() {
    this.searchControl.valueChanges.subscribe((searchItem) => {
      this.searchItems = [];
      for (const item of this.allAthletes) {
        if (item.secondName.includes(searchItem)) {
          this.searchItems.push(item);
        }
      };
    });
  }

}
