'use client'
import Layout from '@/Data/Layout'
import React from 'react'
import ElementLayoutCard from './ElementLayoutCard'
import ElementList from '@/Data/ElementList'
import { useDragElementLayoutContext } from '@/app/provider'

function ElementsSideBar() {
  const {dragElementLayout, setDragElementLayout} = useDragElementLayoutContext();
  const onDragLayoutStart=(layout)=>{
    setDragElementLayout({
      dragLayout:{
        ...layout, // レイアウトの基本情報をコピー
        id: Date.now() // 一意のIDを追加
      }
    });
  }

  return (
    <div className='p-5 h-screen shadow-sm'>
      <h2 className='font-bold text-lg'>Layouts</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
        {Layout.map((layout, index) => (
          <div key={index} draggable onDragStart={()=>{onDragLayoutStart(layout)}}>
            <ElementLayoutCard layout={layout}/>
          </div>
        ))}
      </div>

      <h2 className='font-bold text-lg mt-6'>Elements</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
        {ElementList.map((element, index) => (
          <ElementLayoutCard layout={element} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default ElementsSideBar