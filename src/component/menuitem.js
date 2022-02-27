import React from 'react'

const Menuitem = () => {
  return (
    <>
      <section className='container apnamenu mt-5'>
       <div className='content'>
        <h3 className='ourmenu '>Our Menu</h3>
       </div>

        <div className='menu'>
            <div className='grid'>
                <div className='item1'>
                 <img src='../img/grid_image1.png' className='gridimage' alt='image' />
                </div>
                <div className='item2'>
                 <img src='../img/grid_image2.png' className='gridimage' alt='image' />
                </div>
                <div className='item3'>
                 <img src='../img/grid_image3.png' className='gridimage' alt='image' />
                </div>
                <div className='item4'>
                 <img src='../img/grid_image4.png' className='gridimage' alt='image' />
                </div>
                <div className='item5'>
                 <img src='../img/grid_image5.png' className='gridimage' alt='image' />
                </div>
                <div className='item6'>
                 <img src='../img/grid_image6.png' className='gridimage' alt='image' />
                </div>
                <div className='item7'>
                 <img src='../img/grid_image7.png' className='gridimage' alt='image' />
                </div>

            </div>
        </div> 
        <hr className='hr'/>
</section>
    </>
  )
}

export default Menuitem;