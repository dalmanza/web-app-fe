import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../domain-model/Portfolio.model';
import { Tweet } from '../domain-model/Tweet.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-information',
  templateUrl: './portfolio-information.component.html',
  styleUrls: ['./portfolio-information.component.css']
})
export class PortfolioInformationComponent implements OnInit {
  
  ngOnInit(): void {
  }

  @Input() portfolioModel: Portfolio;
  @Input() tweets: Tweet[];
  
  constructor() {}


}
