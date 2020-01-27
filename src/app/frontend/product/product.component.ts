import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];
 
  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
    //console.log(this.dataService);
  }

  ngOnInit() {

      
  }

  /* For Data table */

  settings = {
              columns: {
                id: {
                  title: 'ID'
                },
                name: {
                  title: 'Full Name'
                },
                username: {
                  title: 'User Name'
                },
                email: {
                  title: 'Email'
                }
              }
            };

  data = [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
          },          
          {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
          }
        ];

}
