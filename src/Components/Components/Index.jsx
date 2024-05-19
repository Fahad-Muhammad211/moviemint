import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeroSection from '../HeroSection/Index';
import CardLatestStories from '../CardLatestStories';
import RecentProjects from '../RecentProject/Index';
import Top5Project from '../Top5Projects/Index';
import Top15Project from '../Top15Movies/Index';
import UpcomingProjects from '../UpcommingProjects';
import ProductionHouse from '../ProductionHouse/Index';
import AskedQuestions from '../Asked Questions/Index';
import BecomePartner from '../Becomepartner/Index';
import Footer from '../Footer/Index';

const Components = () => {
 
  

  return (
    <div > 
    
<HeroSection/>
<CardLatestStories/>
<RecentProjects/>
<Top5Project/>
<Top15Project/>
<UpcomingProjects/>
<ProductionHouse/>
<AskedQuestions/>
<BecomePartner/>
<Footer/>

    </div>
  );
};

export default Components;
