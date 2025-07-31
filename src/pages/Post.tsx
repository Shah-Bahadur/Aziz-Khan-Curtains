import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { client } from '@/lib/sanityClient';
import { PortableText } from '@portabletext/react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const POST_QUERY = (slug: string) => `
{
  "post": *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    metaTitle,
    metaDescription,
    mainImage {
      asset->{url},
      alt
    },
    body,
    author->{name, image}
  },
  "allPosts": *[_type == "post"] | order(publishedAt asc) {
    slug,
    title
  }
}
`;

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [prevNext, setPrevNext] = useState<{ prev?: any; next?: any }>({});

  useEffect(() => {
    if (!slug) return;

    client.fetch(POST_QUERY(slug)).then((res) => {
      setPost(res.post);

      const currentIndex = res.allPosts.findIndex((p: any) => p.slug.current === slug);
      const prev = res.allPosts[currentIndex - 1];
      const next = res.allPosts[currentIndex + 1];

      setPrevNext({ prev, next });
    });
  }, [slug]);

  if (!post) return <div className="text-center py-20">Loading full blog post...</div>;

  return (
    
    <>
    <div className='mb-16'>
        <Header />
    </div>
    
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{post.metaTitle || post.title} | Aziz Khan Curtains</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.mainImage?.asset?.url} />
        <meta property="og:type" content="article" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-br from-champagne-500 to-champagne-800 bg-clip-text text-transparent">
          {post.title}
        </h1>

        <div className="text-sm text-gray-500 flex items-center justify-between mb-6">
          <span>Published at: {format(new Date(post.publishedAt), 'dd MMM yyyy')}</span>
          {post.author?.name && (
            <span className="flex items-center gap-2">
              {post.author.image && (
                <img src={post.author.image} alt={post.author.name} className="w-6 h-6 rounded-full" />
              )}
              <span>Author: {post.author.name}</span>
            </span>
          )}
        </div>

        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            className="w-full rounded-xl mb-8 shadow-lg object-cover aspect-video"
            loading="lazy"
          />
        )}

        <div className="prose prose-lg max-w-none text-gray-800">
          <PortableText value={post.body} />
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12 pt-8 border-t border-gray-200 text-champagne-800 font-semibold">
          {prevNext.prev ? (
            <Link to={`/blog/${prevNext.prev.slug.current}`} className="hover:underline">
              ← {prevNext.prev.title}
            </Link>
          ) : <div />}

          {prevNext.next && (
            <Link to={`/blog/${prevNext.next.slug.current}`} className="hover:underline">
              {prevNext.next.title} →
            </Link>
          )}
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default Post;
