import { Box, Button, Container, TextField } from "@mui/material";
import { useSignUp } from "../hooks/useSignUp";
import { ProfileImgSignUp, RoleSignUp, RoleStudent, RoleTeacher, SelectRole, UserNicknameForm } from ".";

export const Signup = () => {

  const {
    profileImage,
    buttonState,

    register,
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
      
      <UserNicknameForm
      />

      <RoleSignUp
      />
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