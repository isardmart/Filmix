import React from 'react';
import Usernavbar from '../components/Usernavbar';

export default function Movies({logout}) {
  return (
    <div>
      <Usernavbar logout={logout} />
    </div>
  )
}
