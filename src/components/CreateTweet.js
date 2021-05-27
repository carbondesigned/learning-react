import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitTweetHandler = (e) => {
    e.preventDefault()
    setTweets([...tweets, { message: textInput, id: uuidv4() }])
    setTextInput("")
  }

  return (
    <form className="form" onSubmit={submitTweetHandler}>
      <textarea
        className="create-tweet"
        value={textInput}
        onChange={userInputHandler}
        placeholder="Insert Tweet Here..."
      ></textarea>
      <button className="btn btn-submit">Submit</button>
    </form>
  )
}

export default CreateTweet
