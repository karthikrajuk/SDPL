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
        title: 'Apple Devices for Enterprise',
        description1: 'Empower your workforce with Apple devices, tailored for enterprise needs.',
        description2: 'Get your team working smarter with Apple devices that just work.',
        description3: ' Deploy Macs and iPads at scale with zero-touch setup and enterprise-grade support.',
        img: 'assets/images/homes.png',
        alt: 'Apple Devices for Enterprise',
        pageLink: '/apple-devices-for-enterprise'
    },
    {
        id: 2,
        title: 'MDM Solutions',
        description1: 'Simplify management with industry-leading Mobile Device Management.',
        description2: 'Take control of every device—without leaving your desk.',
        description3: 'Secure, manage, and monitor Apple devices with advanced MDM integration.',
        img: 'assets/images/authorized.png',
        alt: 'MDM Solutions',
        pageLink: '/mdm-solutions'
    },
    {
        id: 3,
        title: 'Audio Video Setup',
        description1: 'Transform your spaces with professional AV solutions for clear communication.',
        description2: 'Make every meeting look and sound amazing.',
        description3: 'Smart AV integrations for seamless presentations and hybrid collaboration.',            
        img: 'assets/images/it-training.png',
        alt: 'Audio Video Setup',
        pageLink: '/audio-video-setup'
    },
    {
        id: 4,
        title: 'Networking Solutions',
        description1: 'Build fast, reliable, and secure networks tailored for your organisation.',
        description2: 'Say goodbye to weak Wi-Fi and tangled cables.',
        description3: 'Enterprise-grade networking built for speed, stability, and scale.',            
        img: 'assets/images/approach.png',
        alt: 'Networking Solutions',
        pageLink: '/networking-solutions'
    },
    {
        id: 5,
        title: 'Mobility',
        description1: 'Enable secure and seamless mobile workforces with Apple mobility solutions.',
        description2: 'Work from anywhere—securely and efficiently.',
        description3: 'Drive productivity on the move with mobile-first Apple ecosystem strategies.',            
        img: 'assets/images/demo.png',
        alt: 'Mobility',
        pageLink: '/mobility'
    },
    {
        id: 6,
        title: 'Leasing Services',
        description1: 'Flexible leasing plans to equip your teams without upfront investment.',
        description2: 'Upgrade without the upfront cost—lease the latest tech today.',
        description3: 'Scalable leasing models to stay future-ready and financially agile.',
        img: 'assets/images/essilor.png',
        alt: 'Leasing Services',
        pageLink: '/leasing-services'
    },
    {
        id: 7,
        title: 'Financing Solutions',
        description1: 'Finance your Apple ecosystem with custom plans that fit your budget.',
        description2: 'Get the tech you need—pay the way that works for you.',
        description3: 'Smart financing options for seamless IT expansion and upgrades.',
        img: 'assets/images/macos.png',
        alt: 'Financing Solutions',
        pageLink: '/financing-solutions'
    }
];

constructor() { }

ngOnInit(): void {
}

switchTab(event: Event, tab: string): void {
    event.preventDefault();
    this.currentTab = tab;
}
}
