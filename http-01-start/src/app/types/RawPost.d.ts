import { PostModel } from '../services/post.model';

declare type RawPosts = { [key: string]: Omit<PostModel, 'id'> };
