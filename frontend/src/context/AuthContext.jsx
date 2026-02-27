import { createContext, useContext, useMemo, useState } from 'react';

const STORAGE_KEY = 'cm_auth';

const AuthContext = createContext(null);

const readStoredAuth = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { token: null, user: null };
    return JSON.parse(raw);
  } catch {
    return { token: null, user: null };
  }
};
