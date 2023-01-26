interface BlogPostInfo {
  id: number;
  publishedAt: Date;
  type: string;
  title: string;
  slug: string;
  imagePath: string;
  category: string;
}

interface BlogDetailMeta {
  publishedAt: Date;
  title: string;
  desc: string;
  category: string;
}

enum PictureRatio {
  Fourbythree = '4/3',
  Sixteenbynine = '16/9',
}
export { BlogPostInfo, BlogDetailMeta, PictureRatio };
