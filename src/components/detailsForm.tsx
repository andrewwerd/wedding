import { Box, TextField } from "@mui/material";
import { Content } from "../utils/models";
import { styled } from "@mui/material/styles";

interface DetailsFormProps {
  content: Content;
}
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#947F6E", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#947F6E", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#947F6E", // Border color when focused
    },
  },
  "& .MuiInputLabel-root": {
    color: "#947F6E", // Default label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#947F6E", // Label color when focused
  },
  "& .MuiInputBase-root": {
    "&:after": {
      borderColor: "#947F6E", // Border color on hover
    },
  },
}));

const DetailsForm = (props: DetailsFormProps) => {
  return (
    <Box width="100%">
      <CustomTextField
        id="standard-basic"
        label={props.content.detailsSection.nameFormLabel}
        variant="standard"
        sx={{}}
        fullWidth
      />
      <CustomTextField
        id="standard-basic"
        label={props.content.detailsSection.partnerFormLabel}
        variant="standard"
        fullWidth
      />
    </Box>
  );
};

export default DetailsForm;
