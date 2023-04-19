import * as ONE from './blog/testing-at-mpr.mdx'
import * as TWO from './blog/on-basecamp.mdx'
import * as THREE from './blog/digital-garden-and-update.mdx'
import * as FOUR from './blog/how-to-add-animations-to-remix-navigation.mdx'

import * as one from './ideas/thoughts-on-stray.mdx'
import * as two from './ideas/an-ode-to-victor-mono.mdx'
import * as three from './ideas/just-enough-uikit-to-be-dangerous.mdx'
import * as four from './ideas/a-rolling-list-of-swiftui-tips-and-tricks.mdx'
import * as five from './ideas/uialertcontrollers-in-swiftui.mdx'

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx??$/, ''),
    ...mod.attributes.meta,
  }
}

function sortPostsByDate(a: any, b: any) {
  let first: any = new Date(a.date)
  let second: any = new Date(b.date)
  return second - first
}

export const data = {
  posts: [postFromModule(ONE), postFromModule(TWO), postFromModule(THREE), postFromModule(FOUR)].sort(sortPostsByDate),
  drafts: [
    postFromModule(one),
    postFromModule(two),
    postFromModule(three),
    postFromModule(four),
    postFromModule(five),
  ].sort(sortPostsByDate),
}