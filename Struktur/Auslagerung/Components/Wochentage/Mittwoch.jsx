import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';

const Mittwoch = () => {
  const [tabmi,settabmi]=useState(false)
  return (
    <>
    <TitelTouch show={tabmi} setshow={settabmi} T={Beschriftungsdatenset.Wochentage.Mi} />
    </>
  )
}

export default Mittwoch