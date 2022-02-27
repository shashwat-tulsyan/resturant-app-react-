import React from 'react'

const service=[
{
title:"Discount Voucher",
image:"./img/discount.png",
content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
},
{
title:"Fresh Healthy Food",
image:"./img/fresh.png",
content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
},
{
title:"Fast Home Delivery",
image:"./img/delivery.png",
content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
}];


const Service = () => {
  return (
    <>
    <section className='text-center m-auto serv container mt-5'>

    <div class="row">

   {service.map((cur)=>{
       return(<>
       <div class="col-sm-4">
    <div class="card1 mt-5">
      <div class="card-body text-center">
        <img class="" src={cur.image}/>
        <h4 class="">{cur.title}</h4>
        <p className=''>{cur.content}</p>
      </div>
    </div>
  </div>
       </>)
   })}
   </div> 
   <hr className='hr'/>
</section>

    </>
  )
}

export default Service;