import React from "react";
import CompareImg from "./CompareImg";

const images=[
  {
    logI:'/diBefAft/bath1clrd.jpg',
    clrdI:'/diBefAft/bath1log.jpg'
  },
  {
    logI:'/diBefAft/blueclrd.jpg',
    clrdI:'/diBefAft/bluelog.jpg'
  },{
    logI:'/diBefAft/can1clrd.jpg',
    clrdI:'/diBefAft/can1log.jpg'
  },{
    logI:'/diBefAft/can2clrd.jpg',
    clrdI:'/diBefAft/can2log.jpg'
  },{
    logI:'/diBefAft/canclrd.jpg',
    clrdI:'/diBefAft/canlog.jpg'
  },{
    logI:'/diBefAft/grl1clrd .jpg',
    clrdI:'/diBefAft/grl1log.jpg'
  },{
    logI:'/diBefAft/hillclrd.jpg',
    clrdI:'/diBefAft/hilllog.jpg'
  },{
    logI:'/diBefAft/leafclrd.jpg',
    clrdI:'/diBefAft/leaflog.jpg'
  },{
    logI:'/diBefAft/pal1clrd.jpg',
    clrdI:'/diBefAft/pal1log.jpg'
  },{
    logI:'/diBefAft/palaceclrd.jpg',
    clrdI:'/diBefAft/palacelog.jpg'
  },{
    logI:'/diBefAft/tempclrd.jpg',
    clrdI:'/diBefAft/templog.jpg'
  },{
    logI:'/diBefAft/um1clrd.jpg',
    clrdI:'/diBefAft/um1log.jpg'
  },
]

export default function ColorGrading() {
  return (
    <div style={{fontFamily:'MyCustomFont'}} className="w-full p-6 border-2 ">
      <h1 className="text-5xl mb-6">COLOR GRADING (DI) </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 content-between p-6">
        {
          images.map((img) => {
            return (<div className="bg-gray-600 rounded-md" style={{aspectRatio:'16/9'}}>
            <CompareImg logImg={img.logI} clrdImg={img.clrdI}/>
          </div>)
          }
          )
        }
      </div>
    </div>
  );
}