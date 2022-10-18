export { filterPostsData };

function filterPostsData(posts: any) {
  return posts.map((post: any) => {
    const photoUrl = post.attributes.thumbnail.data.attributes.formats.medium
      ? post.attributes.thumbnail.data.attributes.formats.medium.url
      : post.attributes.thumbnail.data.attributes.formats.small.url;

    return {
      id: post.id,
      createdAt: new Date(post.attributes.publishedAt),
      type: post.attributes.__typename,
      title: post.attributes.title,
      slug: post.attributes.slug,
      photo_url: photoUrl,
      category: post.attributes.category.data.attributes.name,
    };
  });
}
