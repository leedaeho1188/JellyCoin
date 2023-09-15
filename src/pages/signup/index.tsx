import { useSignUp } from "@/components/signup/useSignUp";
import { convertHeicToJpg } from "@/utils/convertHeicToJpg";
import { useState } from "react";

const SignUpPage = () => {

  const {
    onChangeFiles,
    profileImage,
    onSignUp
  } = useSignUp();


  return (
    <div className="flex flex-col gap-4" >
      <div>
        <label htmlFor="name">Name</label>
        <input className='border-solid border-2 border-sky-500' type="text" id="name" name="name" />
      </div>

      <div className="w-fit" >
        <label htmlFor='imageFile' >
          {profileImage 
            ? <img className='w-32 h-32' src={profileImage.objectUrl} />
            : <div className='px-12 py-6 w-fit cursor-pointer border-dotted border-2 border-sky-500'>
                Upload Image
              </div>
          }
        </label>
        <input multiple={false}  accept=".jpg, .jpeg, .png, .heic" onChange={onChangeFiles} className="hidden" type='file' id='imageFile' name='imageFile' />
      </div>

      <div className='cursor-pointer' onClick={onSignUp} > 회원가입 </div>
    </div>
  )
}

export default SignUpPage;