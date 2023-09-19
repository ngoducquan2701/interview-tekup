'use client';
import * as React from 'react';

import { Tabs } from '@/components/Tab';
import useStateContext from '@/hooks/useStateContent';

export default function Home() {
  //@ts-ignore
  const { selectedItem, products } = useStateContext();

  return (
    <main className="container mx-auto min-h-screen">
      <Tabs />
      <div className="mt-5">
        <ul className="grid gap-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {products[selectedItem].map((item: any, idx: any) => (
            <li key={idx}>
              <div className="w-full h-60 sm:h-52 md:h-56">
                <img
                  src={item.avatar}
                  className="w-full h-full object-cover object-center shadow-md"
                  alt="avatar"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg text-gray-700 font-semibold pt-1 pb-4">
                  {item.title}
                </h4>
              </div>
              <p className="uppercase font-medium text-base pt-4">Click here</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
