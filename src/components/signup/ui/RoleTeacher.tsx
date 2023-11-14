import { Box, Button, FormControl, TextField } from "@mui/material"
import { useState } from "react"


export const RoleTeacher = () => {

  const [isNewGroup, toggleNewGroup] = useState<boolean>(false);

  return (
    <Box>
      {isNewGroup 
        ? <Box>
            
          </Box>
        :  <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap: '12px'
          }} >
            <FormControl fullWidth>
              <TextField label='그룹 코드' variant='filled' placeholder="그룹 인증 코드를 작성해주세요." />
            </FormControl>
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