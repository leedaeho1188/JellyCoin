import { Box, Button, Container, TextField } from "@mui/material";
import { useSignUp } from "../hooks/useSignUp";
import { ProfileImgSignUp, RoleStudent, RoleTeacher, SelectRole } from ".";

export const Signup = () => {

  const {
    role,
    profileImage,
    buttonState,

    register,
    setRole,
    onChangeFiles,
    onSignUp,
  } = useSignUp();


  return (
    <Container 
      component='main' 
      sx={{
        display:'flex', 
        flexDirection: 'column', 
        width: '100%', 
        height: '100%',
        gap: '24px'
      }} >
      <ProfileImgSignUp
        profileImage={profileImage}
        onChangeFiles={onChangeFiles}
      />
      {/* 이름 */}
      <Box>
        <TextField 
          {...register('username')}
          fullWidth 
          label='이름' 
          placeholder="이름을 작성해주세요." 
          variant='standard'
        />
      </Box>
      {/* 닉네임 */}
      <Box>
        <TextField 
          {...register('nickname')}
          fullWidth 
          label='닉네임' 
          placeholder="닉네임을 작성해주세요." 
          variant='standard'
        />
      </Box>
      <Box sx={{
        display:'flex',
        flexDirection: 'column',
        gap: '12px'
      }} >
        <SelectRole
          role={role}
          setRole={setRole}
        />
        {role === 'student'
          ? <RoleStudent/>
          : <RoleTeacher/>
        }
      </Box>

      {/* 회원가입 버튼 */}
      <Box sx={{alignSelf: 'flex-end'}} >
        <Button 
          variant="contained" 
          onClick={onSignUp}
          disabled={buttonState === 'disabled'} 
        >
          회원가입
        </Button>
      </Box>
    </Container>
  )
}