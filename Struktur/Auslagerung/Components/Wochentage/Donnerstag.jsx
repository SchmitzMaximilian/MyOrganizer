import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';
const Donnerstag = () => {
  const [tabdo,settabdo]=useState(false)
  return (
    <>
    <TitelTouch show={tabdo} setshow={settabdo} T={Beschriftungsdatenset.Wochentage.Do} />
    </>
  )
}

export default Donnerstag