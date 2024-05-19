import React from 'react'
import MyNavbar from '../../Navbar/Index'
import './About.css'
import ManagmentTeam from '../../ManagmentTeam/Index'
import Footer from '../../Footer/Index'

function About() {
  return (
    <div>
      <div className='bg-img'>
<MyNavbar/>
<div className="container">
  <div className="row">
    <div className="col-sm">
    <h1 className='h1-about'>About Us</h1>
<h2 className='h2-about'>HEADQUARTERS</h2>
<h3 className='h3-about'>970 Hagers Town-Cascade Maryland 21719, USA</h3>
<p className='p-about'>MovieMint is the first financing company built on the Blockchain and owned by fans. By tokenizing projects into NFTs, it allows movie enthusiasts to directly fund and profit from films as co-owners. Powered by Web3 technology allowing open participation and radical transparency, MovieMint represents tomorrow’s entertainment model today. One where creators and audiences collectively greenlight inspired ideas without restrictive intermediaries.</p>

    </div>
  </div>
</div>
</div>
<div>
  <ManagmentTeam/>
  <Footer/>
</div>
    </div>
  )
}

export default About