import React from "react";
import { Route } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";

const UsersPage = () => {
  return (
    <>
      <UsersContainer></UsersContainer>
      <Route
        path="/users/:id"
        render={({ match }) => (
          <UserContainer id={match.params.id}></UserContainer>
        )}
      ></Route>
    </>
  );
};

export default UsersPage;
