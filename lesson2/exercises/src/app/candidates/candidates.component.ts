import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot"
   selected: any;
   candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }
  select(candidate: any): void {
    this.selected = candidate;
  }
  clearData(): void {
    this.selected = null;
  }

  // Code the addToCrew function here:
  addToCrew():void{
    if (this.selected) {
      if (!this.crew.length) {
        this.crew.push(this.selected);
      } else {
        let isCandidateExist = false;
        for (let i=0; i< this.crew.length; i++) {
            if (this.crew[i].name === this.selected.name) {
              isCandidateExist = true;
              break;
            }

        }
        if (!isCandidateExist) {
          this.crew.push(this.selected);
        }
         
      }
    }

  }
  clearCrew(): void {
    this.crew = [];
  }


  // BONUS: Code the changeMissionName function here:


}
