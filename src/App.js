import React, { useState } from "react"
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"

function App() {
  // JS
  const [name, setName] = useState("Dylan")
  const message = "Hello world"

  // State
  const [textInput, setTextInput] = useState("")
  const [tweets, setTweets] = useState([])

  return (
    <div className="title">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  )
}

export default App

//Simple example of useState

// const [name, setName] = useState("Dylan")

// const sayHelloHandler = () => {
//   setName("Bob")
// }
