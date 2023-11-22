import { Box, TextField } from "@mui/material"
import { useUserNickname } from "../hooks"


export const UserNicknameForm = () => {

  const {
    register
  } = useUserNickname();

  return (
    <>
      <Box>
        <TextField 
          {...register('username')}
          fullWidth 
          label='이름' 
          placeholder="이름을 작성해주세요." 
          variant='standard'
        />
      </Box>
      <Box>
        <TextField 
          {...register('nickname')}
          fullWidth 
          label='닉네임' 
          placeholder="닉네임을 작성해주세요." 
          variant='standard'
        />
      </Box>
    </>
  )
}