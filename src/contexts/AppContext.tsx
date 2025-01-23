'use client'

import { useContext } from 'react';

import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextProps {
    UserAuthed: typeUserAuthed;
    setUserAuthed: Dispatch<SetStateAction<typeUserAuthed>>;
}
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function useAppContext() {
    return useContext(AppContext);
}