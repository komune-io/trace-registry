import { Sdg as AruiSdg } from "./Sdg";
import { Meta } from "@storybook/react";
import { Story } from "@storybook/react/types-6-0";
import { Stack } from "@mui/material";
import { useMemo } from "react";

export default {
  title: "components/Sdg",
  component: AruiSdg,
} as Meta;

export const Sdg: Story = () => {
  const sdgs = useMemo(() => {
    const table = [];
    for (let i = 1; i < 18; i++) {
      table.push(<AruiSdg key={i} sdgId={i} />);
    }
    return table;
  }, []);

  return (
    <Stack direction="row" spacing={1}>
      {sdgs}
    </Stack>
  );
};

Sdg.storyName = "Sdg";
