import { PostgrestError } from '@supabase/supabase-js';

export interface SelectResponse<T> {
  data: T[];
  error: PostgrestError | null;
}
