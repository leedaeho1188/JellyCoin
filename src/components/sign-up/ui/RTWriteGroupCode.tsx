import { Box, Button, TextField } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface Props {
  toggleNewGroup: Dispatch<SetStateAction<boolean>>
}

export const RTWriteGroupCode = ({
  toggleNewGroup
}:Props) => {

  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      gap: '12px'
    }} >
      <TextField 
        fullWidth
        label='그룹 코드' 
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
  )
}