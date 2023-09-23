import Image from "next/image";
import CoinImage from '../../../public/images/coin.png'



export const Header = () => {

  return (
    <div className='w-full h-14 shadow ' >
      <div className='flex justify-between items-center h-full px-3' >
        <div className='text-2xl font-bold' > 
          <a href='/' > 
            <span className='text-orange-300' > 
              Jelly 
            </span>
            <span className='text-orange-500' > 
              Coin 
            </span>
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