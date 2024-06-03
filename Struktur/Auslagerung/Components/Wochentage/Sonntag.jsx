import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';
const Sonntag = () => {
  const [tabso,settabso]=useState(false)
  return (
    <>
    <TitelTouch show={tabso} setshow={settabso} T={Beschriftungsdatenset.Wochentage.So} />
    </>
  )
}

export default Sonntag