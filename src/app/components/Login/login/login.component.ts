import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, BrowserModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  error:string ="";


  /**
   *
   */
  constructor(private formBuilder: FormBuilder,
    // public auntheticationService:Authenticat,
    public route: ActivatedRoute,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitData() {
    //console.log(this.loginForm.value);
    this.submitted = true;
  }

}

