import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: {children: ReactNode}) => {

  return (
    <div className='max-w-3xl bg-white mx-auto h-screen'>
      <Header/>
      <div>
        {children}
      </div>
    </div>
  )
};