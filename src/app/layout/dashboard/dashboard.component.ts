import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'DevOps',
                text:
                    'DevOps Monitoring'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Servers',
                text: 'Server setups.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Logs',
                text:
                    'Log management.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `success message Test`
            },
            {
                id: 2,
                type: 'warning',
                message: `Warning msg Test`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
