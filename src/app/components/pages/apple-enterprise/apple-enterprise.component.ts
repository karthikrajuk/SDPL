import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-enterprise',
  standalone: true,
  imports: [],
  templateUrl: './apple-enterprise.component.html',
  styleUrl: './apple-enterprise.component.scss'
})
export class AppleEnterpriseComponent implements OnInit  {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

}
