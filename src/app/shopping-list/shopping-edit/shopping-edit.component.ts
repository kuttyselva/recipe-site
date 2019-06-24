import { Component, OnInit, ElementRef,  ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInp',{static: true}) nameInpref:ElementRef;
  @ViewChild('amtInp',{static: true}) amtInpref:ElementRef;
  
  @Output() ingredientAdder =new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }
  onAdditem(){
const newIng= new Ingredients(this.nameInpref.nativeElement.value,this.amtInpref.nativeElement.value);
this.ingredientAdder.emit(newIng);
  }
}
