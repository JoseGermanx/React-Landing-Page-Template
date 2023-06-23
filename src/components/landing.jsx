import React, {useEffect, useState} from 'react'
import { Header } from './header'
import { Features } from './features'
import JsonData from '../data/data.json'

export const Landing = (props) => {
    

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);

  }, []);
  return (
    <div>
        <Header data={landingPageData.Header} />
        <Features />
    </div>
  )
}
