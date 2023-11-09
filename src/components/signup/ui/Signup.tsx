import { Avatar, Box, Button, Container } from "@mui/material";
import { useSignUp } from "../hooks/useSignUp";
import classes from './signup.module.scss';



export const Signup = () => {

  const {
    onChangeFiles,
    profileImage,
    onSignUp,
    name,
    onChangeName
  } = useSignUp();


  return (
    // <div className="flex flex-col gap-8 px-3 py-3" >
    //   <div className="w-fit flex items-center gap-4" >
    //     <label htmlFor='imageFile' >
    //       {profileImage 
    //         ? <img className='w-32 h-32 cursor-pointer' src={profileImage.objectUrl} />
    //         : <div className='w-32 h-32 rounded flex justify-center items-center cursor-pointer border-dotted border-2 border-orange-300'>
    //             Upload Image
    //           </div>
    //       }
    //     </label>
    //     <input multiple={false}  accept=".jpg, .jpeg, .png, .heic" onChange={onChangeFiles} className="hidden" type='file' id='imageFile' name='imageFile' />
    //     <p>* 프로필 사진을 업로드해주세요</p>
    //   </div>

    //   <div className="flex flex-col gap-1" >
    //     <label className='text-sm' htmlFor="name">이름</label>
    //     <input onChange={onChangeName} placeholder="이름을 입력해주세요." value={name} className='outline-none border-b-orange-300 border-b-2 border-solid text-lg px-1 py-1' type="text" id="name" name="name" />
    //   </div>

    //   <div className='cursor-pointer bg-orange-200 px-3 py-2 w-fit rounded self-end text-lg' onClick={onSignUp} > 
    //     회원가입 
    //   </div>
    // </div>
    <Container component='main' sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%'}} >
      <Box>
        {profileImage
          ? <Avatar alt='profile-img' src={profileImage.objectUrl} sx={{width:'50px', height:'50px'}} />
          : <div>

              +
              <input type='file' className={classes['visually-hidden-input']} />
            </div>
            
        }
      </Box>
    </Container>
  )
}