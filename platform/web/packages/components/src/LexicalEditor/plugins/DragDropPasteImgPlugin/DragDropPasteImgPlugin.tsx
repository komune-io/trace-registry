/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { DRAG_DROP_PASTE } from '@lexical/rich-text';
import { isMimeType, mediaFileReader } from '@lexical/utils';
import { COMMAND_PRIORITY_LOW, $getNodeByKey, LexicalEditor, NodeKey } from 'lexical';
import { useCallback, useEffect } from 'react';
import { $createImageNode, $isImageNode, insertImageNode } from '../ImagesPlugin';
import { useDatasetAddMediaDistributionCommand } from '../../api';
import { g2Config } from '@komune-io/g2';
import { useParams } from 'react-router-dom';

const ACCEPTABLE_IMAGE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/webp',
];

const createImageNodeWithFixedSize = (file: File, result: string, editor: LexicalEditor): NodeKey => {
    let nodeKey = ""
    editor.update(() => {
        const imageNode = $createImageNode({
            altText: file.name,
            src: result,
        });
        insertImageNode(imageNode)
        nodeKey = imageNode.__key
    })
    return nodeKey
}

export const DragDropPasteImgPlugin = (): null => {
    const [editor] = useLexicalComposerContext();
    const { draftId } = useParams()
    const uploadImageCommand = useDatasetAddMediaDistributionCommand({})

    const uploadImage = useCallback(
        (editor: LexicalEditor, file: File, nodeKey: NodeKey) => {
            uploadImageCommand.mutateAsync({
                command: {
                    id: editor._config.namespace,
                    mediaType: file.type,
                },
                files: [{
                    file: file
                }]
            }).then((res) => {
                if (res) {
                    editor.update(() => {
                        const imgSrc = g2Config().platform.url + `/data/datasetDownloadDistribution/${res.id}/${res.distributionId}`
                        const imgNode = $getNodeByKey(nodeKey)
                        if (imgNode && $isImageNode(imgNode)) {
                            imgNode.setSrc(imgSrc)
                        }
                    })

                }
            })
        },
        [editor, draftId],
    )


    useEffect(() => {
        return editor.registerCommand(
            DRAG_DROP_PASTE,
            (files) => {
                (async () => {
                    const filesResult = await mediaFileReader(
                        files,
                        [ACCEPTABLE_IMAGE_TYPES].flatMap((x) => x),
                    );

                    for (const { file, result } of filesResult) {
                        if (isMimeType(file, ACCEPTABLE_IMAGE_TYPES)) {

                            const nodeKey = await createImageNodeWithFixedSize(file, result, editor)

                            uploadImage(editor, file, nodeKey)
                        }
                    }

                })();
                return true;
            },
            COMMAND_PRIORITY_LOW,
        );
    }, [editor]);
    return null;
}