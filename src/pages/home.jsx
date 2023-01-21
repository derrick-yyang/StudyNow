import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";


export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */

  return (
    <>
      <h1 className="title">Your Study Spot Helper</h1>
      <div className="homeButtons">
        <button>
          <Link href="/">Home</Link>
        </button>
        <button>
          <Link href="/about">Search</Link>
        </button>
        <button>
          <Link href="/login">Log In</Link>
        </button>
      </div>
      <img
        src="https://cdn.glitch.global/db0b1acf-1e9e-472c-a9ba-be6360e28058/Wonder%20Learners%20-%20Pop%20Quiz.png?v=1674326884832"
        className="illustration"
      />
    
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
     
    </>
  );
}
