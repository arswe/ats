import React from 'react'
import server from '../assets/server.png'
import Features from '../components/Features'
import Head from '../components/Head'
import SubHead from '../components/SubHead'

const Feature = () => {
  return (
    <>
      <Head title='Features' img={server} lead='Check out the features of Stack that separate us from the competition' />
      <SubHead />
      <Features />
    </>
  )
}

export default Feature
