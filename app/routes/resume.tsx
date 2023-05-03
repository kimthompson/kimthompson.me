export default function() {
  return (
    <article className="resume text-sm lg:text-md text-gray-900 dark:text-slate-100 mx-5 sm:mx-10 font-light">
      <section className="summary">
        <aside className="text-md lg:text-lg font-heading italic mb-5">A software engineer with eight years of experience creating applications for web, mobile, and desktop. Currently focused on SwiftUI and React Native, but with an extensive background in React and a proven ability to pick up new tools quickly and safely. Places high value on organization and communication, empowering teammates and fostering a collaborative and supportive environment. Enjoys vetting new technologies and creating proofs-of-concept.</aside>
      </section>
      <div className="flex flex-wrap justify-start">
        <div className="basis-full sm:basis-1/3 pr-0 sm:pr-4">
          <section className="key-skills">
            <h2 className="text-lg lg:text-xl font-heading italic mb-2 text-indigo-500">Skills</h2>
            <ul>
              <li><span className="font-semibold">Mobile</span><br />Swift, SwiftUI, React Native, Objective-C, UIKit, Xamarin, C#</li>
              <li><span className="font-semibold">Frontend</span><br />JavaScript, TypeScript, React, Redux, HTML, CSS, TailwindCSS, Svelte, Vue</li>
              <li><span className="font-semibold">Backend</span><br />Node.js, Java Spring, Ruby on Rails, GraphQL, SQL, Go, Rust, Elixir</li>
              <li><span className="font-semibold">Competencies</span><br />Technical Communication, Team Leadership, Application Architecture, Continuous Integration, Agile Practices</li>
            </ul>
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
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://github.com/kimthompson">github.com/kimthompson</a></li>
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.kimthompson.me">kimthompson.me</a></li>
              <li><a className="text-pink-500 transition ease-in-out duration-300 hover:text-gray-900 dark:hover:text-slate-100" href="https://www.linkedin.com/in/kimberlyannthompson/">linkedin.com/in/kimberlyannthompson</a></li>
            </ul>
          </section>
        </div>
        <section className="experience basis-full sm:basis-2/3">
          <h2 className="text-lg lg:text-xl font-heading italic my-2 text-indigo-500">Experience</h2>
          <ul className="daugherty">
            <li>
              <h3 className="font-heading italic text-md lg:text-lg flex justify-between flex-wrap">Daugherty Business Solutions, Minneapolis, MN <span>November 2020 &mdash; Present</span></h3>
              <h4 className="font-heading italic mb-2">Consultant & Software Engineer</h4>
              <ul>
                <li className="mb-4">
                  <span className="font-semibold">Cox Communications</span> &mdash; Led a team of iOS engineers working on maintaining and building features for Cox App on iOS. Collaborated with stakeholders to figure out which features were coming down the pipeline and what should be worked on this sprint. Managed our build and release processes on the developer side, communicating to QA, Product, and DevOps exactly what was in each build and ensuring it all got out there on time with minimal bugs.
                  <ul className="list-disc ml-5 mt-1">
                    <li>Reworked the role of iOS technical lead to be less of a bottleneck, teaching team members how the application's build system worked and persuading the higher-ups to let the whole team in on pull requests and code reviews.</li>
                    <li>Built the initial proof-of-concept for Cox’s interactive "Proactive & Preventative" system. Demonstrated the power of SwiftUI animations to the lead architect, demonstrating that it was easy to simulate screen transitions.</li>
                    <li>Drove the effort to do as much new development as possible in SwiftUI, with the aim of minimizing the work of integrating the new “White Label” application.</li>
                  </ul>
                  <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: Swift, SwiftUI, GraphQL, UIKit, Objective-C, AWS, Jenkins</span>
                </li>
                <li className="mb-4">
                  <span className="font-semibold">Best Buy</span> &mdash; Mentored a team of full stack engineers on a rebuild of the CMS used by store leaders to lay out BestBuy.com pages. Participated in agile ceremonies and design meetings, sometimes with the rest of the team, sometimes just with leaders. Mentored a team of junior engineers, meeting with them regularly for career advice, pair programming, and Git detangling.
                  <ul className="list-disc ml-5 mt-1">
                    <li>Improved the Google Lighthouse score of Best Buy’s CMS for store managers from 55 to 95, primarily through route-based chunking and import refactoring. The initial page load on mobile shrunk from three seconds to less than one.</li>
                    <li>Defined the team's testing standards and set up Jenkins pipelines to enforce them.</li>
                    <li>Collaborated with the UX designer to revamp and expand our React Component Library, largely based on Material UI, and document it with Storybook.</li>
                  </ul>
                  <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: React, Redux, TypeScript, HTML, CSS, Java, Spring, SQL, Jenkins</span>
                </li>
                <li className="mb-4">
                  <span className="font-semibold">Express Scripts</span> &mdash; Contributed to an internal application named PSCRF, which is used to model and price out treatments and pharmaceuticals under various health insurance plans. Implemented automated tests using Jest and JUnit and performed manual regression test planning and execution each sprint.
                  <ul className="list-disc ml-5 mt-1">
                    <li>Advocated for better development practices, such as the adoption of Prettier and Git hooks, which would be more efficient and better for team morale than "swarming" on every code review and arguing over every misplaced space.</li>
                    <li>Served as the team's subject matter expert for troubleshooting and improving Webpack and NPM.</li>
                  </ul>
                  <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: React, Redux, TypeScript, HTML, CSS, Java, Spring, SQL</span>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <h3 className="font-heading italic text-md lg:text-lg flex justify-between flex-wrap">Minnesota Public Radio, Saint Paul, MN <span>Aug 2018 &mdash; Nov 2020</span></h3>
              <h4 className="font-heading italic mb-2">Web Developer</h4>
              <p>Created new websites and applications for American Public Media while maintaining the old ones.</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Proposed that we use Next.js for our rebuild of MPR News when we ran into trouble getting React 16.x to play nice with server-side rendering. Built a vertical slice of our website in the next 48 hours that got all stakeholders on board.</li>
                <li>Reworked APM Reports to pass all of Google’s AMP requirements, increasing traffic on their breaking stories threefold.</li>
                <li>Architected the first version of YourClassical for iOS, Android, and web built with React Native. Presented it to the whole technology division.</li>
                <li>Pushed our React component libraries onto NPM, as MPR is in part a public service.</li>
              </ul>
              <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: React, JavaScript, TypeScript, Node.js, Next.js, HTML, CSS, React Native, Ruby on Rails, GraphQL, PHP</span>
            </li>
            <li className="mb-4">
              <h3 className="font-heading italic text-md lg:text-lg flex justify-between flex-wrap">Design Center Inc., Saint Paul, MN <span>Feb 2017 &mdash; Aug 2018</span></h3>
              <h4 className="font-heading italic mb-2">Associate Software Developer</h4>
              <p>Developed applications for iOS, web, and Windows, ranging from large agile projects with a team to small solo projects.</p>
              <ul className="list-disc ml-5 mt-1">
                <li>Wrote the company’s frontend web standards.</li>
                <li>Taught the designers how to write solid enough HTML and CSS, as well as how to use VS Code. Stressed to the owner that frontend web development is truly software development and cannot simply be offloaded onto designers with no relevant experience.</li>
                <li>Learned to develop on new platforms in a couple of weeks multiple times, ranging from iOS to Windows to Xamarin.</li>
              </ul>
              <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: Objective-C, UIKit, Swift, C#, Xamarin, JavaScript, HTML, CSS</span>
            </li>
            <li className="mb-4">
              <h3 className="font-heading italic text-md lg:text-lg flex justify-between flex-wrap">Ameriprise Financial, Minneapolis, MN <span>Feb 2017 &mdash; Aug 2018</span></h3>
              <h4 className="font-heading italic mb-2">Technology Leadership Development Program Trainee</h4>
              <p>Rotated between three different positions over the course of 18 months as part of a competitive program for recent college graduates. Learned the basics of being both a business analyst and a developer, which solidified my desire to be a developer. </p>
              <ul className="list-disc ml-5 mt-1">
                <li>Redesigned the frontend for Ameriprise’s advisor compensation application, working within the limits of the old JSP, IE-only application that nobody could run anymore.</li>
                <li>Helped design, test, and polish a client-facing dashboard built with Backbone.js.</li>
                <li>Conducted working sessions to complete disaster recovery plans for all my department’s applications.</li>
              </ul>
              <span className="font-heading italic text-xs text-indigo-500 ml-5">Relevant tech: JavaScript, Backbone.js, HTML, CSS, Excel, PowerPoint</span>
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}
