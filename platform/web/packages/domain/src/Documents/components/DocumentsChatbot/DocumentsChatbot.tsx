import { Stack } from "@mui/material";
import { Chat } from "components";
import { InputForm, Option, SmartKey, Button } from "@smartb/g2";
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
    viewSelectedDocuments?: () => void
    disabled: boolean
    isPreviewMode: boolean
}

export const DocumentsChatbot = (props: DocumentsChatbotProps) => {
    const { selectedFiles, allFiles, setFiles, /* setReference, */ quote, removeQuote, viewSelectedDocuments, disabled, isPreviewMode } = props
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
            <Button 
                sx={{
                    color: "white"
                }} 
                aria-label="download" 
                href={""} 
                onClick={viewSelectedDocuments}
                disabled={disabled}
                >
                {isPreviewMode ? t("navigateThroughDocs") : t("viewSelectedDocs")}
            </Button>
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
