import React, { useState, useEffect } from "react";
import "./slider.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default function Slider({ days, setApi, handleDayChange }) {
  return (
    <div className="slider">
      <Carousel className="w-[30%]" setApi={setApi}>
        <CarouselContent>
          {days.map((item, index) => (
            <CarouselItem key={index}>
              {/* Update onClick to call handleDayChange with the correct day index */}
              <div onClick={() => handleDayChange(index + 1)}>
                <h2>{item.day}</h2>
                <p>{item.date}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}


