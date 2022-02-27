import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='footer mt-5'>
     <div className='container text-center foot-con'>
         <div className='row'>
             <div className='col-sm-3 p-3'>
             <span><img src="../img/icon.png" alt="image" width="200" height="200"/></span>
             </div>
             <div className='linktag col-sm-3 p-3'>
                 <ul className=''>
                 <h4>Main Links</h4>

                 <li>Order Tracking</li>
                <li>New Order</li>
                <li>Contact Us</li>
                <li>News&Blogs</li>
                 </ul>
             </div>
             <div className='linktag col-sm-3 p-3'>
             <ul className=''>
                <h4>Support</h4>
                <li>About Us</li>
                <li>Private-Policy</li>
                <li>Terms and conditions</li>
                 </ul>
             </div>
             <div className='linktag col-sm-3 p-3'>
             <ul className=''>
                <h4>Support</h4>
                <li><input type="email" className='m-2' placeholder='Enter your mail'/>
                <button type="button" class="btn btn-warning">Submit</button></li>
                <h4 className=''>Follow-Us</h4>
                 <div className='logoo'>
                 <i class="fa-brands fa-facebook p-2"></i>
                 <i class="fa-brands fa-instagram p-2"></i>
                 <i class="fa-brands fa-whatsapp p-2"></i>
                 <i class="fa-brands fa-youtube p-2"></i>
                 <i class="fa-brands fa-twitter p-2"></i>
                 </div>
                 </ul>
             </div>



         </div>

     </div>

    </section>

    </>
  )
}

export default Footer