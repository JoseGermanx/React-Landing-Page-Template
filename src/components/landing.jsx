import React, {useEffect, useState} from 'react'
import { Header } from './header'
import JsonData from '../data/data.json'
import { Pricing } from './pricing'

export const Landing = () => {
    

  const [landingPageData, setLandingPageData] = useState({});
  const [planes, setPlanes] = useState([]);	
  useEffect(() => {
    setLandingPageData(JsonData);
    setPlanes(JsonData.planes);
  }, []);
  return (
    <div>
        <Header data={landingPageData.Header} />
        <Pricing data={planes} />
    </div>
  )
}
