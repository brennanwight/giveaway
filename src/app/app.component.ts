import { Component } from '@angular/core';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contestants = [];
  winners = [];
  winner: number;
  searchResults = [];
  numContestants: number;
  possibleResults = [];

  addContestant(value1) {
    console.log(value1)
    let value = value1.replace(/\s/g,"").toLowerCase();
    const index = this.contestants.indexOf(value, 0);
    if (index > -1) {
      alert("Sorry the user: " + value + " has already been added to the list, please use the search function to find them")
    }
    else {
      this.contestants.push(value)
    }
    console.log(this.contestants)
    this.numContestants = this.contestants.length
  };

  removeContestant(value) {
    const index = this.contestants.indexOf(value, 0);
    if (index > -1) {
      this.contestants.splice(index,1);
    }
  };

  removeWinner(value) {
    const index = this.winners.indexOf(value, 0);
    if (index > -1) {
      this.winners.splice(index, 1);
    }
  };

  resetWinners() {
    this.winners.splice(0, this.winners.length)
  };

  generateWinners() {
    this.winner = Math.floor(Math.random() * this.contestants.length) + 1
    let temp = this.contestants[this.winner - 1]
    console.log("Temp Winner: " + temp)
    const index = this.winners.indexOf(temp,0)
    if (index > -1) {
      console.log("Duplicate Winner: " + this.winners[index] + " has been disregarded")
    }
    else {
      console.log("# of contestants: " + this.contestants.length)
      console.log("index of winner(kinda): " + this.winner)
      this.winners.push(this.contestants[this.winner - 1])
    }
  };

  searchContestant(value1) {
    let value = value1.replace(/\s/g,"").toLowerCase();
    const index = this.contestants.indexOf(value, 0);
    if (index > - 1) {
      this.searchResults.push(this.contestants[index])
    }
    else {
      for (let i in this.contestants) {
        console.log(value)
        if(i.includes(value)) {
          console.log(i)
          this.possibleResults.push(i)
        }
      } 
     this.searchResults.push("Did not find user: " + value)
     console.log("current possible results: " + this.possibleResults)
    }
  };

  clearSearch() {
    this.searchResults = [];
  }
}
