import Image from "next/image";
import CoinImage from '../../../../public/images/coin.png'
import classes from './layout.module.scss'
import { Button } from "@mui/material";



export const Header = () => {

  return (
    <div className={classes['header-container']} >
      <div className={classes['header-layout']} >
        <div className='text-2xl font-bold' > 
          <a href='/' > 
            <Button  />
          </a>
        </div>
        <div className='flex gap-3 items-center' > 
          <Image src={CoinImage} alt='coin' width='30' height='30' />
          <div className='text-lg font-bold text-orange-500' > 
            100 
          </div>
        </div>
      </div>
    </div>
  )
}