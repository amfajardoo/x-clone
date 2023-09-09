import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveOnSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getFromSessionStorage<T>(key: string): T | null {
    const item: string | null = sessionStorage.getItem(key);

    if (item) {
      return JSON.parse(item) as T;
    }

    return null;
  }
}
