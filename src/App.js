import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { AddContact } from './components/AddContact';
import { EditContact } from './components/EditContact';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
        <ToastContainer/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={()=><Home/>}/>
          <Route path="/add">
            <AddContact/>
          </Route>
          <Route path="/edit/:id">
            <EditContact/>
          </Route>
        </Switch>

    </div>
  );
}

export default App;
