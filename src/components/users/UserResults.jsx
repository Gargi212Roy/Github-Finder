import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);
  // no dependency as we just want it to load when the components are run, when the coponent loads

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users`, {
      header: {
        Authorization: `token ${process.env.REACT_APP_MYGITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };
  //   to include a token we inlcude it in the authorization header
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
// the request is made from this component to get the list of users, and we want it when the component loads,we bring in useEffect
export default UserResults;
