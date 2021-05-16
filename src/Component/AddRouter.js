import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Component/Header';
import AddBook from '../Component/AddBook';
import BookList from '../Component/BookList';

const AddRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={BookList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default AddRouter;