import React from 'react';
import { Provider } from "react-redux";
import EventsPage from '../../C064/C064';
import configureStore from "../../source/redux/C057/C057";

const store = configureStore();

const Events = () => {
  return (
    <Provider store={store}>
      <EventsPage/>
    </Provider>
  );
};

export default Events;
