import {PostImage} from './PostImage';

export interface Post {
  author: string;
  title: string;
  content: string;
  date: string;
  image?: PostImage;
}
