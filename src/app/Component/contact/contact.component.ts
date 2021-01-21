import { Component, OnInit,ViewChild } from '@angular/core';
import { Feedback, ContactType} from 'src/app/model/feedback';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

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
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      tel:[0, Validators.required],
      email:['', Validators.required],
      contacttype:'None',
      message:'',
      agree:false
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }
}
