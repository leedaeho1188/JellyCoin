import { Box, Modal } from "@mui/material"
import { Dispatch, SetStateAction } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode"

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const PostCodeModal = ({
  open,
  setOpen
}:Props) => {

  const handleComplete = (data:Address) => {
    console.log(data, 'data');

    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setOpen(false);
  };

  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
      <Box>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Box>
    </Modal>
  )
}