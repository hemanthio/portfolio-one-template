import React from 'react'
import ThemeToggle from '../sections/ThemeToggle'

import Motive from '../sections/Motive'
import About from '../sections/About'
import Cta from '../sections/Cta'

import ProcessList from '../sections/ProcessList'
import TechStack from '../sections/TechStack'
import Testimonial from '../sections/Testimonial'
import SocialLinks from '../sections/Socials'
import Services from '../sections/Services'
import ExpertiseCard from '../sections/Experience'
import FAQ from '../sections/Faq'
import Projects from '../sections/Projects'

const App = () => {
  return (
    <>
    <div className='grid grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1   mx-14 gap-2 my-11'>
  
<ExpertiseCard />
<Motive />
<About />
<Projects />
<Cta />
<Testimonial />
<ProcessList />
<Services  />
<TechStack />

<SocialLinks />


 <FAQ />

 <ThemeToggle />
</div>
    </>
    
  )
}

export default App

