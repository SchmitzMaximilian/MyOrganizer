import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';

const Montag = () => {
  const [tabmo,settabmo]=useState(false)
  return (
    <>
    <TitelTouch show={tabmo} setshow={settabmo} T={Beschriftungsdatenset.Wochentage.Mo} />
    {
      tabmo?
      <>
      <Kategoriehülle List={Beschriftungsdatenset.Kategoriename.Name} />
      </>
      :
      ""
    }
    </>
  )
}

export default Montag