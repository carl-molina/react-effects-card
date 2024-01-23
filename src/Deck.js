import { useState } from "react";

// const DRAW_CARD_API = `https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2`;

const BASE_URL_DRAW_CARD_API = `https://deckofcardsapi.com/api/deck/`;



/** Deck: creates deck from API call
 *
 *  Props: deckId
 *
 *  Status: num cards left in deck
 *  - (Can be reset/reshuffle? Or kept higher up?)
 *
 *  DeckOfCardsGame -> Deck -> SingleCard
 */

function Deck({ deckId }) {
  console.log("deck renders, deckId prop:", deckId);
  const [card, setCard] = useState({})

  console.log("state - card data:", card);

  /** When user clicks button, calls API to draw a card */
  async function drawCard() {
    const resp = await fetch(`BASE_URL_DRAW_CARD_API${deckId}/draw/?count=1`);
    const cardResult = await resp.json(); // this comes back as deck.data
    console.log('This is cardResult', cardResult);
    setCard(cardResult);
  }

  console.log('This is card', card);

return (
  <div>
    <button onClick={drawCard}>Draw a card</button>
    {/* <p>{`suit: ${card.cards[0].suit}, value: ${card.cards[0].value}`}</p>} */}

  </div>
);
}

// TODO: add back to code
{/* <Card cardValue={card.cards[0].value} cardSuit={card.cards[0].suit}/> */}

export default Deck;