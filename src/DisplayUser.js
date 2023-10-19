import React, { useState } from 'react';

function DisplayUser({ user }) {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
    <>
      <div>Firstname: {username.first}</div>
      <div>Lastname: {username.last}</div>
      <button onClick={() => setUsername(null)}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
