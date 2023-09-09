import { Injectable, inject } from '@angular/core';
import { STORAGE } from '@constants/app.constants';
import { SessionStored, SignOutResponse } from '@models/supabase';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { StorageService } from './storage.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends SupabaseService {
  storageService = inject(StorageService);

  constructor() {
    super();

    this.client.auth.onAuthStateChange(
      (_: AuthChangeEvent, session: Session | null) => {
        if (session) {
          const {
            access_token,
            expires_in,
            expires_at,
            provider_token,
            refresh_token,
            token_type,
            user: { email, id, user_metadata },
          } = session;

          const sessionToStore: SessionStored = {
            access_token,
            expires_at,
            expires_in,
            provider_token,
            refresh_token,
            token_type,
            user: {
              email,
              id,
              user_metadata,
            },
          };
          this.storageService.saveOnSessionStorage(
            STORAGE.SESSION,
            JSON.stringify(sessionToStore),
          );
        }
      },
    );
  }

  async signIn(): Promise<void> {
    await this.client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:4200/auth/callback',
      },
    });
  }

  async signOut(): Promise<SignOutResponse> {
    return await this.client.auth.signOut();
  }

  get session(): SessionStored | null {
    return this.storageService.getFromSessionStorage<SessionStored>(
      STORAGE.SESSION,
    );
  }
}
