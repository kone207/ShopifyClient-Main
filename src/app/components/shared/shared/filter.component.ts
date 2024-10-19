import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Filter } from 'src/app/models/filter';
import { StoreService } from 'src/app/services/store.service';

interface cat {
  name:string,
  selected: boolean    
}

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class SharedComponent {


  categories: cat[] = [
    {name:"Mechanical Services", selected: false},
    {name:"Transportation", selected: false},
    {name:"Hardware/sofware solutions", selected: false},
    {name:"Construction and Home Improvement", selected: false},
    {name:"Tutoring", selected: false},
   
  ];

  tempFilter: Filter = {name:"", categories:[]};

  constructor(public storeService: StoreService, public activeModal: NgbActiveModal) {}

  ngOnInit():void {
    this.tempFilter = this.storeService.filter;
    this.categories = this.categories.map(cat =>
      ({
        name: cat?.name,
        selected: (this.tempFilter.categories.includes(cat?.name))
    }));
  }

  onChange():void {
    this.tempFilter.categories = this.categories.filter(c => c?.selected).map(cc => cc.name);
  }

  onFilterChanged():void {
    this.storeService.filter = this.tempFilter;
  }

}
