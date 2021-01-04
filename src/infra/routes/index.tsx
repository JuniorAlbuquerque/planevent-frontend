import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import UserProvider from '../../data/hooks/account';
import EventProvider from '../../data/hooks/event';

import Login from '../../presentation/pages/Login';
import SignUp from '../../presentation/pages/SignUp';
import Home from '../../presentation/pages/Home';
import CreateEvent from '../../presentation/pages/CreateEvent';
import Search from '../../presentation/pages/Search';
import EditProfile from '../../presentation/pages/EditProfile';
import EditEvent from '../../presentation/pages/EditEvent';

const Routes: React.FC = () => (
  <Switch>
    <EventProvider>
      <Route path="/" exact component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/home" component={Home} isPrivate/>
      <Route path="/new" component={CreateEvent} isPrivate/>
      <Route path="/search" component={Search} isPrivate/>
      <Route path="/event/:id_event" component={EditEvent} isPrivate/>
      <UserProvider>
        <Route path="/profile/:id_user" component={EditProfile} isPrivate/>
      </UserProvider>
    </EventProvider>
  </Switch>
);

export default Routes;
