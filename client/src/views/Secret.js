import React from 'react'

export default function Secret(props) {
  return (
    <div className='secret_page'>
        <p> I am a secret</p>
        <button onClick={()=>props.logout()}>Log Out</button>
    </div>
  )
}
