import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-two',
    templateUrl: './home-two.component.html',
    styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {
    contactForm: FormGroup;
    message: string = '';
    selectedDevice = ''; 

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.contactForm = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          message: ['', [Validators.required]],
          phone: ['', [Validators.required]],
          device: ['']
        });
      }

    ngOnInit(): void {}

    images: string[] = [
        'assets/images/marquee/hexnode-logo.png',
        'assets/images/marquee/42Gears-logo.png',
        'assets/images/marquee/logitech-logo.png',
        'assets/images/marquee/alogic-logo.png',
        'assets/images/marquee/belkin-logo.png',
        'assets/images/marquee/honeywell-logo.png',
        'assets/images/marquee/jebra-logo.png',
        'assets/images/marquee/poly-logo.png',
        'assets/images/marquee/stm-logo.png'
      ];

      devices = [
        'MacBook Air',
        'MacBook Pro',
        'iMac',
        'Mac Mini', 
        'Mac Studio', 
        'Mac Pro', 
        'iPad', 
        'iPhone', 
        'Apple Watch', 
        'Airpods', 
        'Other Accessories', 
    ]; 

    
      owlCarouselOptions = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 2 },
          480: { items: 3 },
          640: { items: 4 },
          992: { items: 6 }
        }
      };

    homeSlides: OwlOptions = {
		animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        autoHeight: true,
        autoplaySpeed: 800,
        mouseDrag: false,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-arrow'></i>", 
            "<i class='flaticon-next-1'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    }
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
		smartSpeed: 800,
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
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

	// Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}