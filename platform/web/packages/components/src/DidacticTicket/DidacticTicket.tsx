import {Box, Stack} from '@mui/material'
import {LexicalEditor} from '../LexicalEditor'
import {config} from "../config";

export interface DidacticTicketProps {
    content?: string;
    img?: string
}

export const DidacticTicket = (props: DidacticTicketProps) => {
    const { content, img } = props;
    const { platform } = config()

    let image = img
    if (img && !img.startsWith('http')) {
        const separator = img.startsWith('/') ? '' : '/'
        image = `${platform.url}${separator}${image}`
    }

    return (
        <Stack
            direction="row"
            sx={{
                p: 3,
                gap: 5,
                borderRadius: 1,
                bgcolor: '#3C78D81A',
                alignItems: 'center',
            }}
        >
            <Stack
                gap={1.5}
                p={1.5}
                sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: 1.5,
                }}
            >
                <LexicalEditor
                    markdown={content ?? " "}
                    readOnly
                    styleContainerProps={{
                        sx: {
                            '& h1, h2, h3, h4, h5, h6': {
                                fontWeight: 600,
                                marginBlockEnd: "20px"
                            },
                            "& p": {
                                fontSize: "0.938rem",
                                lineHeight: 1.43
                            },
                            "& .editor-input": {
                                p: 0
                            }
                        }
                    }}
                />
            </Stack>
            {image && <Box
                sx={{
                    p: 1.5,
                    "& .didactic-image": {
                        width: "auto",
                        height: "auto",
                        maxWidth: "200px",
                        maxHeight: "150px",
                    },

                }}
            >
                <img src={image} alt="illustration du contenu didactique" className='didactic-image'/>
            </Box>}
        </Stack >
    )
}
