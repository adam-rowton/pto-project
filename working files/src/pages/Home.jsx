import React from "react";

export default function Home(props) {
  return (
    <>
      <div>you're home</div>
      <button onClick={props.logOut}>log out</button>
    </>
  );
}
