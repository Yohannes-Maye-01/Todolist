import React from "react";
import "./slider.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Slider() {
  return (
    <div className="slider">
      <Carousel className="w-[30%]">
        <CarouselContent>
          <CarouselItem>
            <h2>monday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>

          <CarouselItem>
            <h2>thuesday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>
          <CarouselItem>
            <h2>wensday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>
          <CarouselItem>
            <h2>Thursday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>
          <CarouselItem>
            <h2>friday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>
          <CarouselItem>
            <h2>saturday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>
          <CarouselItem>
            <h2>sunday</h2>
            <p>augest 12 2023</p>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
