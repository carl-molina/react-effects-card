import './App.css';
import DeckOfCardsGame from './DeckOfCardsGame';



/** App application
 *
 *  App -> DeckOfCardsGame -> Deck -> SingleCard({ deckId })
 */

function App() {
  return (
    <div className="App">
      <DeckOfCardsGame />
    </div>
  );
}

export default App;