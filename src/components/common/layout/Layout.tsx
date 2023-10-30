import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import classes from './layout.module.scss';

export const Layout = ({ children }: {children: ReactNode}) => {

  return (
    <div className={classes['layout-container']}>
      <Header/>
      <div className='pt-14 relative w-full h-full' >
        {children}
      </div>
      <BottomNav/>
    </div>
  )
};