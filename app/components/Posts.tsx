import { Link } from '@remix-run/react'

type Props = {
  posts: [any]
  isDraft?: boolean
}

export default function Posts({ posts, isDraft = false }: Props) {
  let prefix = isDraft ? 'ideas' : 'blog'
  return (
    <ul className="text-gray-900 dark:text-slate-100 pb-12">
      {posts.map((post: any) => (
        <li key={post.slug}>
          <Link
            className="transition ease-in-out duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
            to={`/${prefix}/${post.slug}`}
          >
            {post.title}{' '}
            <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">
              &nbsp;{new Date(post.date).toLocaleDateString('en-US', {timeZone: 'UTC'})}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
