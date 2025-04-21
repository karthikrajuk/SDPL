import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  currentTab: string = 'tab1';

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
          0: {
              items: 1
          },
          400: {
              items: 1
          },
          740: {
              items: 1
          },
          940: {
              items: 1
          }
      },
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
  }

  slides = [
    {
        id: 1,
        title: 'MacBook Pro',
        description1: 'A work of smart.',
        description2: 'Built for Apple Intelligence.',
        description3: '',
        img: 'assets/images/products/macbook-pro.jpg',
        alt: 'MacBook Pro',
        pageLink: '/apple-devices-for-enterprise'
    },
    {
        id: 2,
        title: 'MacBook Air',
        description1: 'Sky blue colour.',
        description2: 'Built for Apple Intelligence.',
        description3: 'Sky high performance with M4',
        img: 'assets/images/products/macbook-air.jpg',
        alt: 'MacBook Air',
        pageLink: '/mdm-solutions'
    },
    {
        id: 3,
        title: 'Mac Mini',
        description1: 'All‑new ultra-compact design.',
        description2: 'Front and back ports.',
        description3: 'Fits, flexes and flies in any setup.',            
        img: 'assets/images/products/mac-mini.jpg',
        alt: 'Mac Mini',
        pageLink: '/audio-video-setup'
    },
    /* {
        id: 4,
        title: 'Apple iPad',
        description1: 'Touch, draw and type on one magical device.',
        description2: '',
        description3: '',            
        img: 'assets/images/products/ipad-air.jpg',
        alt: 'Apple iPad',
        pageLink: '/networking-solutions'
    }, */
    {
        id: 4,
        title: 'iPhone 16',
        description1: 'The ultimate iPhone.',
        description2: 'The first iPhone designed for Apple Intelligence.',
        description3: 'Personal, private, powerful.1',            
        img: 'assets/images/products/iphone16.jpg',
        alt: 'iPhone 16',
        pageLink: '/mobility'
    },
    {
        id: 5,
        title: 'iPhone 16-Pro',
        description1: 'The ultimate iPhone.',
        description2: 'The first iPhone designed for Apple Intelligence.',
        description3: 'Personal, private, powerful.1', 
        img: 'assets/images/products/iphone16-pro.jpg',
        alt: 'iPhone 16-Pro',
        pageLink: '/leasing-services'
    },
    {
        id: 6,
        title: 'iPhone 16e',
        description1: 'Supersized battery life.',
        description2: 'Beautiful, durable design.',
        description3: 'Built to last',
        img: 'assets/images/products/Apple-iPhone-16e.jpg',
        alt: 'Apple iPhone 16e',
        pageLink: '/financing-solutions'
    },
    {
        id: 7,
        title: 'Watch series 10',
        description1: 'Thinstant classic.',
        description2: 'Designed to make a difference.',
        description3: 'Health insights for days. And nights.',
        img: 'assets/images/products/watch10.jpg',
        alt: 'Watch series 10',
        pageLink: '/financing-solutions'
    },
    {
        id: 8,
        title: 'AirPods Pro 2',
        description1: 'H2. More immersive by every measure.',
        description2: 'Intelligent noise control.',
        description3: '',
        img: 'assets/images/products/airpodspro2.png',
        alt: 'AirPods Pro 2',
        pageLink: '/financing-solutions'
    },
    {
        id: 9,
        title: 'iMac',
        description1: 'H2. More immersive by every measure.',
        description2: 'Intelligent noise control.',
        description3: '',
        img: 'assets/images/products/imac.jpeg',
        alt: 'AirPods Pro 2',
        pageLink: '/financing-solutions'
    },
    {
        id: 10,
        title: 'iPad',
        description1: 'Now with Superfast A16 chip',
        description2: '',
        description3: '',
        img: 'assets/images/products/ipad.jpeg',
        alt: 'iPad',
        pageLink: '/financing-solutions'
    },
    {
        id: 11,
        title: 'iPad Air',
        description1: 'Featuring the powerful Apple M3 chip.',
        description2: 'Two sizes. Infinite possibilities.',
        description3: '',
        img: 'assets/images/products/ipad-air.jpeg',
        alt: 'iPad Air',
        pageLink: '/financing-solutions'
    },
    {
        id: 12,
        title: 'iPad Pro',
        description1: 'The thinnest Apple product ever.',
        description2: 'Ultra Retina XDR.',
        description3: 'Thrill. Sleeker.',
        img: 'assets/images/products/ipad-pro.jpeg',
        alt: 'iPad Pro',
        pageLink: '/financing-solutions'
    },
   
];

constructor() { }

ngOnInit(): void {
}

switchTab(event: Event, tab: string): void {
    event.preventDefault();
    this.currentTab = tab;
}
}
