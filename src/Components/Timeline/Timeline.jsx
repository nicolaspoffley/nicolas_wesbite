import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";

export const Timeline = () => {

  const linecolor = '#23283e'

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-left">
          <span className="different">My Timeline</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"September 2022 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              Final year project - Artificial Intelligence applied to DNA Translocation
            </h3>
            <h4
              className="vertical-timeline-element-skills"
              data-aos="fade-center"
            >
              Python, TensorFlow, GitLab
            </h4>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-center"
            >
              University Of Birmingham
            </h4>

            <p data-aos="fade-center">
              I'm now in my final year of undergraduate studies, completing my dissertation. The project is in collaboration with the School of Chemistry, using traditional methods and AI models such as Transformers and Autoencoders to detect DNA translocation events in nanopores.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"September 2021 - August 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              Software Engineer - PwC, Simulaton Team
            </h3>
            <h4
              className="vertical-timeline-element-skills"
              data-aos="fade-center"
            >
              ReactJS, NodeJS, ExpressJS, Python, Git, Java, AnyLogic, Javascript, HTML, CSS, Docker, Kubernetes, Google Cloud Platform
            </h4>

            <p data-aos="fade-center">
              Created a full stack application for Simulating business processes, deployed on Google Kubernetes Engine. The architecture included Python and Java services.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"July 2021 - September 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              QA Engineer - PwC, Testing Team
            </h3>
            <h4
              className="vertical-timeline-element-skills"
              data-aos="fade-center"
            >
              Javascript, Selenium, Testcafe, Manual Testing
            </h4>

            <p data-aos="fade-center">
              Created unit tests for client applications. Retrieved live API data and formatted it in Google Sheets. Tested applications to ensure they meet WCAG accessibility standards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2020-2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              Year Two of Computer Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-center"
            >
              University Of Birmingham
            </h4>
            <p data-aos="fade-center">
              Achieved an average of 87.2%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2019-2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              Year One of Computer Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-center"
            >
              University Of Birmingham
            </h4>
            <p data-aos="fade-center">
              Achieved an average of 81.8%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"July 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              Completed Computer Science, Physics, and Mathematics studies
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-center"
            >
              <div style={{ padding: "3px" }}></div>
              Highlands Sixth Form - London
            </h4>
            <p data-aos="fade-center">
              Achieved A A A
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"June 2017 - August 2017"}
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-center"
            >
              Machine Learning Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-center"
            >
              Rippll - London
            </h4>
            <p data-aos="fade-center">
              In my first internship, I used the Azure Machine Learning in order to fill gaps in location data with real-world datasets. I also used SQLLite to clean and prepare the datasets.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
