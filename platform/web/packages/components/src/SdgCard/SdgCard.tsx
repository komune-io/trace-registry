import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Select, Option } from "@smartb/g2-forms";
import { Fragment, useCallback, useMemo, useState } from "react";
import { Tooltip } from "@smartb/g2-notifications";
import { Sdg, Size } from "../Sdg/Sdg";
import { useTranslation } from "react-i18next";

const StyledPaper = styled(Box)({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  "& .sdgSelect": {
    width: "250px",
  },
  "& .validateButton": {
    marginLeft: "10px",
    height: "100%",
  },
});

export interface SdgCardProps {
  defaultSdgs:{id: number}[];
  /**
   * @default false
   */
  edit?: boolean;
  className?: string;
  aligned?: boolean;
  onChangeSdgs?: (newSdgs: {id: number}[]) => void;
  size?: Size;
  maxLength?: number;
}

export const SdgCard = (props: SdgCardProps) => {
  const {
    defaultSdgs,
    edit = false,
    className,
    aligned = false,
    onChangeSdgs,
    size = "medium",
    maxLength,
  } = props;

  const [sdgs, setsdgs] = useState(defaultSdgs);

  const { t } = useTranslation();

  const sdgsValues = useMemo(() => sdgs.map((sdg) => sdg.id), [sdgs]);

  const sdgsOptions = useMemo(() => {
    const table: Option[] = [];
    for (let i = 1; i < 18; i++) {
      table.push({
        key: i,
        label: t(`sdg.${i}`) as string,
        
      });
    }
    return table;
  }, [t]);

  const sdgsDisplay = useMemo(
    () =>
      sdgs.map((sdg, index) => {
        if (maxLength && maxLength < index + 1 && sdgs.length - maxLength > 1) return;
        const sdgContainerStyle = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: size !== "large" ? "0 2px" : "0 3px",
        };
        const sdgDisplay = (
          <Box key={sdg.id} sx={sdgContainerStyle}>
            <Sdg sdgId={sdg.id} size={size} />
          </Box>
        );
        if (maxLength && maxLength === index + 1 && sdgs.length - maxLength > 1) {
          let tooltip = "";
          for (let i = maxLength; i < sdgs.length; i++) {
            tooltip += t(`sdg.${sdgs[i].id}`);
            if (i < sdgs.length - 1) {
              tooltip += ", ";
            }
          }
          return (
            <Fragment key={sdg.id}>
              {sdgDisplay}
              <Box sx={sdgContainerStyle}>
                <Tooltip helperText={tooltip}>
                  <Box
                    key={sdg.id}
                    sx={
                      size === "small"
                        ? {
                            ...sdgContainerStyle,
                            border: "2px solid #808A9D",
                            width: "25px",
                            height: "25px",
                            boxSizing: "border-box",
                          }
                        : size === "medium"
                        ? {
                            ...sdgContainerStyle,
                            border: "2px solid #808A9D",
                            width: "30px",
                            height: "30px",
                            boxSizing: "border-box",
                          }
                        : {
                            ...sdgContainerStyle,
                            border: "3px solid #808A9D",
                            width: "40px",
                            height: "40px",
                            boxSizing: "border-box",
                          }
                    }
                  >
                    <Typography
                      sx={{ color: "#808A9D" }}
                      variant={size !== "large" ? "caption" : "body2"}
                    >{`+${sdgs.length - maxLength}`}</Typography>
                  </Box>
                </Tooltip>
              </Box>
            </Fragment>
          );
        }
        return sdgDisplay;
      }),
    [sdgs, size, maxLength, t]
  );

  const onBlurSdgs = useCallback(() => {
    onChangeSdgs && onChangeSdgs(sdgs);
  }, [onChangeSdgs, sdgs]);

  const onChangeMemoized = useCallback((sdgs: any[]) => {
    const numbers = sdgs.map((sdg) => ({ id: Number(sdg) }));
    setsdgs(numbers);
  }, []);

  if (edit)
    return (
      <StyledPaper className={className}>
        <Select
          placeholder={t("chooseTheSdgs")}
          className="sdgSelect"
          onChangeValues={onChangeMemoized}
          onBlur={onBlurSdgs}
          values={sdgsValues}
          options={sdgsOptions}
          multiple
        />
      </StyledPaper>
    );
  if (!sdgs || sdgs.length <= 0) return <> </>;
  return (
    <StyledPaper className={className}>
      <Box
        sx={
          !aligned
            ? size === "large"
              ? {
                  display: "grid",
                  gridAutoFlow: "column",
                  gridTemplateRows: "repeat(auto-fill, minmax(45px, 1fr))",
                  width: "fit-content",
                  height: "96px",
                }
              : size === "medium"
              ? {
                  display: "grid",
                  gridAutoFlow: "column",
                  gridTemplateRows: "repeat(auto-fill, minmax(35px, 1fr))",
                  width: "fit-content",
                  height: "70px",
                }
              : {
                  display: "grid",
                  gridAutoFlow: "column",
                  gridTemplateRows: "repeat(auto-fill, minmax(30px, 1fr))",
                  width: "fit-content",
                  height: "60px",
                }
            : {
                display: "flex",
                width: "fit-content",
              }
        }
      >
        {sdgsDisplay}
      </Box>
    </StyledPaper>
  );
};
