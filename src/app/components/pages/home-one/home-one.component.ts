import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-one',
    standalone: true,
    imports: [CommonModule, CarouselModule, RouterModule],
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

    constructor() { }

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

    ngOnInit(): void {}

    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }
    clientWrap: OwlOptions = {
		loop:true,
		margin:30,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 80000,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
				margin: 10,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
				margin: 20,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
    }

    // Accordion
    accordionItems = [
        {
            title: 'Great Understanding',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        },
        {
            title: 'Update Technology',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        },
        {
            title: 'Experienced Team',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        },
        {
            title: 'Best Quality Service',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
            open: false
        }
    ];
    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}