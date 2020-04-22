import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  todos ;
constructor( arr: AssignmentComponent){
this.todos = arr.getTodos();
console.log((this.todos[1].type))
  }

 
}

