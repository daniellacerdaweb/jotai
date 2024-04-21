'use client';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
const baseAtom = atom([] as any);

export default function Home() {
  const request = async () => fetch('http://localhost:3000/api/burger').then((res) => res.json());
  const [value, setValue] = useAtom(baseAtom);

  const updateState = async () => {
    const data = await request();
    setValue(data);
  };

  useEffect(() => {
    updateState();
  }, []);

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">{value[0]?.name}</main>;
}
