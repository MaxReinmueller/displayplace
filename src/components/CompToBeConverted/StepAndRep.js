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
      <h2>Step And Repeat</h2>
      <Row>
        <Col>
          <p>Our Back Drop- Large Tube is portable and ideal for a background display for all types of indoor events such as trade show booths and photo shoots. These stands have telescoping 1.625" diameter poles that extend out, meaning they are adjustable to certain sizes. Stand also includes travel bag. Insert are constructed with pole pockets.</p>
        </Col>
      </Row>
      <h6>Features</h6>
      <ul>
        <li>Digitally printed at 720 x 720 resolution</li>
        <li>Dye sublimation</li>
        <li>Scratch resistant </li>
        <li>Washable</li>
        <li>Curl-free edge  </li>
        <li>Easy to install and replace graphic</li>
        <li>Indoor Display</li>
      </ul>
      </div>
      </div>
    );
  }
