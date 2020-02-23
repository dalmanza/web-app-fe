import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/components/domain-model/Portfolio.model';
import { Tweet } from '../domain-model/Tweet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  portfolioModel: Portfolio;
  tweets: Tweet[];

  constructor(private portfolio: PortfolioService) {
    this.getPortfolioInformation(portfolio, undefined);
    this.getTweetInformation(portfolio);

  }

  private getPortfolioInformation(portfolio: PortfolioService, portfolioId: string) {
    portfolio.getPortfolioInformation("4").subscribe((response: any) => {
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
