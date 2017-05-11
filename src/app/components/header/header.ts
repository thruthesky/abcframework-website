import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: 'header.html',
    styleUrls: ['./header.scss']
})

export class HeaderComponent implements OnInit {
    showMenu: boolean = true;
    constructor() { }

    ngOnInit() { }
}