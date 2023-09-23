import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

export const Layout = ({ children }: {children: ReactNode}) => {

  return (
    <div className='max-w-3xl bg-white mx-auto h-screen relative overflow-hidden'>
      <Header/>
      <div className='pt-14' >
        {children}
      </div>
      <BottomNav/>
    </div>
  )
};