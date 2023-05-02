type Props = {
  // posts: [any]
  // isDraft?: boolean
}

export default function(props: Props) {
  return (
    <article className="resume text-sm w-[100vw]text-gray-900 dark:text-slate-100 mx-5 sm:mx-10">
      <section className="summary">
        <aside className="text-md font-heading italic mb-5">A software engineer with eight years of experience creating applications for web, mobile, and desktop. Currently focused on Swift and SwiftUI, but with extensive React experience and a proven ability to pick up new tools quickly and safely. Places high value on organization and communication, empowering teammates to take on more responsibility and fostering a collaborative and supportive environment. At home vetting new technologies and creating proofs-of-concept.</aside>
      </section>
      <div className="flex flex-wrap">
        <div className="basis-full sm:basis-1/3 pr-0 sm:pr-4">
          <section className="key-skills">
            <h2 className="text-lg font-heading italic mb-2 text-indigo-500">Key Skills</h2>
            {/* TODO: Some kind of fun visual? */}
          </section>
          <section className="certifications">
            <h2 className="text-lg font-heading italic mt-3 mb-2 text-indigo-500">Certifications</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.credly.com/badges/187e49a2-07fe-4bcc-bb70-2a694e34c46e?source=linked_in_profile">
                  AWS Certified Cloud Practitioner<br />
                </a>
                <span className="font-heading italic text-xs">Jan 2022</span>
              </li>
              <li>
                <a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://courses.edx.org/certificates/96be68ab66de4dbdbc51739000ab5dd0">
                  EdX WebAssembly Actors<br />
                </a>
                <span className="font-heading italic text-xs">Jan 2022</span>
              </li>
            </ul>
          </section>
          <section className="education flex flex-col gap-2">
            <h2 className="text-lg font-heading italic mt-3 mb-2 text-indigo-500">Education</h2>
            <ul className="italic">
              <li><h3 className="font-semibold">University of Minnesota &mdash; Twin Cities</h3></li>
              <li>B.A. Computer Science</li>
              <li>B.A. Journalism</li>
              <li className="font-heading italic text-xs">May 2015</li>
            </ul>
          </section>
          <section className="contact">
            <h2 className="text-lg font-heading italic mt-3 mb-2 text-indigo-500">Contact</h2>
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
        <section className="experience basis-full sm:basis-2/3">
          <h2 className="text-lg font-heading italic my-2 text-indigo-500">Experience</h2>
          <div className="daugherty">
            <h3 className="font-heading italic text-md flex justify-between">Daugherty Business Solutions, Minneapolis, MN <span>November 2020 - Present</span></h3>
            <h4 className="font-heading italic mb-2">Consultant & Software Engineer</h4>
            <ul>
              <li>
                <span className="font-semibold">Cox Communications</span> &mdash; Led a team of iOS engineers working on maintaining and building features for Cox App on iOS. Collaborated with product and the scrum master to figure out which features were coming down the pipeline and what should be worked on this sprint. Managed our build and release processes on the developer side, communicating to QA, Product, and DevOps exactly what was in each build and ensuring it all got out there on time with minimal bugs. Drove a lot of the effort to do as much new development as possible with SwiftUI, hopefully minimizing how many components would have to be overhauled when the new version of the app is ready to go.
                <ul className="list-disc ml-5 mt-1">
                  <li>Reworked the role of iOS technical lead to be less of a bottleneck, teaching team members how the application's build system worked and persuading the higher-ups to let the whole team in on pull requests and code review</li>
                  <li>Built the initial proof-of-concept for an interactive "Proactive & Preventative" system that composes views for the user based on live API data</li>
                  <li>Demonstrated the power of SwiftUI's animations to the lead architect, convincing him that our interactive SmartHelp system could visually simulate screen transitions with just a few lines of code</li>
                </ul>
                <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: Swift, SwiftUI, GraphQL, UIKit, Objective-C, AWS</span>
              </li>
              <li>
                <span className="font-semibold">Cox Communications</span> &mdash; Led a team of iOS engineers working on maintaining and building features for Cox App on iOS. Collaborated with product and the scrum master to figure out which features were coming down the pipeline and what should be worked on this sprint. Managed our build and release processes on the developer side, communicating to QA, Product, and DevOps exactly what was in each build and ensuring it all got out there on time with minimal bugs. Drove a lot of the effort to do as much new development as possible with SwiftUI, hopefully minimizing how many components would have to be overhauled when the new version of the app is ready to go.
                <ul className="list-disc ml-5 mt-1">
                  <li>Reworked the role of iOS technical lead to be less of a bottleneck, teaching team members how the application's build system worked and persuading the higher-ups to let the whole team in on pull requests and code review</li>
                  <li>Built the initial proof-of-concept for an interactive "Proactive & Preventative" system that composes views for the user based on live API data</li>
                  <li>Demonstrated the power of SwiftUI's animations to the lead architect, convincing him that our interactive SmartHelp system could visually simulate screen transitions with just a few lines of code</li>
                </ul>
                <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: Swift, SwiftUI, GraphQL, UIKit, Objective-C, AWS</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}
