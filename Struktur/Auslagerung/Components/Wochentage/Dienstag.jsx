import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';

const Dienstag = () => {
  const [tabdi,settabdi]=useState(false)
  return (
    <>
    <TitelTouch show={tabdi} setshow={settabdi} T={Beschriftungsdatenset.Wochentage.Di} />
    </>
  )
}

export default Dienstag