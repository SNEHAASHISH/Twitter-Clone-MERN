import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Tweet from '../Tweet/Tweet';

const TimelineTweets = () => {
  const [timeLine, setTimeLine] = useState(null);
  const {currentUser} = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData  = async () => {
        try {
            const timelineTweets = await axios.get(`/tweets/timeline/${currentUser._id}`);
            setTimeLine(timelineTweets.data);
        } catch (err) {
            console.log("Error", err);
        }
    };
    fetchData();
  }, [currentUser._id]);

  //console.log("Timeline Tweets",timeLine);

  return (
    <div className="mt-6">
        {
            timeLine && 
            timeLine.map((tweet) => {
                return (
                    <div className="p2" key={tweet._id}>
                        <Tweet tweet={tweet} setData={setTimeLine}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TimelineTweets;