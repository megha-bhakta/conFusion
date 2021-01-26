import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import {DishService} from 'src/app/service/dish.service';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Comments} from 'src/app/model/comment';
import { switchMap} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {


  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  formErrors={
    'author':'',
    'comment':'',
  };

  validMessages = {
    'author': {
      'required': 'Author is required.' ,
      'minlength': 'Author must be at least 2 characters long.'
    } ,
    'comment': {
      'required': 'comment is required.' ,
      'minlength': 'comment must be at least 2 characters long.'
    } ,
  };

  commentForm:FormGroup;
  comment:Comments;

  constructor(private dishService:DishService,
              private activatedRouter:ActivatedRoute,
              private location:Location,
              private formbuilder:FormBuilder,
              @Inject('baseURL') public baseURL: string) {
                this.createForm();
               }

  ngOnInit() {
    this.dishService.getIds().subscribe(dishIds => this.dishIds = dishIds);
    this.activatedRouter.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack():void{
    this.location.back();
  }


  createForm():void{
    this.commentForm= this.formbuilder.group({
      author:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating:5,
      comment:['', Validators.required],
    });
    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date= new Date().toDateString();
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }
}
