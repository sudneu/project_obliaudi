import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavLink from './Navigation/NavLink';
// import Ebook from './UIComponents/Ebook/ebook';
import Books from './Components/Books/Books';
import SearchBar from './Components/SearchBar/SearchBar';

import AuthRoute  from './Components/Auth/routes';


import './App.css';

function App() {
  const [books] = React.useState([
    {
      name: "Seto Dharti",
      description: "What can be said about this book, its awesome",
      released_date: "2067/10/23",
      source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351965528l/16125800.jpg"
    },
    {
      name: "Mokinbird",
      description: "What can be said about this book, its too awesome",
      released_date: "1964/04/15",
      source: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
    }
  ]);
  

  return (
    <div>
      <Router>
        <div className="app-header">
          <NavLink />
        </div>
        <SearchBar />
        <div className="app-body">
          <Switch>
            <Route exact path="/home">
              <Books books={books}/>              
            </Route>
            <Route path="/members" >
                {"Members Area"}  
                <AuthRoute />           
            </Route>
            <Route path="/library">
              {"Inside Library"}
            </Route>
          </Switch>
        </div>
        <div className="app-footer">
          <div className="app-footer_copyright">
            <div>
              @Copyright info
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
