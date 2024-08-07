"use client"
import * as React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Bars4Icon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <header className="app-header">
       
        <h1>
            <Link href='/'>
                <HomeIcon/>
            </Link>
        </h1>
        <ul className='flex-between'>
            <li>
                <button className='gnb-btn'>
                    <Bars4Icon />
                </button>
            </li>
            <li>
                <button>
                    <UserCircleIcon />  
                </button>  
            </li>
        </ul>
    </header>
  );
}
