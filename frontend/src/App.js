import React from "react";

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setUsers(result.users);
      });
  }, []);

  const renderUsers = () => {
    if (!users) {
      return <></>;
    }

    return users.map((user) => {
      return (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.status}</h2>
        </div>
      );
    });
  };

  return (
    <div className="App">
      {renderUsers()}
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
