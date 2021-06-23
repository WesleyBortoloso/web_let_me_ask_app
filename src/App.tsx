import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContexts'
import { Room } from "./pages/Room";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
      </Switch>
    </AuthContextProvider>
    <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
