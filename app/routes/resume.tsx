type Props = {
  // posts: [any]
  // isDraft?: boolean
}

export default function(props: Props) {
  return (
    <article className="resume flex flex-col text-gray-900 dark:text-slate-100 mx-5">
      <section className="summary">
        <aside className="text-lg font-heading italic mb-5 text-purple-500 dark:text-teal-500">A software engineer with eight years of experience creating applications for web, mobile, and desktop. Currently focused on Swift and SwiftUI, but with extensive React experience and a proven ability to pick up new tools quickly and safely. Places high value on organization and communication, empowering teammates to take on more responsibility and fostering a collaborative and supportive environment. At home vetting new technologies and creating proofs-of-concept.</aside>
      </section>
      <div className="flex gap-5">
        <div className="">
          <section className="key-skills">
            <h2 className="text-xl font-heading italic mb-2 text-indigo-500">Key Skills</h2>
            {/* TODO: Some kind of fun visual? */}
          </section>
          <section className="certifications">
            <h2 className="text-xl font-heading italic mt-3 mb-2 text-indigo-500">Certifications</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.credly.com/badges/187e49a2-07fe-4bcc-bb70-2a694e34c46e?source=linked_in_profile">
                  AWS Certified Cloud Practitioner<br />
                </a>
                <span className="font-heading italic text-sm">Jan 2022</span>
              </li>
              <li>
                <a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://courses.edx.org/certificates/96be68ab66de4dbdbc51739000ab5dd0">
                  EdX WebAssembly Actors<br />
                </a>
                <span className="font-heading italic text-sm">Jan 2022</span>
              </li>
            </ul>
          </section>
          <section className="education flex flex-col gap-2">
            <h2 className="text-xl font-heading italic mt-3 mb-2 text-indigo-500">Education</h2>
            <ul className="italic">
              <li><h3 className="font-semibold">University of Minnesota &mdash; Twin Cities</h3></li>
              <li>B.A. Computer Science</li>
              <li>B.A. Journalism</li>
              <li className="font-heading italic text-sm">May 2015</li>
            </ul>
          </section>
          <section className="contact">
            <h2 className="text-xl font-heading italic mt-3 mb-2 text-indigo-500">Contact</h2>
            <ul className="text-gray-900 dark:text-slate-100">
              <li className="font-semibold">
                135 Battle Creek Place<br />
                Saint Paul, MN 55119
              </li>
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="tel:952-215-7255">(952) 215-7255</a></li>
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="mailto:kim.thompson.dev@proton.me">kim.thompson.dev@proton.me</a></li>
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.linkedin.com/in/kimberlyannthompson/">linkedin.com/in/kimberlyannthompson</a></li>
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.kimthompson.me">kimthompson.me</a></li>
            </ul>
          </section>
        </div>
        <section className="experience">
          <h2 className="text-xl font-heading italic my-2 text-indigo-500">Experience</h2>
          <ul>
            <li>
              <h3>Daugherty Business Solutions, Minneapolis, MN <span>November 2020 - Present</span></h3>
              <h4>Consultant & Software Engineer</h4>
              <ul>
                <li><span>Cox Communications</span> &mdash; Started as an individual contrubutor, then became the technical lead for Cox App iOS. Worked with product and the scrum master to figure out what features are down the pipeline and what could and should be worked on this sprint. Managed our build and release processes on the developer side, communicating to QA, Product, and DevOps exactly what was in each build and ensuring it all got out there on time with minimal bugs.</li>
                <ul>
                  <li>Reworked the role of technical lead to be less of a bottleneck, teaching team members how the application's build system worked and persuading the higher-ups to let the whole team in on pull requests and code review</li>
                  <li>Trained the dev team in SwiftUI and encouraged them to use it wherever possible when developing new features</li>
                  <li>Created the initial proof-of-concept for an interactive "Proactive & Preventative" system that componses views for the user based on live API data</li>
                  <li>Demonstrated the power of SwiftUI's animation engine to the lead architect as compared to UIKit, convincing him that our interactive SmartHelp system could visually simulate screen transitions with just a few lines of code</li>
                </ul>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}
