import { useEffect, useState } from "react";
import Deck from "./Deck";

const NEW_DECK_API = `https://deckofcardsapi.com/api/deck/new/`;

/** DeckOfCardsGame: component to render game
 *
 *  Makes a call to deckofcards API to get a deck of cards.
 *
 *  Props: none
 *
 *  State: deck
 *
 *  App -> DeckOfCards -> Deck
 */

function DeckOfCardsGame() {
  const [deck, setDeck] = useState({
    data: null,
    isLoading: true
  });

  console.log('DeckOfCardsGame', deck);

  useEffect(function fetchNewDeckWhenMounted() {
    async function fetchDeck() {
      const resp = await fetch(NEW_DECK_API);
      const deckResult = await resp.json(); // this comes back as deck.data
      setDeck({
        data: deckResult,
        isLoading: false,
      });
    }
    fetchDeck();
  }, []);

  if (deck.isLoading) return <i>Loading...</i>;
  console.log("look here! deckId=", deck.data.deck_id);
  return (
      <div>
        <Deck deckId={deck.data.deck_id} />
        <b>{deck.data.name}</b>
      </div>
  );

}


export default DeckOfCardsGame;