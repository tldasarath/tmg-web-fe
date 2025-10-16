import BannerSection from '@/components/banner/Banner'
import { Navbar } from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
      <div className="min-h-screen w-full">
       <Navbar/>
        <BannerSection 
        title="About Us"
        breadcrumbs={[
          { name: "Home", path: "/home" },
          { name: "Service", path: "/service" },
          { name: "Service Details", path: "/service-details" }
        ]}/>    
          
    </div>
  )
}

export default page
