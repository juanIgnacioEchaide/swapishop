import {create} from 'zustand';
import {People} from '../models';

interface CharacterStore {
  characters: People[];
  setCharacters: (data: People[]) => void;
  pagination: {
    totalPages: number;
    current: number;
    next: string | null;
    previous: string | null;
  };
  setPagination: (pagination: {
    totalPages: number;
    current: number;
    next: string | null;
    previous: string | null;
  }) => void;
}

export const useCharacterStore = create<CharacterStore>(set => ({
  characters: [],
  pagination: {
    totalPages: 0,
    current: 0,
    next: null,
    previous: null,
  },
  setCharacters: data => set({characters: data}),
  setPagination: pagination => set({pagination}),
}));
