"use client";
import React, { useEffect, useState, useContext } from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserDetailContext } from '@/context/UserDetailContext';
import { ScreenSizeContext } from '@/context/ScreenSizeContext';
import { DragDropLayoutElement, DragElementLayout } from '@/context/DragElementLayout';
import { EmailTemplateContext } from '@/context/EmailTemplateContext';

function Provider({children}) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail]=useState();
  const [screenSize, setScreenSize]=useState('desktop');
  const [dragElementLayout, setDragElementLayout]=useState();
  const [emailTemplate, setEmailTemplate]=useState([]);

  // ログインしてるかしてないかprovider起動後一回チェック？
  useEffect(()=>{
    if(typeof window!==undefined){
        const storage=JSON.parse(localStorage.getItem('userDetail'));
        if(!storage?.email || !storage){
            // Redirect to Home Screen
        }else{
            setUserDetail(storage);
        }
    }
  },[])

  return (
    <ConvexProvider client={convex}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
                <ScreenSizeContext.Provider value={{screenSize, setScreenSize}}>
                    <DragElementLayout.Provider value={{dragElementLayout, setDragElementLayout}}>
                        <EmailTemplateContext.Provider value={{emailTemplate, setEmailTemplate}}>
                            <div>{children}</div>  
                        </EmailTemplateContext.Provider>
                    </DragElementLayout.Provider>
                </ScreenSizeContext.Provider>
            </UserDetailContext.Provider>
        </GoogleOAuthProvider>
    </ConvexProvider>
  )
}

export default Provider

export const useUserDetailContext=()=>{
    return useContext(UserDetailContext);
}
export const useScreenSizeContext=()=>{
    return useContext(ScreenSizeContext);
}
export const useDragElementLayoutContext=()=>{
    return useContext(DragElementLayout);
}
export const useEmailTemplateContext=()=>{
    return useContext(EmailTemplateContext);
}