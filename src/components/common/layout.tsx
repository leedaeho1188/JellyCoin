import { ReactNode } from "react";



export const Layout = ({ children }: {children: ReactNode}) => {

  return (
    <div className='max-w-3xl bg-white mx-auto h-screen' >
      {children}
    </div>
  )
};