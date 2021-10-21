import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Input() brand: any
    isloggedin: any = false
    constructor(private router: Router) {

    }


    ngDoCheck() {
        if (localStorage.token) {
            this.isloggedin = true
        }
        else {
            this.isloggedin = false
        }
    }

    logout() {
        localStorage.clear()
    }
    searchtext: any = ""

    search(event: any) {
        event.preventDefault()
        if (this.searchtext) {
            this.router.navigate(["/search"], { queryParams: { q: this.searchtext } })
        }
    }

    demo() {
        alert()
    }



}


// create a folder with the component name 
// create 3 files inside that componentname.component.html ,.ts ,.css

// inside ts file create a class and make it as a component class with @Component

// mention that class name into declarations array of app.module.ts

// component is ready to use now 

// use it by the name of the tag u have mentioned into selector tag