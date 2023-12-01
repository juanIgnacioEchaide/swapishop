import {create} from 'zustand';
import {People} from '../models';

interface CharacterStore {
  characters: People[];
  setCharacters: (data: People[]) => void;
  pagination: {
    totalPages: number;
    current: number | undefined;
    next: number | null;
    previous: number | null;
  };
  setPagination: (pagination: {
    totalPages: number;
    current: number | undefined;
    next: number | null;
    previous: number | null;
  }) => void;
}

export const useCharacterStore = create<CharacterStore>(set => ({
  characters: [],
  pagination: {
    totalPages: 0,
    current: 0,
    next: 0,
    previous: 0,
  },
  setCharacters: data => set({characters: data}),
  setPagination: pagination => set({pagination}),
}));
