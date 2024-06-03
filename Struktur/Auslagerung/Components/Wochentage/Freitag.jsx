import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';
const Freitag = () => {
  const [tabfr,settabfr]=useState(false)
  return (
    <>
    <TitelTouch show={tabfr} setshow={settabfr} T={Beschriftungsdatenset.Wochentage.Fr} />
    </>
  )
}

export default Freitag