import React, {useEffect, useState} from 'react'
import JsonData from '../data/data.json'
import { Pricing } from './pricing'
import { HeaderLanding } from './headerLanding'
import { Footer } from './footer'

export const Landing = () => {
    

  const [landingPageData, setLandingPageData] = useState({});
  const [planes, setPlanes] = useState([]);	
  useEffect(() => {
    setLandingPageData(JsonData);
    setPlanes(JsonData.planes);
  }, []);
  return (
    <div>
        <HeaderLanding data={landingPageData.Header} />
        <Pricing data={planes} />
        <Footer />
    </div>
  )
}
