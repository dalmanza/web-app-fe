import { Component, OnInit } from '@angular/core';
import { Ptor } from 'protractor';
import { Portfolio } from '../domain-model/Portfolio.model';
import { Tweet } from '../domain-model/Tweet.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  portfolioModel: Portfolio;
  tweets: Tweet[];
  isShowPanel = false;
  
  constructor(private portfolio: PortfolioService) { 
     this.showPanel();
  }

  private showPanel() {
    if (this.portfolioModel == undefined || this.tweets == undefined) {
      this.isShowPanel = false;
    } else {
      this.isShowPanel = true;
    }
  }

  searchPortfolio(portfolioId: string) {
    this.getPortfolioInformation(this.portfolio, portfolioId);
    this.getTweetInformation(this.portfolio);
    this.isShowPanel = true;
  }

  private getPortfolioInformation(portfolio: PortfolioService, portfolioId: string) {
    portfolio.getPortfolioInformation(portfolioId).subscribe((response: any) => {
      this.portfolioModel = response;
    }, (errorService) => {
      console.log('Error');
    });
  }

  private getTweetInformation(portfolio: PortfolioService) {
    portfolio.getTweets('Game of thrones').subscribe((tweets: any) => {
      this.tweets = tweets;
    }, (errorService) => {
      console.log('Error');
    });
  }

  ngOnInit(): void {
  }

}
