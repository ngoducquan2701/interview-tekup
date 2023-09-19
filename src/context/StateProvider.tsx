'use client';

import { createContext, useState } from 'react';

const StateContext = createContext({});

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const tabItems = ['Manpower Supply', 'Mobile App', 'Design'];
  const products = {
    0: [
      {
        avatar:
          'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
        title: 'Product designer',
      },
      {
        avatar:
          'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
        title: 'Software engineer',
      },
      {
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Full stack engineer',
      },
    ],
    1: [
      {
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Head of designers',
      },
      {
        avatar:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Product designer',
      },
      {
        avatar:
          'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        title: 'Product manager',
      },
    ],
    2: [
      {
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Head of designers',
      },
      {
        avatar:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Product designer',
      },
      {
        avatar:
          'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        title: 'Product manager',
      },
    ],
  };

  return (
    <StateContext.Provider
      value={{ selectedItem, setSelectedItem, tabItems, products }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
