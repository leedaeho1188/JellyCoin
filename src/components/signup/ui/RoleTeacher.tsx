import { Box, Button, FormControl, TextField } from "@mui/material"
import { useState } from "react"
import { CreateGroup } from ".";


export const RoleTeacher = () => {

  const [isNewGroup, toggleNewGroup] = useState<boolean>(false);

  return (
    <Box>
      {isNewGroup 
        ? <CreateGroup
            toggleNewGroup={toggleNewGroup}
          />
        : <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap: '12px'
          }} >
            <TextField 
              fullWidth
              label='그룹코드' 
              variant='standard' 
              placeholder="그룹 인증코드를 작성해주세요." 
            />
            <Button
              sx={{alignSelf: 'flex-end'}}
              onClick={() => toggleNewGroup(true)}
            >
              새 그룹 생성하기
            </Button>
          </Box>      
      }
    </Box>
  )
}