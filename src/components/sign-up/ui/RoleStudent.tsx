import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"


export const RoleStudent = () => {
  
  return (
    <Box>
      <FormControl fullWidth variant='standard' >
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
  )

}