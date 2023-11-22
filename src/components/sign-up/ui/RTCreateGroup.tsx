import { Box, Button, Modal, TextField } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { PostCodeModal } from "."
import { TextareaAutosize } from "@/components/common"


interface Props {
  toggleNewGroup: Dispatch<SetStateAction<boolean>>
}

export const RTCreateGroup = ({
  toggleNewGroup
}:Props) => {

  const [postcodeModal, togglePostCodeModal] = useState(false);

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
      <TextareaAutosize 
        minRows={3}
        maxRows={4} 
        placeholder="그룹에 대해서 설명해주세요." 
      />
      <TextField
        fullWidth
        label='주소'
        variant='standard'
        onClick={() => togglePostCodeModal(true)}
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
      >
        기존 그룹코드 작성하기
      </Button>
      <PostCodeModal
        open={postcodeModal}
        setOpen={togglePostCodeModal}
      />
    </Box>
  )
}