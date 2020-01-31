import React, { useState } from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, Container, Row, Col
  } from 'reactstrap';

  const items = [
    // {
    //   src: 'https://github.com/MaxReinmueller/displayplace/blob/master/src/utils/images/stepAndRepeatBackdrop.jpg?raw=true',
    //   // altText: 'Slide 1',
    //   // caption: 'Slide 1'
    // },
    {
      src: 'https://github.com/MaxReinmueller/displayplace/blob/master/src/utils/images/stepAndRepeatBackdrop2.jpg?raw=true',
      // altText: 'Slide 2',
      // caption: 'Slide 2'
    },
    // {
    //   src: 'https://github.com/MaxReinmueller/displayplace/blob/master/src/utils/images/stepAndRepeatBackdrop3.jpg?raw=true',
    //   // altText: 'Slide 3',
    //   // caption: 'Slide 3'
    // }
  ];

export const StepAndRep = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
        <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <div>
      <h2>Event Tent (Full Color)</h2>
      <Row>
        <Col>
            <p>Just in time for summer, the 10 foot Event Tent is the next level in outdoor advertising. Achieve 360 degrees of branding with a custom full fabric dye sub canopy and hardware package. </p>
            <p>Canopy is printed and sewn Weather Resistant Tent Polyester. Print your brand message on each of the four peaks and valance panels. Our large format full color capabilities take artwork seam to seam unlike competitor tents that rely on small vinyl applications. </p>
            <p>Heavy duty hex shape 40 mm. aluminum hardware gives the tent strength in outdoor installations. Telescopic legs allow you to adjust the height, and the interior lattice expands the tent interior with the crank of a handle. Each leg has a foot plate ready to be staked to the ground. (Ropes, stakes, and standard carrying bag included with hardware).</p>
        </Col>
      </Row>
      <h6>Features</h6>
      <ul>
        <li>High resolution digitally printed at 720 x 720</li>
        <li>Dye-Sublimation Graphic</li>
        <li>Scratch resistant </li>
        <li>Weather Resistant (water proof coated fabric)</li>
      </ul>
      <h6>Material</h6>
        <ul>
            <li>6 oz. Tent Fabric (600x600 denier)</li>
        </ul>
      </div>
      </div>
    );
  }
