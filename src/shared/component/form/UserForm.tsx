import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const FORM_ELEMENTS = [
  {
    label: "First Name",
    placeholder: "Enter first name",
    type: "text",
    multiline: false,
    row: 1,
  },
  {
    label: "Last Name",
    placeholder: "Enter last name",
    type: "text",
    multiline: false,
    row: 1,
  },
  {
    label: "Email",
    placeholder: "Enter email",
    type: "email",
    multiline: false,
    row: 1,
  },
  {
    label: "Phone number",
    placeholder: "Enter phone number",
    type: "number",
    multiline: "number",
    row: 1,
  },
  {
    label: "Skills",
    placeholder: "Enter skills",
    type: "text",
    multiline: true,
    row: 4,
  },
];

interface Props {
  isTextDisabled: boolean;
}

export const UserForm = ({ isTextDisabled }: Props): JSX.Element => {
  return (
    // TODO: put padding inside <Card with sx
    <Box px={1}>
      <Card sx={{ p: 1 }}>
        <CardContent>
          <Box component={"form"}>
            <Grid container spacing={1} columnSpacing={1}>
              <Grid xs={12} sm={6} item>
                {FORM_ELEMENTS.map((item, index) => {
                  return (
                    <TextField
                      key={index}
                      fullWidth
                      required={false}
                      label={item.label}
                      placeholder={item.placeholder}
                      variant={"outlined"}
                      type={item.type}
                      rows={item.row}
                      disabled={isTextDisabled}
                    />
                  );
                })}
              </Grid>

              {!isTextDisabled && (
                <Grid item xs={12}>
                  <Button type={"submit"} variant={"contained"}>
                    {"Submit"}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
