import React from 'react'
import {pulp_fiction} from '../config'
import Usernavbar from './Usernavbar'

export default function Principal() {
  return (
    <div className='Principal'>
        <Usernavbar />
        <h1>This is the Principal component</h1>
        <img src={pulp_fiction} alt='pulp fiction'></img>
    </div>
  )
}
