import { Stack } from "@mui/material";
import { Chat } from "components";
import { InputForm, Option, SmartKey } from "@smartb/g2";
import { FilePath, askQuestion } from "../../api/query";
import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";

export interface DocumentsChatbotProps {
    selectedFiles: FilePath[]
    allFiles?: FilePath[]
    setFiles: (selectedFiles: FilePath[]) => void
    quote?: { quote: string, fileName: string, pageNumber: number }
    setReference: (ref: string) => void
    removeQuote?: () => void
    isLoading?: boolean
}

export const DocumentsChatbot = (props: DocumentsChatbotProps) => {
    const { selectedFiles, allFiles, setFiles, /* setReference, */ quote, removeQuote, isLoading = false } = props
    const { t } = useTranslation()
    // const [localReference, setlocalReference] = useState("")


    const options = useMemo(() => allFiles?.map((file): Option => ({
        key: file.name,
        label: file.name
    })), [allFiles])

    const filesNames = useMemo(
      () => selectedFiles.map((file) => file.name)
      , [selectedFiles])

    const onChangeFiles = useCallback(
        (values: SmartKey[]) => {
            setFiles(
                values.map(
                    (value) => allFiles?.find(
                        (file) => file.name === value
                    )!
                )
            )

        },
        [setFiles, allFiles],
    )

    // const sendReference = useCallback(
    //     () => {
    //         setReference(localReference)
    //     },
    //     [localReference],
    // )

    return (
        <Stack
            sx={{
                height: "100%",
                width: "550px",
                flexShrink: 0,
                padding: "24px 32px",
                overflow: "auto",
            }}
            gap={2}
        >
            <InputForm
                values={filesNames}
                onChangeValues={onChangeFiles}
                inputType="select"
                multiple
                isLoading={isLoading}
                placeholder={t("chooseFile")}
                options={options}
            />
            {/* <InputForm
                value={localReference}
                onChange={setlocalReference}
                inputType="textField"
                placeholder="Reference test"
                inputIcon={
                    <SendRounded
                        sx={{
                            cursor: "pointer"
                        }}
                        onClick={sendReference}
                    />
                }
            /> */}
            <Chat
                sx={{
                    overflow: "auto",
                    width: "100%"
                }}
                //@ts-ignore
                selectedFiles={filesNames}
                getResponse={askQuestion}
                removeQuote={removeQuote}
                quote={quote}
            />
        </Stack>
    )
}
