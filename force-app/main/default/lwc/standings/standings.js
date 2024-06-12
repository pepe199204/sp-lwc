import { LightningElement, api, wire } from 'lwc';

import getTeams from '@salesforce/apex/getStanding.getTeams';
import getFixtures from '@salesforce/apex/getStanding.getFixtures';


let teams = [];
let fixtures = [];
let dataTable;

/*
W = Wins
D = Draws
L = Losts
GF = Goals For
GA = Goals Agains
GD = Goal Difference
Pts = Points

*/
let teamTemplate = { recordType: '', name: '',  W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };
let team;
let index;
export default class Standings extends LightningElement {
    

    @api recordId;
    //To read Salesforce data, Lightning web components use a reactive wire service. Use @wire in a component’s JavaScript class to specify a Lightning Data Service wire adapter.

    @wire(getTeams)
        /*
        When calling apex methods imperatively in LWC, we mainly go for promises. 
        */
        async handleTeams({data}) {
            try{
                this.data = data;
                teams = new Array();
                if(this.data){
                    //for each team, create a new object

                    this.data.forEach(element => {
                        team = new Object();
                        team = {...teamTemplate};
                        team.recordType = element.Id;
                        team.name = element.Name;
                        teams.push(team);
                    });
                    // console.log("<------------------>");
                    // console.log("teams in array");
                    // console.table(teams);
                    // console.log("<------------------>");
                    // season = this.recordId;
                    // console.log("let season  ==> " + season);
                    // console.log("<------------------>");
                }
            }catch(error){
                this.error = error;
                this.data = 'undefined';
                alert(this.error + "Reload the page");
            }  
        }

    @wire(getFixtures)
    /*
        When calling apex methods imperatively in LWC, we mainly go for promises. 
        */
     async handleFixtures({data}) {
        try{
            this.data = data;
            fixtures = new Array();
            
            if(this.data){
                dataTable = 0;
                index = 0;
                this.data.forEach(element => {
                    //Validate if the fixture is in the current season
                    if(element.Season_lookup__c == this.recordId){
                        //Add the fixture to the array
                        fixtures.push(element);
                    }
                });
                // console.table(fixtures);
                // console.log("<------------------>");
                // console.log("checkStanding");
                //for each teams, calculate the points and add to the array
                fixtures.forEach(element => {
                    
                    teams.forEach(teamElement => {
                        if(element.Home_Team__c == teamElement.recordType){

                            teamElement.GF += element.Score_Home_Team__c;
                            teamElement.GA += element.Score_Visitor_Team__c;
                            teamElement.GD = teamElement.GF - teamElement.GA;
                            if(element.Score_Home_Team__c > element.Score_Visitor_Team__c){
                                teamElement.W += 1;
                                teamElement.Pts += 3;
                            }else if(element.Score_Home_Team__c == element.Score_Visitor_Team__c){
                                teamElement.D += 1;
                                teamElement.Pts += 1;
                            }else if(element.Score_Home_Team__c < element.Score_Visitor_Team__c){
                                teamElement.L += 1;
                            }
                        }
                    });
                });
                // console.log("<------------------>");
                // console.log("Standing");
                //sort the array by points
                teams.sort(function(a, b){
                    return b.Pts - a.Pts;
                });
                //A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
                /*
                Para resumir, las promesas y async await resuelven la asincronía de distinta forma. Con las promesas no sabemos cuándo se va a resolver y con async await forzamos una espera en la función.
                */
                    Promise.resolve(teams).then(() => {

                        // console.log("<------------------>");
                        setTimeout(() => {
                        console.log("loadStanding");
                        console.log("teams");
                        console.table(teams);
                        dataTable = `<table class="slds-table slds-table_bordered slds-table_cell-buffer">
                                    <thead>
                                        <tr class="slds-text-title_caps">
                                                <th scope="col">Position</th>
                                                <th scope="col">Team</th>
                                                <th scope="col">W</th>
                                                <th scope="col">D</th>
                                                <th scope="col">L</th>
                                                <th scope="col">GF</th>
                                                <th scope="col">GA</th>
                                                <th scope="col">GD</th>
                                                <th scope="col">Pts</th>
                                                </tr>
                                                </thead>
                                                <tbody>`;
                            teams.forEach(element => {
                                index++;
                                dataTable += `<tr>
                                                <td>${index}</td>
                                                <td><a href='https://empathetic-moose-plnz0-dev-ed.lightning.force.com/lightning/r/Account/${element.recordType}/view'>${element.name}</a></td>
                                                <td>${element.W}</td>
                                                <td>${element.D}</td>
                                                <td>${element.L}</td>
                                                <td>${element.GF}</td>
                                                <td>${element.GA}</td>
                                                <td>${element.GD}</td>
                                                <td>${element.Pts}</td>
                                            </tr>`;
                            }
                        );
                        dataTable = dataTable + `</tbody></table>`;
                        
                        this.attachmentPoint = this.template.querySelector('div[ishtmlcontainer=true]');
                        this.attachmentPoint.innerHTML = dataTable; 
                    },1500);
            });

            }

        }catch(error){
            this.error = error;
            this.data = 'undefined';
            alert(this.error + "Reload the page");
        }
            
    }  
}