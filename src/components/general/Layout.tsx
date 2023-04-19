// components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <SideMenu />
      <TopMenu />
      <div style={{
        position: 'absolute',
        left: '250px',
        top: '80px',
        padding: '10px',
        right: '0px',
        bottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        color: 'black'
      }}>{children}</div>
    </div>
  );
};

export default Layout;
