import React from 'react'
import Navbar from './Components/Navbar/page'
import HeroSection from './Sections/hero'
import LogoCarousel from './Sections/logos'
import ServicesSection from './Sections/services'
import IntroductionSection from './Sections/introduction'
import PricingSection from './Sections/Blogs'
import FeaturesSection from './Sections/Features'
import TestimonialsSection from './Sections/Testimonial'
import HowItWorksSection from './Sections/HowItWorks'
import AboutUsSection from './Sections/AboutUs'
import TeamSection from './Sections/Team'
import FAQSection from './Sections/faq'
import CTASection from './Sections/cta'
import Footer from './Components/Navbar/Footer'
import WorkflowAutomationAndLLM from './Sections/Workflow'



export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LogoCarousel/>
      <ServicesSection/>
      <WorkflowAutomationAndLLM/>
      <IntroductionSection/>
      <PricingSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <HowItWorksSection/>
      <AboutUsSection/>
      <TeamSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    
    </div>
  )
}
