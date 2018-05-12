import { Athlete } from './../../model/athlete';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-athletes-search',
  templateUrl: './athletes-search.component.html',
  styleUrls: ['./athletes-search.component.css']
})
export class AthletesSearchComponent implements OnInit {

  @Input() public searchControl: FormControl = new FormControl();

  searchItems: Athlete[] = [];
  athletesList: Athlete[];

  constructor() {
    this.searchControl.valueChanges.subscribe( (searchItem) => {
        this.searchItems.includes(searchItem);
    });
  }

  ngOnInit() {
  }

}
