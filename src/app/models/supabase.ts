import { AuthError, PostgrestError, UserMetadata } from '@supabase/supabase-js';

export interface SelectResponse<T> {
  data: T[];
  error: PostgrestError | null;
}

export interface SignOutResponse {
  error: AuthError | null;
}

export interface SessionStored {
  access_token: string;
  expires_at?: number;
  expires_in: number;
  provider_token?: string | null;
  refresh_token: string;
  token_type: string;
  user: SessionUser;
}

export interface SessionUser {
  email?: string;
  id: string;
  user_metadata: UserMetadata;
}
