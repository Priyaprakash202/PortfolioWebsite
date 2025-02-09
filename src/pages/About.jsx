import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, intrest } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, it's Me <span className="blue-gradient_text font-semibold drop-shadow">Priyanka </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I am an MCA student at RV Institute of Technology and Management with a strong passion for web development. I have proficiency in HTML, CSS, JavaScript, and React, complemented by hands-on experience in developing projects. Additionally, I have a foundational understanding of Java and am eager to continually expand my skill set. With a keen interest in learning new programming languages and technologies, I am committed to building efficient, innovative, and impactful solutions.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Interests & Hobbies</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am focused on front-end development, exploring new technologies to build dynamic and engaging applications. My interest in cybersecurity drives me to learn about system security and ethical hacking. I enjoy solving complex problems with innovative solutions and staying updated on the latest trends in web development and cybersecurity. Strategic gaming also helps sharpen my critical thinking and problem-solving skills.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {intrest.map((intrestItem) => (
              <VerticalTimelineElement
                key={intrestItem.title}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: intrestItem.iconBg,
                }}
                iconStyle={{
                  background: intrestItem.iconBg,
                  borderBottom: '8px',
                  borderStyle: 'solid',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {intrestItem.title}
                  </h3>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {intrestItem.points.map((point, index) => (
                    <li key={`intrest-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here's a glimpse of my academic journey, where I have gained valuable knowledge and skills that have shaped my career.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {/* Education 1: 10th Grade */}
            <VerticalTimelineElement
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: "#4A90E2",
              }}
              iconStyle={{
                background: "#4A90E2",
                borderBottom: '8px',
                borderStyle: 'solid',
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  Completed 10th Grade with 80% - Venkateshwara High School
                </h3>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">Achieved 80% in 10th Grade</li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">Venkateshwara High School, Hassan</li>
              </ul>
            </VerticalTimelineElement>

            {/* Education 2: PUC */}
            <VerticalTimelineElement
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: "#4A90E2",
              }}
              iconStyle={{
                background: "#4A90E2",
                borderBottom: '8px',
                borderStyle: 'solid',
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  Completed PU (12th Grade) with 80% - Sujala PU College, Hassan
                </h3>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">Achieved 80% in Pre University.</li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">Sujala PU College, Hassan</li>
              </ul>
            </VerticalTimelineElement>

            {/* Education 3: Degree */}
            <VerticalTimelineElement
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: "#4A90E2",
              }}
              iconStyle={{
                background: "#4A90E2",
                borderBottom: '8px',
                borderStyle: 'solid',
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  Completed Degree with 9 CGPA - Science College, Hassan
                </h3>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">Achieved 9 CGPA in Degree Bachelor of Computer Applications.</li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">Science College, Hassan</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;  