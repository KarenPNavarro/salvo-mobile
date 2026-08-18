import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type DeviceState = {
  name: string;
  size: string;
  color: string;
  battery: number;
  daysLeft: number;
  connected: boolean;
  signalDbm: number;
  lastSyncMinutesAgo: number;
  firmwareVersion: string;
  firmwareUpToDate: boolean;
  paired: boolean;
};

type DeviceContextValue = DeviceState & {
  refreshSync: () => void;
};

const DeviceContext = createContext<DeviceContextValue | null>(null);

export function DeviceProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DeviceState>({
    name: 'Salvō Ring',
    size: '8',
    color: 'Onyx',
    battery: 50,
    daysLeft: 4,
    connected: true,
    signalDbm: -42,
    lastSyncMinutesAgo: 2,
    firmwareVersion: 'v2.1',
    firmwareUpToDate: true,
    paired: true,
  });

  const refreshSync = () => setState((prev) => ({ ...prev, lastSyncMinutesAgo: 0 }));

  const value = useMemo(() => ({ ...state, refreshSync }), [state]);

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}

export function useDevice() {
  const ctx = useContext(DeviceContext);
  if (!ctx) throw new Error('useDevice must be used within a DeviceProvider');
  return ctx;
}
