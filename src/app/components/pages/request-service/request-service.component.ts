import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-service',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './request-service.component.html',
  styleUrl: './request-service.component.scss'
})
export class RequestServiceComponent implements OnInit {
  contactForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      device: ['', [Validators.required]]
    });
  }

  devices = ['IT-Training',
    'macOS-Basic',
    'macOS-Advanced',
    'iOS-Essentials',
    'iOS - Technical',
  ];

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.contactForm.value)
    if (this.contactForm.valid) {
      this.http.post('http://localhost:4200/contact.php', this.contactForm.value)
        .subscribe((response: any) => {
          this.message = response.message;
          console.log("message", this.message);
          this.contactForm.reset();
        }, error => {
          this.message = 'Error sending message. Try again later.';
        });
    }
  }

} 
