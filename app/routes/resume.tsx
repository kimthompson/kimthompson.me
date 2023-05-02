type Props = {
  // posts: [any]
  // isDraft?: boolean
}

export default function(props: Props) {
  return (
    <article className="resume text-sm lg:text-md text-gray-900 dark:text-slate-100 mx-5 sm:mx-10">
      <section className="summary">
        <aside className="text-md lg:text-lg font-heading italic mb-5">A software engineer with eight years of experience creating applications for web, mobile, and desktop. Currently focused on Swift and SwiftUI, but with extensive React experience and a proven ability to pick up new tools quickly and safely. Places high value on organization and communication, empowering teammates to take on more responsibility and fostering a collaborative and supportive environment. At home vetting new technologies and creating proofs-of-concept.</aside>
      </section>
      <div className="flex flex-wrap">
        <div className="basis-full sm:basis-1/3 pr-0 sm:pr-4">
          <section className="key-skills">
            <h2 className="text-lg lg:text-xl font-heading italic mb-2 text-indigo-500">Key Skills</h2>
            {/* TODO: Some kind of fun visual? */}
          </section>
          <section className="certifications">
            <h2 className="text-lg lg:text-xl font-heading italic mt-3 mb-2 text-indigo-500">Certifications</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.credly.com/badges/187e49a2-07fe-4bcc-bb70-2a694e34c46e?source=linked_in_profile">
                  AWS Certified Cloud Practitioner<br />
                </a>
                <span className="font-heading italic text-xs lg:text-sm">Jan 2022</span>
              </li>
              <li>
                <a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://courses.edx.org/certificates/96be68ab66de4dbdbc51739000ab5dd0">
                  EdX WebAssembly Actors<br />
                </a>
                <span className="font-heading italic text-xs lg:text-sm">Jan 2022</span>
              </li>
            </ul>
          </section>
          <section className="education flex flex-col gap-2">
            <h2 className="text-lg lg:text-xl font-heading italic mt-3 mb-2 text-indigo-500">Education</h2>
            <ul className="italic">
              <li><h3 className="font-semibold">University of Minnesota &mdash; Twin Cities</h3></li>
              <li>B.A. Computer Science</li>
              <li>B.A. Journalism</li>
              <li className="font-heading italic text-xs lg:text-sm">May 2015</li>
            </ul>
          </section>
          <section className="contact">
            <h2 className="text-lg lg:text-xl font-heading italic mt-3 mb-2 text-indigo-500">Contact</h2>
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
          <h2 className="text-lg lg:text-xl font-heading italic my-2 text-indigo-500">Experience</h2>
          <div className="daugherty">
            <h3 className="font-heading italic text-md lg:text-lg flex justify-between">Daugherty Business Solutions, Minneapolis, MN <span>November 2020 - Present</span></h3>
            <h4 className="font-heading italic mb-2">Consultant & Software Engineer</h4>
            <ul>
              <li className="mb-4">
                <span className="font-semibold">Cox Communications</span> &mdash; Led a team of iOS engineers working on maintaining and building features for Cox App on iOS. Collaborated with product and the scrum master to figure out which features were coming down the pipeline and what should be worked on this sprint. Managed our build and release processes on the developer side, communicating to QA, Product, and DevOps exactly what was in each build and ensuring it all got out there on time with minimal bugs. Drove a lot of the effort to do as much new development as possible with SwiftUI, hopefully minimizing how many components would have to be overhauled when the new version of the app is ready to go.
                <ul className="list-disc ml-5 mt-1">
                  <li>Reworked the role of iOS technical lead to be less of a bottleneck, teaching team members how the application's build system worked and persuading the higher-ups to let the whole team in on pull requests and code review</li>
                  <li>Built the initial proof-of-concept for an interactive "Proactive & Preventative" system that composes views for the user based on live API data</li>
                  <li>Demonstrated the power of SwiftUI's animations to the lead architect, convincing him that our interactive SmartHelp system could visually simulate screen transitions with just a few lines of code</li>
                </ul>
                <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: Swift, SwiftUI, GraphQL, UIKit, Objective-C, AWS, Jenkins</span>
              </li>
              <li className="mb-4">
                <span className="font-semibold">Best Buy</span> &mdash; Led a team of engineers on a rebuild of the CMS used by store leaders to lay out BestBuy.com pages. Participated in agile ceremonies and design meetings, sometimes with the rest of the team, sometimes just with leaders. Mentored a team of mostly junior engineers on frontend development. Met with some of them regularly for career advice, pair programming, and Git detangling.
                <ul className="list-disc ml-5 mt-1">
                  <li>Improved the site's Google Lighthouse score from a 55 to 95 in production, primarily through route-based chunking and refactoring our imports to account for Webpack's optimizations. The initial page load on mobile shrunk from around three seconds to less than one</li>
                  <li>Defined the team's coding and testing standards and set up Jenkins pipelines to enforce those standards</li>
                  <li>Collaborated with the UX designer to revamp and expand our React Component Library, largely based on Material UI, and document it with Storybook</li>
                </ul>
                <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: React, Redux, JavaScript, HTML, CSS, Java, Spring, SQL, Jenkins</span>
              </li>
              <li className="mb-4">
                <span className="font-semibold">Express Scripts</span> &mdash; Worked on an internal application named PSCRF, which used to model and price out various health insurance plans. Implemented automated tests using Jest and JUnit and performed manual regression test planning and execution each sprint. Followed test-driven development for both backend (Java) and frontend features.
                <ul className="list-disc ml-5 mt-1">
                  <li>Advocated for better development practices, such as the adoption of Prettier and Git hooks, which would be more efficient and be better for team morale than "swarming" on every code review and arguing over every misplaced space</li>
                  <li>Served as the team's SME for troubleshooting and improving Webpack and NPM</li>
                </ul>
                <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: React, Redux, JavaScript, HTML, CSS, Java, Spring, SQL</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}
