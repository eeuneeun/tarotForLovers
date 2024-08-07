"use client";

import React from 'react'

import { HeartIcon, SparklesIcon } from '@heroicons/react/16/solid'; 
import { TagIcon } from '@heroicons/react/24/outline';

import '@/app/_styles/main.css'



function home() {
  return (
    <>
        <section className='day-counter'>
          <h2>처음 만난 날 200일째</h2>
          <div className='flex-center gap-10'>
            은재냥이 
            <HeartIcon className="mini heart"/>
            봄무집사
          </div>
        </section>
        <section className='today-question'>
          <h2>
            <TagIcon className='mini'/> 
            오늘의 질문
          </h2>
          <article className='flex-center flex-col gap-10'>
              비오는 날은 주로 뭘 하며 시간을 보내나요?
            <button className='btn'>생각 나누기</button>
          </article>
        </section>
        <section className='today-tarot'>
          <h2>
            <SparklesIcon className='mini'/>
            오늘의 타로
          </h2>
          <article className='flex-center flex-col gap-10'>
             오늘은 어떤 행복한 일이 기다리고 있을까요?
            <button className='btn'>지금 바로 카드 확인</button>
          </article>
        </section>
    </>
  )
}

export default home
