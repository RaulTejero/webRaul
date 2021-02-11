import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  apps: any;
  technologiesFilter: string[];
  valueSelect: string;

  constructor(private AppsService: AppsService) {
    this.apps = [];
    this.technologiesFilter = [];
    this.valueSelect = "";
  }

  async ngOnInit() {

    try {
      this.apps = await this.AppsService.getAll();
    } catch (error) {
      console.log(error);
    }

    this.apps.forEach(el => {
      let result = el.technologies;
      result.forEach(el => {
        if (this.technologiesFilter.includes(el)) {
        } else {
          this.technologiesFilter.push(el)
        }
      });
    });
    
  }

  change(event) {
    this.valueSelect = event.target.value;
  
  }
}