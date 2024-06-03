import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';
const Samstag = () => {
  const [tabsa,settabsa]=useState(false)
  return (
    <>
    <TitelTouch show={tabsa} setshow={settabsa} T={Beschriftungsdatenset.Wochentage.Sa} />
    </>
  )
}

export default Samstag