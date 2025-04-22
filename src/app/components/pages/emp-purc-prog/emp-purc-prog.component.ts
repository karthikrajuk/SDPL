import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-purc-prog',
  standalone: true,
  imports: [],
  templateUrl: './emp-purc-prog.component.html',
  styleUrl: './emp-purc-prog.component.scss'
})
export class EmpPurcProgComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
