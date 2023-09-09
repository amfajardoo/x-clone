import { Injectable, effect, signal } from '@angular/core';
import { Post } from '@models/post';
import { SelectResponse } from '@models/supabase';
import { POST_TABLE } from '@models/table';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends SupabaseService {
  posts = signal<SelectResponse<Post>>({ data: [], error: null });

  constructor() {
    super();
    effect(async () => {
      const result = await this.fetchPosts();
      this.posts.set(result);
    });
  }

  async fetchPosts() {
    return await this.select<Post>(POST_TABLE);
  }
}
