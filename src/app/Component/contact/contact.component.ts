import { Component, OnInit,ViewChild } from '@angular/core';
import { Feedback, ContactType} from 'src/app/model/feedback';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { expand, flyInOut } from 'src/app/animations/app.animations';
import { FeedbackService} from 'src/app/service/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

formErrors={
  'firstname':'',
  'lastname':'',
  'tel':'',
  'email':''
};

  validMessages={
    'firstname':{
      'required': 'First name is required',
      'minlength': 'First name must be atleast 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters'
    },
    'lastname':{
      'required': 'Last name is required',
      'minlength': 'Last name must be atleast 2 characters long',
      'maxlength': 'Last name cannot be more than 25 characters'
    },
    'tel': {
      'required': 'Tel. number is required',
      'pattern':  'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email':    'Email not in valid format.'
    },
  };

  feedbackForm:FormGroup;
  feedback:Feedback;
  errMsg: string;
  feedbackCopy:Feedback;
  contacttype = ContactType;
  isLoading: boolean;
  isShowingResponse: boolean;

  constructor(private formbuilder:FormBuilder,
    private feedbackService: FeedbackService) {
    this.createForm();
    this.isLoading = false;
    this.isShowingResponse = false;
  }

  ngOnInit(): void {

  }

  createForm():void{
    this.feedbackForm= this.formbuilder.group({
      firstname:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      tel:[0, [Validators.required, Validators.pattern]],
      email:['', [Validators.required, Validators.email]],
      contacttype:'None',
      message:'',
      agree:false
    });
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
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
    this.isLoading = true;
    this.feedback = this.feedbackForm.value;
    this.feedbackService.submitFeedback(this.feedback)
    .subscribe(feedback =>
      {this.feedback= this.feedback; },
      errMsg => {this.feedback = null;
      this.feedbackCopy = null;
      this.errMsg = <any>errMsg
    } ,
    () => {
      this.isShowingResponse = true;
      setTimeout(() => {
          this.isShowingResponse = false;
          this.isLoading = false;
        } , 5000
      );
    })
;
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
