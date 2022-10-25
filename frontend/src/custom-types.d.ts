interface PostDetails {
  id: number;
  createdAt: Date;
  type: string;
  title: string;
  slug: string;
  photo_url: string;
  category: string;
}

interface PostMeta {
  publishedAt: Date;
  title: string;
  desc: string;
  category: string;
}

export { PostDetails, PostMeta };
