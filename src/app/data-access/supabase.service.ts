import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SelectResponse } from '@models/supabase';
import { Table } from '@models/table';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const { SUPABASE_URL, SUPABASE_KEY } = environment;
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  get client() {
    return this.supabase;
  }

  async select<T>(table: Table, query = '*'): Promise<SelectResponse<T>> {
    const { data, error } = await this.client.from(table).select(query);

    return {
      data: (data as T[]) || [],
      error: error || null,
    };
  }
}
