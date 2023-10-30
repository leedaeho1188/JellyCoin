import Image from "next/image";
import CoinImage from '../../../../public/images/coin.png'
import classes from './layout.module.scss'
import { Button, Typography } from "@mui/material";



export const Header = () => {

  return (
    <div className={classes['header-container']} >
      <div className={classes['header-layout']} >
        <a href='/' > 
          <Typography variant="h5">
            JellyCoin
          </Typography>
        </a>
        <div className={classes['left-item']} > 
          <Image src={CoinImage} alt='coin' width='30' height='30' />
          <div className='text-lg font-bold text-orange-500' > 
            100 
          </div>
        </div>
      </div>
    </div>
  )
}