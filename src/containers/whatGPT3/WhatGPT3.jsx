import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const mainFeatureText = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
const firstFeatureText = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ';
const secondFeatureText = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';
const thirdFeatureText = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text={mainFeatureText}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text={firstFeatureText}/>
        <Feature title="Knowledgebase" text={secondFeatureText}/>
        <Feature title="Education" text={thirdFeatureText}/>
      </div>
    </div>
  )
}

export default WhatGPT3