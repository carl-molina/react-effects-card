import { useEffect } from "react";
import Deck from "./Deck";


const NEW_DECK_API = `https://deckofcardsapi.com/api/deck/new/`;
const DRAW_CARD_API = `https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2`;

/** DeckOfCardsGame: component to render game
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
      const deckResult = await resp.json();
      setDeck({
        data: deckResult,
        isLoading: false,
      });
    }
    fetchDeck();
  }, []);

  if (deck.isLoading) return <i>Loading...</i>;

  return (
      <div>
        <Deck deck={deck} />
        <b>{deck.data.name}</b>
      </div>
  );

}


export default DeckOfCardsGame;