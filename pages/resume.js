import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import resume from '@/public/content/resume.json';

const ResumeCard = ({ company, title, date, location, content, position }) => (
  <VerticalTimeline className='timeline'>
    <VerticalTimelineElement position={position || 'right'}>
      <div className='item'>
        <div className="card-text">
          <span className='company'>{company}</span>
          <span className='date'>{date}</span>
        </div>
        <div className="card-text">
          {title && <span className='title'>{title}</span>}
          <span className={title ? 'location' : 'location only'}>{location}</span>
        </div>
        <ul className='details'>
          {content.map((item, index) => (
            <li key={`${company} - ${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

const Resume = () => (
  <BaseLayout>
    <BasePage className='resume-page'>
      <Row className='mt-5'>
        <Col md='12' className={`resume-image`}>
          <img className='image bg' src='/images/resume/resume-page-bg-2.png'/>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md='12'>
          <div className='headline'>
            <h1 className={`title`}>The Road So Far...</h1>
            <p className={`subtitle`}>Here's a quick look at my work experience through the years</p>
          </div>
        </Col>
      </Row>
      {resume.details.map((item, index) => (
        <ResumeCard
          key={item.company}
          position={index % 2 === 0 ? 'left' : 'right'}
          { ...item }
        />
      ))}
    </BasePage>
  </BaseLayout>
);

export default Resume;
