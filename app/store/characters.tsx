import {create} from 'zustand';
import {People} from '../models';

interface CharacterStore {
  characters: People[];
  setCharacters: (data: any[]) => void;
}

export const useCharacterStore = create<CharacterStore>(set => ({
  characters: [],
  setCharacters: data => set({characters: data}),
}));
