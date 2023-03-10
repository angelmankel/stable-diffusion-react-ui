import React from 'react'
import { useState, useEffect } from 'react'

function SSE({ progress, setProgress }) {
    

    useEffect(() => {
      const eventSource = new EventSource('/sse');
  
      // Listen for server-sent events
      eventSource.onmessage = (event) => {
        if (event.data === `{}`) {
          setProgress({});
          return;
        }
  
        const data = JSON.parse(event.data);
        setProgress(data);
      };
  
      return () => {
        eventSource.close();
      };
    }, []);
  
    // useEffect(() => {
    //   console.log(progress)
    // }, [progress])

    return (
        <div></div>
    )
}

export default SSE