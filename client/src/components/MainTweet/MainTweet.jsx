import React, {useState} from 'react'
import TimelineTweets from '../TimelineTweets/TimelineTweets'

import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import axios from 'axios'

const MainTweet = () => {
  const [tweetText, setTweetText] = useState();
  const {currentUser} = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        userId: currentUser._id,
        description: tweetText,
      })
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  } 
  return (
    <div>
      {currentUser && (
        <p className='font-bold pl-2 my-2'>{currentUser.username}</p>
      )}
        
        <form className='border-b-2 pb-6'>
            <textarea onChange={e => setTweetText(e.target.value)} type="text" placeholder="What's Happening" maxLength={280} className='bg-slate-200 rounded-lg w-full p-2'></textarea>
            <button onClick={handleSubmit} className='bg-blue-500 text-white py-2 px-4 rounded-full ml-auto'>
                Tweet
            </button>
        </form>
        <TimelineTweets/>
    </div>
  )
}

export default MainTweet