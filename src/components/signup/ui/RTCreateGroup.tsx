import { Box, Button, TextField } from "@mui/material"
import { Dispatch, SetStateAction } from "react"


interface Props {
  toggleNewGroup: Dispatch<SetStateAction<boolean>>
}

export const RTCreateGroup = ({
  toggleNewGroup
}:Props) => {


  return (
    <Box
      sx={{
        display:'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <TextField
        fullWidth
        label='그룹 이름'
        variant='standard'
        placeholder="그룹이름을 작성해주세요."
      />
      <TextField
        fullWidth
        label='주소'
        variant='standard'
        onClick={() => console.log('click TextField!!')}
      />
      <TextField
        fullWidth
        label='상세주소'
        variant='standard'
      />
      <Button
        sx={{
          alignSelf:'flex-end',
          width: 'fit-content'
        }}
        onClick={() => toggleNewGroup(false)}
      >기존 그룹코드 작성하기</Button>
    </Box>
  )
}