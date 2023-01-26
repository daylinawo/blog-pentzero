import moment from 'moment';
import { BlogPostInfo } from '@/utils/types';

// function to transform strapi response object for
// post types into a more accessible format
export const mapToPostInfo = (postsCollection: any): BlogPostInfo[] => {
  const posts = Object.values(postsCollection)[0].data;

  return posts.map((post: any) => {
    const imagePath = post.attributes.thumbnail.data.attributes.formats.medium
      ? post.attributes.thumbnail.data.attributes.formats.medium.url
      : post.attributes.thumbnail.data.attributes.formats.small.url;

    return {
      id: post.id,
      publishedAt: new Date(post.attributes.publishedAt),
      type: post.attributes.__typename.toLowerCase(),
      title: post.attributes.title,
      slug: post.attributes.slug,
      imagePath: imagePath,
      category: post.attributes.category.data.attributes.name,
    };
  });
};

// function to shorten length of a string
export const truncateString = (str: string, maxLen: number) => {
  if (str.length > maxLen) {
    let subStr = str.substring(0, maxLen);
    return subStr + '...';
  } else {
    return str;
  }
};
