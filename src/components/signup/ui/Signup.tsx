import { Box, Button, ButtonGroup, Container, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useSignUp } from "../hooks/useSignUp";
import { ProfileImgSignUp } from "./ProfileImgSignUp";



export const Signup = () => {

  const {
    onChangeFiles,
    profileImage,
    onSignUp,
    name,
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
        gap: '20px'
      }} >
      <ProfileImgSignUp
        profileImage={profileImage}
        onChangeFiles={onChangeFiles}
      />
      {/* 이름 */}
      <Box>
        <FormControl fullWidth >
          <InputLabel htmlFor='username-input' >이름</InputLabel>
          <Input id='username-input' placeholder="이름을 작성해주세요." />
        </FormControl>
      </Box>
      {/* 역할 */}
      <Box>
        <ButtonGroup>
          <Button 
            variant={role === 'student' ? 'contained' : 'outlined'} 
            onClick={() => setRole('student')}
          >
            학생
          </Button>
          <Button 
            variant={role === 'teacher' ? 'contained' : 'outlined'} 
            onClick={() => setRole('teacher')}
          >
            선생님
          </Button>
        </ButtonGroup>
      </Box>

  {/*  */}
  {role === 'student'
    ? <Box>
        <FormControl fullWidth >
          <InputLabel id='group-select-id' >그룹</InputLabel>
          <Select
            labelId="group-select-id"
            value={''}
            onChange={() => {}}
            label='그룹'
          >
            <MenuItem value="" >
              <em>없음</em>
            </MenuItem>
            <MenuItem value="구갈 화평교회" >구갈 화평교회</MenuItem>
          </Select>
        </FormControl>
      </Box>
    : <Box>
        <FormControl fullWidth>
          <InputLabel htmlFor='group-code-input-id'>그룹 코드</InputLabel>
          <Input id='group-code-input-id' placeholder="그룹 인증코드를 작성해주세요." />
        </FormControl>
      </Box>
  }

      {/* 회원가입 버튼 */}
      <Box sx={{alignSelf: 'flex-end'}} >
        <Button variant="contained" onClick={onSignUp} >
          회원가입
        </Button>
      </Box>
    </Container>
  )
}