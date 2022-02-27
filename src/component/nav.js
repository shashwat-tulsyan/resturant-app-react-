import React from 'react'

const Nav = () =>
{

  return (
    <>
    <section className=''>
    <nav className="navbar fixed-top navbar-light bg-success mb-5">
    <div className="container">
    {/* <a className="navbar-brand">Navbar</a> */}
    <span><img src="../img/icon.png" alt="image" width="100" height="100"/></span>
    <h4 className='title text-white'>Green-foods</h4>
    <form className="d-flex">
      {/* <button className="btn btn-outline-dark" type="submit">Search</button> */}
    </form>
    </div>
   </nav>
    </section>
    </>
  )
}

export default Nav;