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

  const [card, setCard] = useState({
    data: null,
    isLoading: false
  });

  console.log("state - card data:", card);

  /** When user clicks button, calls API to draw a card */
  async function drawCard() {
    setCard({
      data: null,
      isLoading: true,
    })
    const resp = await fetch(`BASE_URL_DRAW_CARD_API${deckId}/draw/?count=1`);
    const cardResult = await resp.json(); // this comes back as deck.data
    setCard({
      data: cardResult,
      isLoading: false,
    });
  }

  if (!card.isLoading) {
    return (
      <div>
        <button onClick={drawCard}>Draw a card</button>
        {card.data && <p>{`suit: ${card.cards[0].suit}, value: ${card.cards[0].value}`}</p>}

      </div>
    );
  } else {
    return <i>Loading...</i>; // function guard?
  }




}

// TODO: add back to code
{/* <Card cardValue={card.cards[0].value} cardSuit={card.cards[0].suit}/> */}

export default Deck;