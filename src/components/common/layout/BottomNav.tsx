
import ProfileIcon from '../../../../public/svg/profile.svg';
import MarketIcon from '../../../../public/svg/market.svg';
import UsersIcon from '../../../../public/svg/user_list.svg';

import classes from './layout.module.scss'
import { primary } from '@/constants/colors';

// bottom navigation bar
// three buttons: market, users, profile



export const BottomNav = () => {

  return (
    <div className={classes['bottomNav-container']}>
      <a href='/users' > 
        <UsersIcon width='30px' height='30px' fill={primary} stroke={primary} />
      </a>
      <a href='/market' > 
        <MarketIcon width='30px' height='30px' fill={primary} stroke={primary} />
      </a>
      <a href='/profile' > 
        <ProfileIcon width='40px' height='40px' fill={primary} stroke={primary} /> 
      </a>
    </div>
  )

}