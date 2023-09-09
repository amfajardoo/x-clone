import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { STORAGE } from '@constants/app.constants';
import { StorageService } from '@data-access/services/storage.service';
import { SessionStored } from '@models/supabase';

export const authGuard: CanMatchFn = (route, segments) => {
  const storageService = inject(StorageService);
  const session: SessionStored | null =
    storageService.getFromSessionStorage<SessionStored>(STORAGE.SESSION);

  return !!session;
};
