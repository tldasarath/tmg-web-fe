import BannerSection from '@/components/banner/Banner'
import BusinessBanner from '@/components/banner/BusinessBanner'
import { Navbar } from '@/components/navbar/Navbar'
import AdvantageSection from '@/components/serviceDetails/AdvantageSection'
import AnimatedTabs from '@/components/serviceDetails/AnimatedTabs'
import BusinessSection from '@/components/serviceDetails/BusinessSection '
import BusinessSetupComponent from '@/components/serviceDetails/BusinessSetupComponent'
import FAQSection from '@/components/serviceDetails/FaqSection'
import ServiceDetails from '@/components/serviceDetails/ServiceDetails'
import React from 'react'

const page = () => {
  return (
      <div className="min-h-screen w-full">
       <Navbar/>
        <BannerSection 
        title="Service Details"
        breadcrumbs={[
          { name: "Home", path: "/home" },
          { name: "Service", path: "/service" },
          { name: "Service Details", path: "/service-details" }
        ]}/>    
        <AnimatedTabs/>
        {/* <ServiceDetails/> */}
          <BusinessBanner/>
          <BusinessSection/>
          <BusinessSetupComponent/>
          <AdvantageSection/>
          <FAQSection/>
    </div>
  )
}

export default page
