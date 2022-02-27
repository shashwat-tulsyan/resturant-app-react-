import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <>
    <section className='container headpart'>
    <div className='row'>
    <div className='col'>
    <div className='imagesec'>
     <img  className='headimg ' src='../img/head.jpg' alt='image' width="400" height="400"/>
    </div>
    </div>
    <div className='col text-center'>
        <div className='sales text-center'>
        <span className='sale'>30% Off</span>
        </div>
        <div className='food mt-5'>
            <h2>Enjoy Your Delicious Food</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptates, iste corporis tempore necessitatibus inventore ex?</p>
        <button type="button" class="btn btn-primary">Explore Now</button>
    </div>
    </div>
    </section>

    </>
  )
}

export default Header