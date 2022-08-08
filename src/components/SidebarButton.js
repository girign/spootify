import { Box, Button } from "grommet";

function SidebarButton({ icon, label, ...rest }) {
  return (
    <Box pad="small">
      <Button
        gap="medium"
        alignSelf="start"
        plain
        icon={icon}
        label={label}
        {...rest}
      />
    </Box>
  );
}

export default SidebarButton;
