import { Stack } from "@mui/material";
import { Chat } from "components";
import { askQuestion } from "../../api";
import { InputForm, Option } from "@smartb/g2";
import { useProjectListFilesQuery } from "../../api/query";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface DocumentsChatbotProps {
    files: string[]
    setFiles: (files: string[]) => void
}

export const DocumentsChatbot = (props: DocumentsChatbotProps) => {
    const { files, setFiles } = props
    const {projectid} = useParams()
    const {t} = useTranslation()

    const fileListQuery = useProjectListFilesQuery({query: {id: projectid!}})
    const fileList = fileListQuery.data?.items

    const options = useMemo(() => fileList?.map((file): Option => ({
        key: file.name,
        label: file.name
    })), [fileList])

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
                values={files}
                //@ts-ignore
                onChangeValues={setFiles}
                inputType="select"
                multiple
                isLoading={fileListQuery.isLoading}
                placeholder={t("chooseFile")}
                options={options}
            />
            <Chat
                sx={{
                    overflow: "auto",
                    width: "100%"
                }}
                //@ts-ignore
                getResponse={askQuestion}
            />
        </Stack>
    )
}
