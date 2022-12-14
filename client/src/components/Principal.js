import React from 'react'
import {pulp_fiction,inglorious_basterds} from '../config'


export default function Principal() {
  return (
    <div className='Principal'>
        <img src={pulp_fiction} alt='pulp fiction'></img>
        <img src={inglorious_basterds} alt='inglorious basterds'></img>
    </div>
  )
}
