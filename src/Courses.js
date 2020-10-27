import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Course from './Course';

const Courses = () => (
  <Query
    query={gql`
      {
        usersByEntityId {
          email
          entityId
          status
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data.usersByEntityId);
      return data.usersByEntityId.map((currentCourse) => (
        <Course course={currentCourse} />
      ));
    }}
  </Query>
);
export default Courses;
