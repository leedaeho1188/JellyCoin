import { Avatar, Box, Button, ButtonGroup, Container, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material";
import { useSignUp } from "../hooks/useSignUp";



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
      {/* 프로필 사진 */}
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          alignItems:'center'
        }}
      >
        {profileImage
          ? <Button
              component='label'
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50%'
              }}
            >
              <Avatar 
                alt='profile-img' 
                src={profileImage.objectUrl} 
                sx={{
                  width:'100px', 
                  height:'100px',
                  boxShadow: '1px 2px 4px 0px rgba(0, 0, 0, 0.75)',
                }} 
              />
              <VisuallyHiddenInput
                type='file' 
                multiple={false}
                accept=".jpg, .jpeg, .png, .heic" 
                onChange={onChangeFiles}
              />
            </Button>
          : <Button   
              component='label' 
              sx={{
                width: '100px',
                height: '100px',
                border: 'dashed 2px',
                fontSize: '30px',
                fontWeight: 'bold',
                borderRadius: '50%'
              }} 
            >
              +
              <VisuallyHiddenInput 
                type='file' 
                multiple={false}
                accept=".jpg, .jpeg, .png, .heic" 
                onChange={onChangeFiles}
              />
            </Button>
        }
        <Typography>* 프로필 사진을 선택해주세요.</Typography>
      </Box>
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


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});