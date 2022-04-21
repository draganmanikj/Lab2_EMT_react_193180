import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import './App.css';
import Books from '../Books/books';
import BookService from "../../repository/bookRepository";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  render(){
    return (
      <Router>
          <main>
              <div className="container">
                <Route> path={"/books"} exact render = {() => <Books books={this.state.books}/>}</Route>
              </div>
          </main>
      </Router>
    );
  }

  loadBooks = () => {
       BookService.fetchBooks()
           .then((data) =>{
              this.setState({
                books: data.data
              })
           });
  }

  componentDidMount() {
      this.loadBooks();
  }
}

export default App;
