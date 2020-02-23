import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  private getQuery( query: string) {
    const url = `http://localhost:8087/${ query }`;
    return this.http.get(url);
  }

  getPortfolioInformation(portfolioId: string) {
    return this.getQuery(`portfolio-information/${ portfolioId }`);
  }

  getTweets(search: string) {
    return this.getQuery(`portfolio-information/twitter-time-line/${ search }`);
  }

}
