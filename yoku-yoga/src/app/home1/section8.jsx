"use client";
import { useState } from "react";
import LeftArrowSvgComponent from "../icons/left";
import RightArrowSvgComponent from "../icons/right";
import TESTIMONIALS from "../constants/testimonials";

export default function HomeSection8() {
  const [number, setNumber] = useState(0);
  const updatePosition = (param = number) => {
    const items = document.getElementById("homepage-section8");
    const item = document.getElementById("homepage-section8-item");
    const margin = param ? item.offsetWidth * param : 0;
    items.style.marginLeft = margin ? `${-margin - 40}px` : "0px";
  };

  const headerText = "Testimonials";
  const sectionText = "What people say about us";

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) upOne();
    if (isRightSwipe) downOne();
  };

  function upOne() {
    if (number + 1 >= 4) {
      setNumber(0);
      updatePosition(0);
    } else {
      setNumber(number + 1);
      updatePosition(number + 1);
    }
  }

  function downOne() {
    if (number - 1 <= -1) {
      // setNumber(4);
      // updatePosition(4);
    } else {
      setNumber(number - 1);
      updatePosition(number - 1);
    }
  }
  return (
    <section id="testimonials" className="slider-section">
      <div className="container">
        <div className="top">
          <h2 className="header">{headerText}</h2>
          <p>{sectionText}</p>
          <div className="arrows">
            <button onClick={downOne}>
              <LeftArrowSvgComponent />
            </button>
            <button onClick={upOne}>
              <RightArrowSvgComponent />
            </button>
          </div>
        </div>

        <div
          className="items"
          id="homepage-section8"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="item" id="homepage-section8-item">
            <p className="text">
              The Yoga Yajnavalkya is another early text on yoga that provides
              description of Yoga techniques and its benefits. Two of its
              Sanskrit palm-leaf manuscripts have been dated, one is from the
              early 10th-century CE and another more firmly
            </p>
            <div className="item-info">
              <img src="home1/section8-1.jpg" alt="" />
              <p className="name">Mildred Reed</p>
              <p className="customer">Customer</p>
            </div>
          </div>

          {TESTIMONIALS.map((item) => (
            <div className="item" key={item.name}>
              <p className="text">
                {item.text}
              </p>
              <div className="item-info">
                <img src={item.image} alt={item.name} />
                <p className="name">{ item.name}</p>
                <p className="customer">Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
