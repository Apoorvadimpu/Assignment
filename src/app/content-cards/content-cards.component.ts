import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {

   title = 'FindFavFood';
  cards = [
    {
      title: 'Moonlight',
      description: 'Soothing ambience, good time to enjoy with your loved ones having your meal',
      buttonText: '54',
      img: '/assets/maintalkofthetown.jpg',
      cuisine:'Italian,Thai,Indian',
      ratings:'3.0'
    },
    {
      title: 'Cracker-Barrell',
      description: 'Nice place to hangout with a bunch of friends late nights,food at affordable price',
      buttonText: '39',
      img: '/assets/Cracker-Barrell2-175x175_a3ddeec1-5056-a36a-0bb822fcf0ecfafb.jpg',
      cuisine:'Italian,Cinese,Turkish',
      ratings:'2.5'
    },
    {
      title: 'Boiling Crabs',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '36',
      img: '/assets/boiling-crabs-and-crawfish-175x175.jpg',
      cuisine:'Seafood,Chinese,Mongolian',
      ratings:'4.0'
    },
    {
      title: 'Black Peaches',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '47',
      img: '/assets/Blacks-2-175x175_a3753540-5056-a36a-0b79d6cf55ad92e7.jpg',
      cuisine:'Desserts,Chinese,French',
      ratings:'3.5'
    },

     {
      title: 'NYP',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '59',
      img: '/assets/nyp.jpg',
       cuisine:'Italian,Desserts,Pizza',
      ratings:'1.5'
    },

     {
      title: 'Golden China',
      description: 'Quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '66',
      img: '/assets/golden-china-175x175_a4abaaa7-5056-a36a-0b2cd2a4f7ba6ceb.jpg',
      cuisine:'Chinese,Mongolian,Turkish',
      ratings:'4.5'
    },

     {
      title: 'Haleiwa',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '76',
      img: '/assets/haleiwa-shave-ice-logo-175x175.jpg',
      cuisine:'Bulgarian,Swedish',
      ratings:'4.5'
    },

     {
      title: 'Driskill',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '34',
      img: '/assets/The-Driskill-Hotel-Austin-at-Pet-Hotels-of-America-175x175.jpg',
      cuisine:'Thai,Indian,Pakistani',
      ratings:'4.0'
    },


     {
      title: 'Diverse Daisies',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '63',
      img: '/assets/240352_Logo_DiverseDaisies_175x175.jpg',
      cuisine:'Swedish,Thai',
      ratings:'3.5'
    },
        {
      title: 'Driskill',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '34',
      img: '/assets/The-Driskill-Hotel-Austin-at-Pet-Hotels-of-America-175x175.jpg',
      cuisine:'Thai,Indian,Pakistani',
      ratings:'4.0'
    },
    {
      title: 'NYP',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '59',
      img: '/assets/nyp.jpg',
       cuisine:'Italian,Desserts,Pizza',
      ratings:'1.5'
    },
     {
      title: 'Moonlight',
      description: 'Soothing ambience, good time to enjoy with your loved ones having your meal',
      buttonText: '54',
      img: '/assets/maintalkofthetown.jpg',
      cuisine:'Italian,Thai,Indian',
      ratings:'3.0'
    },
    {
      title: 'Cracker-Barrell',
      description: 'Nice place to hangout with a bunch of friends late nights,food at affordable price',
      buttonText: '39',
      img: '/assets/Cracker-Barrell2-175x175_a3ddeec1-5056-a36a-0bb822fcf0ecfafb.jpg',
      cuisine:'Italian,Cinese,Turkish',
      ratings:'2.5'
    },
    {
      title: 'Boiling Crabs',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '36',
      img: '/assets/boiling-crabs-and-crawfish-175x175.jpg',
      cuisine:'Seafood,Chinese,Mongolian',
      ratings:'4.0'
    },
      {
      title: 'Black Peaches',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '47',
      img: '/assets/Blacks-2-175x175_a3753540-5056-a36a-0b79d6cf55ad92e7.jpg',
      cuisine:'Desserts,Chinese,French',
      ratings:'3.5'
    },
     {
      title: 'Golden China',
      description: 'Quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '66',
      img: '/assets/golden-china-175x175_a4abaaa7-5056-a36a-0b2cd2a4f7ba6ceb.jpg',
      cuisine:'Chinese,Mongolian,Turkish',
      ratings:'4.5'
    },


  ];

  constructor() { }

  ngOnInit() {
  }

}
