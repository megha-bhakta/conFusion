import { Component, OnInit } from '@angular/core';
import { Feedback, ContactType} from 'src/app/model/feedback';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm:FormGroup;
  feedback:Feedback;
  contacttype = ContactType;
  constructor(private formbuilder:FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm(){
    this.feedbackForm= this.formbuilder.group({
      firstname:'',
      lastname:'',
      tel:0,
      email:'',
      contacttype:'None',
      message:'',
      agree:false
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }
}
