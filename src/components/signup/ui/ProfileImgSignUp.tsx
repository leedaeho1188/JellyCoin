import { Avatar, Box, Button, Typography, styled } from "@mui/material"
import { ImageFile } from "../hooks/useSignUp";
import { ChangeEvent } from "react";
import { VisuallyHiddenInput } from "@/components/common/element/VisuallyHiddenInput";

interface Props {
  profileImage: ImageFile | undefined;
  onChangeFiles: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export const ProfileImgSignUp = ({
  profileImage,
  onChangeFiles
}: Props) => {


  return (
    // 프로필 사진
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
  )
}