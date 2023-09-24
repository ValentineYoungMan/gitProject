'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

// type DaytimeContextType = 'light' | 'dark' | null;

// export interface CurrentContextType {
//   toggle: void;
//   mode: DaytimeContextType;
// }

// export const DaytimeContext = createContext<CurrentContextType>(null);

// export const DaytimeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [mode, setMode] = useState<DaytimeContextType>('dark');
//   const toggle = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

//   return (
//     <DaytimeContext.Provider value={{ toggle, mode }}>
//       <div className={`theme ${mode}`}>{children}</div>
//     </DaytimeContext.Provider>
//   );
// };

export type DaytimeContextType = 'light' | 'dark';

export interface CurrentContextType {
  mode: DaytimeContextType;
  toggle: Dispatch<SetStateAction<DaytimeContextType>>;
}

const defaultState = {
  mode: 'light',
  toggle: (mode: DaytimeContextType) => {},
} as CurrentContextType;

export const DaytimeContext = createContext(defaultState);

export const DaytimeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<DaytimeContextType>('light');
  const toggle = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <DaytimeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </DaytimeContext.Provider>
  );
};
