import React from 'react';
import { Provider } from "react-redux";
import EventsPage from '../../Redux2/Users';
import configureStore from "../../source/redux/stores/configureStore";

const store = configureStore();

const Events = () => {
  return (
    <Provider store={store}>
      <EventsPage/>
    </Provider>
  );
};

export default Events;
