
import ProfileIcon from '../../../../public/svg/profile.svg';
import MarketIcon from '../../../../public/svg/market.svg';
import UsersIcon from '../../../../public/svg/user_list.svg';

// bottom navigation bar
// three buttons: market, users, profile



export const BottomNav = () => {

  return (
    <div className='px-3 w-full h-14 absolute bottom-0 left-0 flex justify-between items-center shadow-upper border-solid' 
      style={{boxShadow: '0px -1px 3px rgba(0, 0, 0, 0.25)'}}
    >
      <div className='text-white text-lg' > 
        <a href='/users' > 
          <UsersIcon width='30px' height='30px' fill='#FDBA74' stroke="#FDBA74" />
        </a>
      </div>
      <div className='text-white text-lg' > 
        <a href='/market' > 
          <MarketIcon width='30px' height='30px' fill='#FDBA74' stroke="#FDBA74" />
        </a>
      </div>
      <div className='text-white text-lg' > 
        <a href='/profile' > 
          <ProfileIcon width='40px' height='40px' fill='#FDBA74' stroke="#FDBA74" /> 
        </a>
      </div>
    </div>
  )

}