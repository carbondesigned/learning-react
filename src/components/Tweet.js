import React from "react"
import styled from "styled-components"

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id))
  }

  return (
    <TweetStyle className="tweet">
      <NameStyle className="name">{name}</NameStyle>
      <TweetMessageStyle className="tweet-message">
        {tweet.message}
      </TweetMessageStyle>
      <button className="btn btn-like">Like</button>
      <button className="btn btn-delete" onClick={deleteTweet}>
        Delete
      </button>
    </TweetStyle>
  )
}

const TweetStyle = styled.div`
  background-color: #18181d;
  border-radius: 1em;
  color: white;
  padding: 1em;
`

const NameStyle = styled.h2`
  font-family: "Poppins";
  font-size: 2em;
`
const TweetMessageStyle = styled.h3`
  font-family: "Poppins";
  font-weight: 400;
  overflow: hidden;
  word-wrap: normal;
`

export default Tweet
