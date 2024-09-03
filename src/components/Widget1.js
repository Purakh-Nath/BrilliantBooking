'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import questionmark from '../../public/questionmark.svg';
import sixSquares from '../../public/sixSquares.svg';
import recRight from '../../public/recRight.svg';

const tabDataGlobal = {
  'About Me': [
    `Hello! I’m Dave, your sales rep here from Salesforce. 
    I've been working at this awesome company for 3 years now.`,
    `I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
    Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
  ],
  'Experiences': [
  `The ancient mountain stood majestically, its peaks piercing the heavens. A cool breeze swept across the rugged landscape, carrying with it the scent of pine and earth.`,
  `An eagle soared high above, its sharp eyes scanning the valleys below. The sun dipped behind the horizon, casting a golden glow over the rolling hills and whispering forests.`,
],
'Recommended': [
  `A stone cottage sat quietly at the edge of a dense forest, its windows glowing with the soft light of a roaring fire inside. The scent of pine and fresh bread filled the air, offering a sense of comfort.`,
  `The calm river gently flowed under the starlit sky, its surface shimmering like a blanket of jewels. As the crickets began their nightly song, the world seemed to pause, wrapped in peaceful stillness.`,
]

};

export default function Widget1() {
  const [tabData, setTabData] = useState(tabDataGlobal);
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <article className="max-w-3xl relative py-4 flex justify-around customShadow bg-bgcolor1 rounded-lg">
      <Image className="absolute top-5 left-3" src={questionmark} alt="questionmark" />
      <Image src={sixSquares} alt="six squares" />
      <div className="w-10/12">
        <Navbar tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
        <br />
        <span className="m-auto text-base font-poppins">
          {tabData[activeTab].map((element, index) => (
            <p key={index}>
              {element}
              {index < tabData[activeTab].length - 1 && <><br /><br /></>}
            </p>
          ))}
        </span>
      </div>
      <Image src={recRight} alt="recRight" />
    </article>
  );
}
