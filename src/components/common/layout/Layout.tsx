import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import classes from './layout.module.scss';

export const Layout = ({ children }: {children: ReactNode}) => {

  return (
    <div className={classes['layout-container']}>
      <Header/>
      <div className={classes['pageBody-container']} >
        {children}
      </div>
      <BottomNav/>
    </div>
  )
};