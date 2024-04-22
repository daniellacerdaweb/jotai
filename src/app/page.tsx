'use client';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { CardBurguer } from './components/CardBurguer/CardBurguer';
const baseAtom = atom([] as any);

export default function Home() {
  const request = async () => fetch('http://localhost:3000/api/burger').then((res) => res.json());
  const [list, setList] = useAtom(baseAtom);

  const updateState = async () => {
    const data = await request();
    setList(data);
  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="max-w-[450px] bg-gray-300  w-full my-2 rounded-[30px] h-[700px] p-4  shadow-2xl overflow-auto">
        <div className="grid gap-6 grid-cols-2">
          {list?.hamburgers?.map((burger: any) => (
            <CardBurguer key={burger.id} {...burger} image={burger.slug} />
          ))}
        </div>
      </div>
    </main>
  );
}
