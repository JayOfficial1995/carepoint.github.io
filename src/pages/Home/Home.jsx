import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ToggleSection from "../../components/ToggleSection/ToggleSection";

import {
  aboutData,
  counters,
  ourCreativeTab,
  ourTeamMembers,
  whyChooseUs,
  workBlogs,
} from "../../MockData/homePageData";

import {
  AboutUsStyle,
  CounterStyle,
  HomeStyle,
  WhyChooseUsStyle,
  HowWeWorkStyle,
  OurCreativeStyle,
  OurTeamStyle,
} from "./Home.style";

const OurTeam = () => {
  return (
    <OurTeamStyle>
      <SectionWrapper
        heading="Our Team"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error
      provident quidem ea illum officia, aliquam iure placeat natus explicabo?"
      >
        <article className="teams-container">
          {ourTeamMembers.map((ourTeamMember, index) => {
            return (
              <Card
                cardType="blogCard"
                {...ourTeamMember}
                cardClass="team-card"
              />
            );
          })}
        </article>
      </SectionWrapper>
    </OurTeamStyle>
  );
};

const OurCreative = () => {
  return (
    <OurCreativeStyle>
      <h1 className="title">Our Creative</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error
        provident quidem ea illum officia, aliquam iure placeat natus explicabo?
      </p>

      {ourCreativeTab.map((tabData, index) => {
        return <ToggleSection {...tabData} />;
      })}
    </OurCreativeStyle>
  );
};

const HowWeWork = () => {
  return (
    <HowWeWorkStyle>
      <section className="blogs-wrapper">
        <h1 className="title">How we Work</h1>
        <p className="section-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad saepe
          deleniti aspernatur quaerat corrupti id debitis tenetur odit eius.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ad saepe
          deleniti aspernatur quaerat corrupti id debitis tenetur odit eius. A
          ad saepe deleniti aspernatur quaerat corrupti id debitis tenetur odit
          eius.
        </p>
        <article className="blog-container">
          {workBlogs.slice(0, 3).map((workBlog) => {
            return (
              <Card cardType="blogCard" cardClass="blog-card" {...workBlog} />
            );
          })}
        </article>

        <article className="button-wrapper">
          <button className="read-more-btn">Read More</button>
        </article>
      </section>

      <OurCreative />
    </HowWeWorkStyle>
  );
};

const Counter = () => {
  return (
    <CounterStyle>
      <article className="counters-container">
        {counters.map((counter, index) => {
          return (
            <Card
              key={index}
              cardType="blogCard"
              cardClass="counter-card"
              {...counter}
            />
          );
        })}
      </article>
    </CounterStyle>
  );
};

const WhyChooseUs = () => {
  return (
    <WhyChooseUsStyle>
      <SectionWrapper
        heading="Why Choose Us?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error
        provident quidem ea  illum officia, aliquam iure placeat natus explicabo?"
      >
        <article className="section-container">
          {whyChooseUs.map((data, index) => {
            return (
              <Card
                cardType="verticalCard"
                cardClass="card-wrapper"
                {...data}
              />
            );
          })}
        </article>
      </SectionWrapper>
    </WhyChooseUsStyle>
  );
};

const AboutUs = () => {
  return (
    <AboutUsStyle>
      {aboutData.map((about) => {
        return <Card cardType="blogCard" {...about} cardClass="about-card" />;
      })}
    </AboutUsStyle>
  );
};

function Home() {
  return (
    <HomeStyle>
      <Carousel />
      <AboutUs />
      <WhyChooseUs />
      <Counter />
      <HowWeWork />
      <OurTeam />
    </HomeStyle>
  );
}

export default Home;
