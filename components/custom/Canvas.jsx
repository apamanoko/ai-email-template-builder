'use client'
import { useScreenSizeContext, useDragElementLayoutContext, useEmailTemplateContext } from '@/app/provider'
import React, { useState } from 'react'
import ColumnLayout from '../LayoutElements/ColumnLayout';

function Canvas() {
  const { screenSize, serScreenSize } = useScreenSizeContext();
  const {dragElementLayout, setDragElementLayout} = useDragElementLayoutContext();
  const {emailTemplate, setEmailTemplate} = useEmailTemplateContext();
  const [dragOver, setDragOver] = useState(false);

  const onDragOver=(e)=>{
    e.preventDefault();
    setDragOver(true);
  }
  const onDrop=()=>{
    setDragOver(false);
    if(dragElementLayout?.dragLayout){
      setEmailTemplate(prev=>[...prev, dragElementLayout?.dragLayout]);
    }
  } 

  const getLayoutComponent=(layout)=>{
    if(layout?.type==='column'){
      return <ColumnLayout layout={layout} />
    }
  }

  return (
    <div className='mt-20 flex justify-center'>
      <div className={`bg-white p-6 w-full 
        ${screenSize=='desktop'?'max-w-2xl':'max-w-md'}
        ${dragOver && 'bg-green-100 p-4'}
      `}
        onDragOver={onDragOver}
        onDrop={onDrop} 
      >
        {emailTemplate.length>0 ? emailTemplate.map((layout, index)=>(
          <div key={index}>
            {getLayoutComponent(layout)}
          </div>
        )): <h2 className='p-4 text-center bg-gray-100 border border-dashed'>Add Layout Here</h2>
        }

      </div>
    </div>
  )
}

export default Canvas