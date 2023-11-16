import { Box, Button, ButtonGroup, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Role, useSignUp } from "../hooks/useSignUp";
import { ProfileImgSignUp, RoleStudent, RoleTeacher, SelectRole } from ".";

export const Signup = () => {

  const {
    onChangeFiles,
    profileImage,
    onSignUp,
    username,
    role,
    setRole,
    onChangeName
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
          fullWidth 
          label='이름' 
          placeholder="이름을 작성해주세요." 
          variant='standard'
          value={username}
          onChange={onChangeName}
        />
      </Box>

      <Box sx={{
        display:'flex',
        flexDirection: 'column',
        gap: '12px'
      }} >
        {/* 역할 */}
        <SelectRole
          role={role}
          setRole={setRole}
        />

        {/*  */}
        {role === 'student'
          ? <RoleStudent/>
          : <RoleTeacher/>
        }
      </Box>

      {/* 회원가입 버튼 */}
      <Box sx={{alignSelf: 'flex-end'}} >
        <Button variant="contained" onClick={onSignUp} >
          회원가입
        </Button>
      </Box>
    </Container>
  )
}