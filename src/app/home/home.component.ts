import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({     // Decorateur du composant
  selector: 'app-home', // appeler un composant dans un autre composant
  templateUrl: './home.component.html',  // chemin vers html du component
  styleUrls: ['./home.component.css']    // chemin vers css du component
})
export class HomeComponent { // donnees accessibles pour home.html et home.css

  // var (variable globale)
  // let (variable locale)  

  title :string = 'Accueil'; // on declare le type de la variable avec :
  age :number = 20;
  homme :boolean = true;

  //tab :Array<string> = ['a','b','c'];  // on declare le type de donnees dans le tableau
  tab :Array<any> = ['a','b','c','false','5'];  // any pour donnees de tous types

  tasks: Array<any> = [
    {
    title : 'Faire la vaisselle',
    date : '14/02/2023',
    isDone : false,
    isVisible : true
    },
    {
    title : 'Faire la cuisine',
    date : '14/02/2023',
    isDone : false,
    isVisible : true

    },
    {
    title : 'Faire le ménage',
    date : '14/02/2023',
    isDone : false,
    isVisible : true

    }
  ];

  changeStatus(argument: any):void {  // fonction changement status booleen
    console.log(argument);
    
    if (argument.isDone == true) {
      argument.isDone = false;

    }else {
      argument.isDone = true;

    }
  }
      ////  
      //// ou en simplifié pour booleen : 
      ////  argument.isDone = !argument.isDone;


  visibility(arg:any):void {  // void : return rien
    arg.isVisible = !arg.isVisible;
    this.changeStatus(arg);  // rappel de fonction existante avec this.
  }
  

  



}
