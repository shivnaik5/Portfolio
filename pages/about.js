import { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import about from '@/public/resources/about.json';
import icons from '@/public/resources/icons.json';

const AboutMe = ({ title, description, fadeClassName }) => (
  <div className={`aboutme ${fadeClassName()}`}>
    <div className={`header`}>{title}</div>
    <div className={`description`}>
      <p>{description}</p>
    </div>
  </div>
);

const SkillCardRow = ({ fadeClassName, items }) => (
  <Row className='row'>
    {items.map(icon => (
      <SkillCard icon={icon} colored={true} />
    ))}
  </Row>
);

const SkillCards = ({ fadeClassName }) => (
  <div className={`skills-icons ${fadeClassName()}`}>
    {icons.map(items => (
      <SkillCardRow fadeClassName={fadeClassName} items={items} />
    ))}
  </div>
);

const SkillCard = ({ icon, colored }) => {
  return (
      <Col xs={4} md={2}>
        <div className="skills">
          <i className={`icon devicon-${icon} ${colored ? 'colored' : ''}`} />
        </div>
      </Col>
  );
}

const About = () => {
  useEffect(() => {
    return () => window.__isAboutPageLoaded = true;
  }, []);

  const handleFadeClassName = () => (
    (typeof window !== 'undefined' && window.__isAboutPageLoaded) ? '' : 'fadein'
  );

  return  (
    <BaseLayout>
      <BasePage className='about-page'>
        <Row className='mt-5'>
          <Col md='12' className={`about-image ${handleFadeClassName()}`}>
            <img className='image bg' src='/images/about-page-bg2.png'/>
            {/* <img className='image fg' src='/images/about-page-fg-md.png'/> */}
          </Col>
          {/* <div className='about-image' /> */}
        </Row>
        <Row className='mt-5'>
          <Col md='12'>
            <div className='headline'>
              <h1 className={`title ${handleFadeClassName()}`}>{about.title}</h1>
              <p className={`subtitle ${handleFadeClassName()}`}>{about.subTitle}</p>
            </div>
          </Col>
          <Col md='12'>
            <div className={`details`}>
              {about.aboutMe.map(element => (
                <AboutMe
                  {...element}
                  fadeClassName={handleFadeClassName}
                />
              ))}
            </div>
          </Col>
        </Row>
        <SkillCards fadeClassName={handleFadeClassName} />
      </BasePage>
    </BaseLayout>
  );
};

export default About;
