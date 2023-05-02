export type Project = {
  name: string
  link?: string
  technologies: Technology[]
}

export enum Technology {
  remix = 'remix',
  react = 'react',
  ios = 'ios',
  windows = 'windows',
  android = 'android',
  java = 'java',
  redux = 'redux',
  web = 'web',
  tailwind = 'tailwind',
  sass = 'sass',
  node = 'node',
  nextjs = 'nextjs',
  rails = 'rails',
  css = 'css',
  html = 'html',
  webpack = 'webpack',
  swift = 'swift',
  aws = 'aws',
  d3 = 'd3',
  npm = 'npm',
  objc = 'objc',
  csharp = 'csharp',
}

export const indieProjects: { name: string, link: string, technologies: Technology[] }[] = [
  {
    name: 'Spice Tower Entertainment',
    link: 'https://spicetower.games',
    technologies: [
      Technology.web,
      Technology.remix,
      Technology.react,
      Technology.tailwind,
    ],
  },
]

export const corpoProjects: { name: string, link?: string, technologies: Technology[] }[] = [
  {
    name: 'Cox App',
    link: 'https://apps.apple.com/us/app/cox-app/id415894489',
    technologies: [
      Technology.ios,
      Technology.swift,
      Technology.aws,
    ],
  },
  {
    name: 'Internal Application for Best Buy',
    technologies: [
      Technology.web,
      Technology.react,
      Technology.redux,
      Technology.java,
      Technology.css,
      Technology.aws,
    ],
  },
  {
    name: 'Internal Application for Express Scripts',
    technologies: [
      Technology.web,
      Technology.react,
      Technology.redux,
      Technology.java,
      Technology.css,
      Technology.webpack,
    ],
  },
  {
    name: 'Your Classical',
    link: 'https://apps.apple.com/us/app/yourclassical/id1564157090',
    technologies: [
      Technology.ios,
      Technology.android,
      Technology.web,
      Technology.react,
      Technology.css,
      Technology.webpack,
    ],
  },
  {
    name: 'APM Podcast Site Generator',
    link: 'https://www.slowdownshow.org/',
    technologies: [
      Technology.web,
      Technology.react,
      Technology.nextjs,
      Technology.node,
      Technology.sass,
      Technology.webpack,
    ],
  },
  {
    name: 'MPR News complete site rebuild',
    link: 'https://www.mprnews.org/',
    technologies: [
      Technology.web,
      Technology.react,
      Technology.nextjs,
      Technology.node,
      Technology.sass,
      Technology.webpack,
    ],
  },
  {
    name: 'MPR News 2020 Election Visualizations',
    link: 'https://www.mprnews.org/2020-11-03/',
    technologies: [
      Technology.web,
      Technology.d3,
      Technology.react,
      Technology.sass,
    ],
  },
  {
    name: 'React Component Libraries for MPR',
    link: 'https://www.npmjs.com/search?q=%40apmg',
    technologies: [
      Technology.npm,
      Technology.react,
      Technology.sass,
      Technology.webpack,
    ],
  },
  {
    name: 'Internal Application for Renewal by Anderson',
    technologies: [
      Technology.ios,
      Technology.objc,
    ],
  },
  {
    name: 'Internal Application for Cargill',
    technologies: [
      Technology.ios,
      Technology.windows,
      Technology.objc,
      Technology.csharp,
    ],
  },
  {
    name: 'Internal Application for Aramark',
    technologies: [
      Technology.windows,
      Technology.csharp,
    ],
  },
]
