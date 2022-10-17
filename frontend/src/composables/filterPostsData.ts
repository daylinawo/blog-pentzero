export { filterPostsData };

function filterPostsData(posts: any) {
  return posts.map((post: any) => {
    const photoUrl = post.attributes.meta.thumbnail.data.attributes.formats
      .medium
      ? post.attributes.meta.thumbnail.data.attributes.formats.medium.url
      : post.attributes.meta.thumbnail.data.attributes.formats.small.url;

    return {
      id: post.id,
      createdAt: new Date(post.attributes.publishedAt),
      type: post.attributes.__typename,
      title: post.attributes.meta.title,
      photo_url: photoUrl,
      category: post.attributes.category.data.attributes.name,
    };
  });
}
