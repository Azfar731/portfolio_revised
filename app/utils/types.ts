type Article = {
  id?: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  url?: string;
  cover_image: string;
  base_images_path: string;
  social_image?: string;
  canonical_url?: string;
  tags: string[];
  body_markdown: string;
};

type ArticleInfo = {
  // id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  // language: string;
  cover_image: string;
  // social_image: string;
  canonical_url: string;
  // reading_time_minutes: number;
  tag_list: string[];
};

export type { Article, ArticleInfo };
