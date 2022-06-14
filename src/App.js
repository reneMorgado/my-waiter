import Products from './helpers/products-api-dm'
import Users from './helpers/users-api-dm'
import Favorites from './helpers/favorites-api-dm'
import Tickets from './helpers/tickets-api-dm'

function App() {

  const register = async () => {
    const body = {
      "status": '3'
  }
    const response = await Tickets.getAllActiveTickets()
    console.log(response)
  }

  return (
    <div className="App">
      Hola mundo
      <button onClick={register}>Accion</button>
    </div>
  );
}

export default App;
