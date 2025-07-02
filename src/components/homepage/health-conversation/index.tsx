import React from 'react'
import ConversationHeader from './converation-header'
import HealthCardWrapper from './HealthCardWrapper'

const HealthConversation = () => {
  return (
    <div className='mt-6 md:pb-10'>
        <ConversationHeader/>
        <HealthCardWrapper/>
    </div>
  )
}

export default HealthConversation