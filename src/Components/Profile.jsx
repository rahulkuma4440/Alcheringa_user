import React from 'react'
import { useLocation } from 'react-router-dom';
import './Profile.css';

function Profile() {
  
  const location = useLocation();

  return (
    <div className='p1'>
      <h1 className='p2'>Welcome to your page {location.state.id}</h1>
      {/* <h1 className='p2'>Welcome to your page</h1> */}
      <p className='p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at labore esse perferendis, assumenda corrupti. Quos quas et reprehenderit, laudantium rem voluptatum, autem neque illum architecto nam similique quasi cupiditate assumenda suscipit nostrum adipisci totam itaque? Labore, sed fugiat similique dolores itaque libero tempore velit sapiente obcaecati nemo impedit inventore nostrum culpa explicabo aut commodi debitis, qui vero illum aliquam omnis accusamus vel nihil autem. Sit mollitia numquam pariatur veritatis nesciunt ad fugit ipsa et, dolores quis id aut velit earum itaque ab explicabo eius? Expedita autem dolores labore magnam fugiat esse neque maiores? Nulla quis nihil expedita perspiciatis! Facere.</p>
    </div>
  )
}

export default Profile
