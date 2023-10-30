import { Login } from '@/components/login/ui/Login';
import classes from './loginPage.module.scss';



const LoginPage = () => {

  return (
    <div className={classes['loginPage_container']} >
      <Login/>
    </div>
  )

}

export default LoginPage;