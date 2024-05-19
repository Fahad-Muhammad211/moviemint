import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='bg-dark'>
<div className="container padding-footer">
    <div className="row">
    <div className="col-sm-6 d-flex flex-column align-items-center py-5">
  <img className='footer-logo' src="/images/logo.png" alt="" />
  <p className='text-white text-center my-4'>
    MovieMint liberates Filmmakers and fans through <br /> decentralized funding. Our Blockchain platform seamlessly <br /> connects Independent Creators and Passionate Supporters.
  </p>
</div>
<div className="col-sm-2">
<h5 className='clr-page  text-start'>Page</h5>
<ul className='text-white'>
    <li>Home</li>
    <li>About Us</li>
    <li>Movies</li>
</ul>
</div>
<div className="col-sm-2">
<h5 className='clr-page text-start'>Our social networks</h5>
<ul className='text-white '>
    <li>Instagram</li>
    <li>Facebook</li>
    <li>Movies</li>
</ul>
</div>
<div className="col-sm-2">
<h5 className='clr-page'>For reference</h5>
<ul className='text-white'>
    <li>Home</li>
    <li>About Us</li>
    <li>Movies</li>

</ul>
</div>
<div><h6 className='text-white text-center footer-end '>All Rights reserved for <a href="">moviemint.net</a> - 2024</h6></div>
    </div>
</div>

    </div>
  )
}

export default Footer