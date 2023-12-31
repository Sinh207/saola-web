import {
  StyledSection,
  StyledContainer,
  StyledItem,
  StyledItemName,
  StyledItemDes,
  StyledItemWhat,
  StyledItemTimeLine,
  StyledItemVisitNow,
  StyledImage,
} from './styled';
import { Col, Row } from 'antd';
import { PROJECTS_LIST } from '@containers/Projects/constant';
import { useEffect, useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  const animateFrom = (elem, direction) => {
    direction = direction || 1;
    let x = 0;
    let y = direction * 100;
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';
    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    });
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useLayoutEffect(() => {
    gsap.utils.toArray('.gs_reveal').forEach((elem) => {
      hide(elem); // assure that the element is hidden when scrolled into view
      ScrollTrigger.create({
        trigger: elem,
        onEnter() { animateFrom(elem); },
        onEnterBack() { animateFrom(elem, -1); },
        onLeave() { hide(elem); }, // assure that the element is hidden when scrolled into view
      });
    });
  }, []);

  return (
    <StyledSection className="main-section">
      {
        PROJECTS_LIST.map((item, idx) => (
          <StyledContainer key={idx} className="container">
            <Row gutter={80}>
              <Col span={12} className="gs_reveal gs_reveal_fromLeft">
                <StyledItem>
                  <StyledItemName className="gs_reveal">{item.name}</StyledItemName>
                  <StyledItemDes className="gs_reveal">{item.des}</StyledItemDes>
                  <Row>
                    <Col span={12}>
                      <StyledItemWhat>
                        <span className="gs_reveal">What we do</span>
                        {
                          item.whats.map((val) => (
                            <span key={val} className="gs_reveal">{val}</span>
                          ))
                        }
                      </StyledItemWhat>
                    </Col>
                    <Col span={12}>
                      <StyledItemTimeLine>
                        <span className="gs_reveal">Timeline</span>
                        <span className="gs_reveal">{item.timeline}</span>
                      </StyledItemTimeLine>
                    </Col>
                  </Row>
                  <StyledItemVisitNow className="gs_reveal">
                    <a href={item.url} target="_blank" rel="noreferrer">VISIT NOW</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19.75 5.00049V15.0005C19.75 15.4145 19.414 15.7505 19 15.7505C18.586 15.7505 18.25 15.4145 18.25 15.0005V6.81152L6.53005 18.5315C6.38405 18.6775 6.19202 18.7515 6.00002 18.7515C5.80802 18.7515 5.61599 18.6785 5.46999 18.5315C5.17699 18.2385 5.17699 17.7635 5.46999 17.4705L17.19 5.75049H9.00002C8.58602 5.75049 8.25002 5.41449 8.25002 5.00049C8.25002 4.58649 8.58602 4.25049 9.00002 4.25049H19C19.098 4.25049 19.1951 4.27059 19.2871 4.30859C19.4701 4.38459 19.6161 4.5306 19.6931 4.7146C19.7301 4.8056 19.75 4.90249 19.75 5.00049Z" fill="white" />
                    </svg>
                  </StyledItemVisitNow>
                </StyledItem>
              </Col>
              <Col span={12} className="gs_reveal gs_reveal_fromRight">
                <StyledImage src={item.image} alt={item.name} width={580} height={435} />
              </Col>
            </Row>
          </StyledContainer>
        ))
      }

    </StyledSection>
  );
};

export default MainSection;
