import { Injectable, effect, inject, signal } from '@angular/core';
import { Post } from '@models/post';
import { SelectResponse } from '@models/supabase';
import { POST_TABLE } from '@models/table';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  supabaseService: SupabaseService = inject(SupabaseService);
  posts = signal<SelectResponse<Post>>({ data: [], error: null });

  constructor() {
    effect(async () => {
      const result = await this.fetchPosts();
      this.posts.set(result);
    });
  }

  async fetchPosts() {
    return await this.supabaseService.select<Post>(POST_TABLE);
  }
}
