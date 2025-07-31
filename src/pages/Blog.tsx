import React, { useEffect, useState } from 'react'
import { client } from '@/lib/sanityClient'
import { format } from 'date-fns'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
type Post = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  metaDescription: string
  mainImage: {
    asset: {
      url: string
    }
    alt?: string
  }
}

const BLOG_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    metaDescription,
    mainImage {
      asset->{url},
      alt
    }
  }
`

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(BLOG_QUERY).then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    
    <main className="bg-white min-h-screen px-6 py-16">
      <Header />
      
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 text-champagne-700">
        Aziz Khan Blog
      </h1>

      {loading ? (
        <p className="text-center">Loading blogs...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post._id}
              href={`/blog/${post.slug}`}
              className="block shadow hover:shadow-xl transition rounded-xl overflow-hidden"
            >
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-500">
                  {format(new Date(post.publishedAt), 'dd MMM yyyy')}
                </p>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.metaDescription}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
      <Contact />
      <Footer />
    </main>
  )
}

export default Blog
