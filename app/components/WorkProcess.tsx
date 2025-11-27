"use client"
import { Building, ClipboardList, CheckCircle, Hammer, Layers, Icon, ArrowBigDown, ChevronDown } from "lucide-react";
import React, { useState } from 'react'
import { text } from "stream/consumers";

const WorkProcess = () => {

const [openId, setOpenId] = useState<number|null>(null);
const steps = [
  {
    id: 1,
    title: "Site Visit & Understanding",
    description: "We conduct a detailed site inspection to understand your vision, measurements, and requirements.",
    icon: Building,
  },
  {
    id: 2,
    title: "Material Finalization",
    description: "Choose from curated material options with transparent budgeting and timelines.",
    icon: Layers,
  },
  {
    id: 3,
    title: "Execution & Craftsmanship",
    description: "Our skilled carpenters, painters, and metal workers execute with precision and care.",
    icon: Hammer,
  },
  {
    id: 4,
    title: "Supervision & Updates",
    description: "Regular updates, site supervision, and quality checks ensure everything stays on track.",
    icon: ClipboardList,
  },
  {
    id: 5,
    title: "Handover & After-Service",
    description: "Once complete, we hand over a finely crafted space with optional maintenance support.",
    icon: CheckCircle,
  },
];


  return (
    <div>
      <section className="bg-cream mt-20 py-20">
        <div className="items-center text-5xl text-center font-serif">
            How We Work
        </div>
        <div className="w-50 h-0.5 mt-3 bg-gold flex mx-auto "></div>
        <div className="mt-16 mx-5 md:mx-10">
        {steps.map(({id, title, description, icon:Icon})=>(
            <div key={id} onClick={()=>setOpenId(openId === id? null:id)} className="w-full mt-3 bg-white/20 border border-gold/30 rounded-xl cursor-pointer p-6">
                <div className=" flex  gap-8 items-start">
                    <div className="shrink-0 h-16 w-16 border border-gold rounded-full flex text-center">
                    <Icon className="m-auto w-8 h-8"/>
                    </div>
                    <div className="flex-1 ">
                    <div className="h-16 flex items-center justify-between">
                      <div className="md:text-xl font-medium">
                        {title}
                    </div>
                    <button className="ml-auto flex h-10 w-10  items-center justify-center   transition-transform cursor-pointer"><ChevronDown className={`h-5 w-5 transition-transform ${openId===id?'rotate-180':''}`}/></button>
                    </div>
                <div className={` mx-3 text-dark/70 ${openId===id?'block pt-2':'hidden'}`}>{description}
                </div>
                </div>
                </div>
            </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default WorkProcess
