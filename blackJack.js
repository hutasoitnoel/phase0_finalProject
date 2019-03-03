// Card List
var deck = [
  {
  // TWO
    number: "Two",
    point: 2,
    type: "Clubs"
  },
  {
    number: "Two",
    point: 2,
    type: "Diamonds"
  },
  {
    number: "Two",
    point: 2,
    type: "Hearts"
  },
  {
    number: "Two",
    point: 2,
    type: "Spades"
  },

  // THREE
  {
    number: "Three",
    point: 3,
    type: "Clubs"
  },
  {
    number: "Three",
    point: 3,
    type: "Diamonds"
  },
  {
    number: "Three",
    point: 3,
    type: "Hearts"
  },
  {
    number: "Three",
    point: 3,
    type: "Spades"
  },

  // FOUR
  {
    number: "Four",
    point: 4,
    type: "Clubs"
  },
  {
    number: "Four",
    point: 4,
    type: "Diamonds"
  },
  {
    number: "Four",
    point: 4,
    type: "Hearts"
  },
  {
    number: "Four",
    point: 4,
    type: "Spades"
  },

  // FIVE
  {
    number: "Five",
    point: 5,
    type: "Clubs"
  },
  {
    number: "Five",
    point: 5,
    type: "Diamonds"
  },
  {
    number: "Five",
    point: 5,
    type: "Hearts"
  },
  {
    number: "Five",
    point: 5,
    type: "Spades"
  },

  // SIX
  {
    number: "Six",
    point: 6,
    type: "Clubs"
  },
  {
    number: "Six",
    point: 6,
    type: "Diamonds"
  },
  {
    number: "Six",
    point: 6,
    type: "Hearts"
  },
  {
    number: "Six",
    point: 6,
    type: "Spades"
  },

  // SEVEN
  {
    number: "Seven",
    point: 7,
    type: "Clubs"
  },
  {
    number: "Seven",
    point: 7,
    type: "Diamonds"
  },
  {
    number: "Seven",
    point: 7,
    type: "Hearts"
  },
  {
    number: "Seven",
    point: 7,
    type: "Spades"
  },

  // EIGHT
  {
    number: "Eight",
    point: 8,
    type: "Clubs"
  },
  {
    number: "Eight",
    point: 8,
    type: "Diamonds"
  },
  {
    number: "Eight",
    point: 8,
    type: "Hearts"
  },
  {
    number: "Eight",
    point: 8,
    type: "Spades"
  },

  // NINE
  {
    number: "Nine",
    point: 9,
    type: "Clubs"
  },
  {
    number: "Nine",
    point: 9,
    type: "Diamonds"
  },
  {
    number: "Nine",
    point: 9,
    type: "Hearts"
  },
  {
    number: "Nine",
    point: 9,
    type: "Spades"
  },

  // TEN
  {
    number: "Ten",
    point: 10,
    type: "Clubs"
  },
  {
    number: "Ten",
    point: 10,
    type: "Diamonds"
  },
  {
    number: "Ten",
    point: 10,
    type: "Hearts"
  },
  {
    number: "Ten",
    point: 10,
    type: "Spades"
  },

  // JACK
  {
    number: "Jack",
    point: 10,
    type: "Clubs"
  },
  {
    number: "Jack",
    point: 10,
    type: "Diamonds"
  },
  {
    number: "Jack",
    point: 10,
    type: "Hearts"
  },
  {
    number: "Jack",
    point: 10,
    type: "Spades"
  },

  // QUEEN
  {
    number: "Queen",
    point: 10,
    type: "Clubs"
  },
  {
    number: "Queen",
    point: 10,
    type: "Diamonds"
  },
  {
    number: "Queen",
    point: 10,
    type: "Hearts"
  },
  {
    number: "Queen",
    point: 10,
    type: "Spades"
  },

  // KING
  {
    number: "King",
    point: 10,
    type: "Clubs"
  },
  {
    number: "King",
    point: 10,
    type: "Diamonds"
  },
  {
    number: "King",
    point: 10,
    type: "Hearts"
  },
  {
    number: "King",
    point: 10,
    type: "Spades"
  },

  // ACE
  {
    number: "Ace",
    point: 11,
    type: "Clubs"
  },
  {
    number: "Ace",
    point: 11,
    type: "Diamonds"
  },
  {
    number: "Ace",
    point: 11,
    type: "Hearts"
  },
  {
    number: "Ace",
    point: 11,
    type: "Spades"
  }
]
  
// Elements
var headerElement = document.getElementById("header")
var myPointsElement = document.getElementById("my-points-id");
var dealerPointsElement = document.getElementById("dealer-points-id");
var hitElement = document.getElementById("hit");
var standElement = document.getElementById("stand");
var myCount = 1;
var dealerCount = 1;

// My Stats
var myPoints = 0;
var myCards = [];
var myCardCount = -1;

// Dealer Stats
var dealerPoints = 0;
var dealerCards = [];
var dealerCardCount = -1

// My Card Randomizer
function myRandomizer (param){
  var random = Math.floor(Math.random() * param.length);
  myPoints += param[random].point;
  myCards.push(param[random].number + " of " + param[random].type)
  param.splice(random , 1);
  myCardCount++
  switch (myCards[myCards.length-1]){
    case"Two of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c2.png"; break;
    case"Three of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c3.png"; break;
    case"Four of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c4.png"; break;
    case"Five of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c5.png"; break;
    case"Six of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c6.png"; break;
    case"Seven of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c7.png"; break;
    case"Eight of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c8.png"; break;
    case"Nine of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c9.png"; break;
    case"Ten of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_c10.png"; break;
    case"Jack of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_cj.png"; break;
    case"Queen of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_cq.png"; break;
    case"King of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_ck.png"; break;
    case"Ace of Clubs":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_ca.png"; break;
  
    case"Two of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d2.png"; break;
    case"Three of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d3.png"; break;
    case"Four of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d4.png"; break;
    case"Five of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d5.png"; break;
    case"Six of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d6.png"; break;
    case"Seven of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d7.png"; break;
    case"Eight of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d8.png"; break;
    case"Nine of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d9.png"; break;
    case"Ten of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_d10.png"; break;
    case"Jack of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_dj.png"; break;
    case"Queen of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_dq.png"; break;
    case"King of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_dk.png"; break;
    case"Ace of Diamonds":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_da.png"; break;
  
    case"Two of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h2.png"; break;
    case"Three of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h3.png"; break;
    case"Four of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h4.png"; break;
    case"Five of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h5.png"; break;
    case"Six of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h6.png"; break;
    case"Seven of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h7.png"; break;
    case"Eight of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h8.png"; break;
    case"Nine of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h9.png"; break;
    case"Ten of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_h10.png"; break;
    case"Jack of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_hj.png"; break;
    case"Queen of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_hq.png"; break;
    case"King of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_hk.png"; break;
    case"Ace of Hearts":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_ha.png"; break;
  
    case"Two of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s2.png"; break;
    case"Three of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s3.png"; break;
    case"Four of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s4.png"; break;
    case"Five of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s5.png"; break;
    case"Six of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s6.png"; break;
    case"Seven of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s7.png"; break;
    case"Eight of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s8.png"; break;
    case"Nine of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s9.png"; break;
    case"Ten of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_s10.png"; break;
    case"Jack of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_sj.png"; break;
    case"Queen of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_sq.png"; break;
    case"King of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_sk.png"; break;
    case"Ace of Spades":
    document.getElementById("myCard" + myCount).src="images/cards/Set_B/small/card_b_sa.png"; break;
  }
  myCount++
}

// Dealer Card Randomizer
function dealerRandomizer (param){
  var random = Math.floor(Math.random() * param.length);
  var dealerPointsList = [];
  dealerPointsList.push(param[random].point);
  dealerPoints += param[random].point;
  dealerCards.push(param[random].number + " of " + param[random].type)
  param.splice(random , 1);
  dealerCardCount++
  switch (dealerCards[dealerCards.length-1]){
    case"Two of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c2.png"; break;
    case"Three of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c3.png"; break;
    case"Four of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c4.png"; break;
    case"Five of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c5.png"; break;
    case"Six of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c6.png"; break;
    case"Seven of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c7.png"; break;
    case"Eight of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c8.png"; break;
    case"Nine of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c9.png"; break;
    case"Ten of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_c10.png"; break;
    case"Jack of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_cj.png"; break;
    case"Queen of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_cq.png"; break;
    case"King of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_ck.png"; break;
    case"Ace of Clubs":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_ca.png"; break;

    case"Two of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d2.png"; break;
    case"Three of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d3.png"; break;
    case"Four of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d4.png"; break;
    case"Five of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d5.png"; break;
    case"Six of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d6.png"; break;
    case"Seven of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d7.png"; break;
    case"Eight of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d8.png"; break;
    case"Nine of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d9.png"; break;
    case"Ten of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_d10.png"; break;
    case"Jack of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_dj.png"; break;
    case"Queen of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_dq.png"; break;
    case"King of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_dk.png"; break;
    case"Ace of Diamonds":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_da.png"; break;
  
    case"Two of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h2.png"; break;
    case"Three of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h3.png"; break;
    case"Four of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h4.png"; break;
    case"Five of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h5.png"; break;
    case"Six of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h6.png"; break;
    case"Seven of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h7.png"; break;
    case"Eight of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h8.png"; break;
    case"Nine of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h9.png"; break;
    case"Ten of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_h10.png"; break;
    case"Jack of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_hj.png"; break;
    case"Queen of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_hq.png"; break;
    case"King of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_hk.png"; break;
    case"Ace of Hearts":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_ha.png"; break;
  
    case"Two of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s2.png"; break;
    case"Three of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s3.png"; break;
    case"Four of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s4.png"; break;
    case"Five of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s5.png"; break;
    case"Six of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s6.png"; break;
    case"Seven of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s7.png"; break;
    case"Eight of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s8.png"; break;
    case"Nine of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s9.png"; break;
    case"Ten of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_s10.png"; break;
    case"Jack of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_sj.png"; break;
    case"Queen of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_sq.png"; break;
    case"King of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_sk.png"; break;
    case"Ace of Spades":
    document.getElementById("dealerCard" + dealerCount).src="images/cards/Set_B/small/card_b_sa.png"; break;
  }
  dealerCount++
}

// My and Dealer first 2 cards
myRandomizer(deck);
dealerRandomizer(deck);
myRandomizer(deck);
dealerRandomizer(deck);

myPointsElement.innerHTML = "MY POINTS: " + myPoints;
dealerPointsElement.innerHTML = "DEALER POINTS: ???";

if (myPoints === 21 && dealerPoints === 21){
  headerElement.innerHTML = "It's a draw!!!"
  dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
  document.getElementById("coverCard").src="";
  hitElement.style.display = "none";
  standElement.style.display = "none";
} else if (myPoints === 21){
  headerElement.innerHTML = "You got a blackjack! you win!!!"
  dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
  document.getElementById("coverCard").src="";
  hitElement.style.display = "none";
  standElement.style.display = "none";
} else if (dealerPoints === 21){
  headerElement.innerHTML = "dealer got a blackjack! you lose!!!";
  dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
  document.getElementById("coverCard").src="";
  hitElement.style.display = "none";
  standElement.style.display = "none";
} else if (myPoints === 22){
  myPoints = 12;
  myPointsElement.innerHTML = "MY POINTS: " + myPoints;
} else if (dealerPoints === 22){
  dealerPoints = 12;
  dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
}

function keepHitting(){
  // Dealer keep hitting when dealerPoints < myPoints
  while (dealerPoints <= myPoints){
    dealerRandomizer(deck)
    dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
    for (var i = 0 ; i < dealerCards.length ; i++){
      if (dealerPoints > 21 && dealerCards[i][0] === "A"){
        dealerCards.splice(i , 1);
        dealerPoints -= 10;
        dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
      }
    }
  }
  dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
  if (dealerPoints > 21){
    headerElement.innerHTML = "YOU WIN!!!"
    document.getElementById("coverCard").src="";
    hitElement.style.display = "none";
    standElement.style.display = "none";
  } else if (dealerPoints > myPoints){
    headerElement.innerHTML = "YOU LOSE!!!"
    document.getElementById("coverCard").src="";
    hitElement.style.display = "none";
    standElement.style.display = "none";
  }
}

function hit(){
  myRandomizer(deck);
  myPointsElement.innerHTML = "MY POINTS: " + myPoints;
  for (var i = 0 ; i < myCards.length ; i++){
    if (myPoints > 21 && myCards[i][0] === "A"){
      myCards.splice(i , 1);
      myPoints -= 10;
      myPointsElement.innerHTML = "MY POINTS: " + myPoints;
    }
  }
  if (myPoints > 21){
    headerElement.innerHTML = "YOU BUSTED! YOU LOSE!!!"
    dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
    document.getElementById("coverCard").src="";
    hitElement.style.display = "none";
    standElement.style.display = "none";
  } else if (myPoints === 21){
    headerElement.innerHTML = "you got a blackjack! YOU WIN!!!"
    dealerPointsElement.innerHTML = "DEALER POINTS: " + dealerPoints;
    document.getElementById("coverCard").src="";
    hitElement.style.display = "none";
    standElement.style.display = "none";
  }
}



function restart(){
  location.reload();
}