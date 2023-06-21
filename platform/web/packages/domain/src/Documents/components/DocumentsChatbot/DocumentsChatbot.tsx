import { Stack } from "@mui/material";
import { Chat } from "components";
import { InputForm, Option, SmartKey } from "@smartb/g2";
import { FilePath, useProjectListFilesQuery, askQuestion } from "../../api/query";
import { useParams } from "react-router-dom";
import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";

export interface DocumentsChatbotProps {
    files: FilePath[]
    setFiles: (files: FilePath[]) => void
    quote?: { quote: string, fileName: string, pageNumber: number }
    setReference: (ref: string) => void
    removeQuote?: () => void
}

export const DocumentsChatbot = (props: DocumentsChatbotProps) => {
    const { files, setFiles, /* setReference, */ quote, removeQuote } = props
    const { projectId } = useParams()
    const { t } = useTranslation()
    // const [localReference, setlocalReference] = useState("")

    const fileListQuery = useProjectListFilesQuery({ query: { id: projectId! } })
    const fileList = fileListQuery.data?.items

    const options = useMemo(() => fileList?.map((file): Option => ({
        key: file.name,
        label: file.name
    })), [fileList])

    const values = useMemo(() => files.map((file) => file.name), [files])

    const onChangeValues = useCallback(
        (values: SmartKey[]) => {
            setFiles(
                values.map(
                    (value) => fileList?.find(
                        (file) => file.name === value
                    )!
                )
            )

        },
        [setFiles, fileList],
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
                values={values}
                onChangeValues={onChangeValues}
                inputType="select"
                multiple
                isLoading={fileListQuery.isLoading}
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
                getResponse={askQuestion}
                removeQuote={removeQuote}
                quote={quote}
            />
        </Stack>
    )
}
