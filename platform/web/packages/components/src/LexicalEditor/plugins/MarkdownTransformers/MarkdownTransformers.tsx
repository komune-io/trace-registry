/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    CHECK_LIST,
    ELEMENT_TRANSFORMERS,
    ElementTransformer,
    MULTILINE_ELEMENT_TRANSFORMERS,
    MultilineElementTransformer,
    TEXT_FORMAT_TRANSFORMERS,
    TEXT_MATCH_TRANSFORMERS,
    TextMatchTransformer,
    Transformer,
} from '@lexical/markdown';
import {
    $createTableCellNode,
    $createTableNode,
    $createTableRowNode,
    $isTableCellNode,
    $isTableNode,
    $isTableRowNode,
    TableCellHeaderStates,
    TableCellNode,
    TableNode,
    TableRowNode,
} from '@lexical/table';
import {
    $createParagraphNode,
    $isParagraphNode,
    $isTextNode,
    LexicalNode,
} from 'lexical';
import { $createImageNode, $isImageNode, ImageNode } from '../ImagesPlugin';
import { $createLayoutContainerNode, $createLayoutItemNode, $isLayoutContainerNode, $isLayoutItemNode, LayoutContainerNode, LayoutItemNode } from '../LayoutPlugin';

export const IMAGE: TextMatchTransformer = {
    dependencies: [ImageNode],
    export: (node) => {
        if (!$isImageNode(node)) {
            return null;
        }

        return `![${node.getAltText()}](${node.getSrc()})`;
    },
    importRegExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))/,
    regExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))$/,
    replace: (textNode, match) => {
        const [, altText, src] = match;
        const imageNode = $createImageNode({
            altText,
            maxWidth: 800,
            src,
        });
        textNode.replace(imageNode);
    },
    trigger: ')',
    type: 'text-match',
};

// Very primitive table setup
const LAYOUTCONTAINER_REG_EXP_START = /===COL===/;
const LAYOUTCONTAINER_REG_EXP_END = /===\/COL===/;
const LAYOUTITEM_REG_EXP = /---(\d+)---/;


export const LAYOUT: MultilineElementTransformer = {
    dependencies: [LayoutContainerNode, LayoutItemNode],
    export: (node: LexicalNode) => {
        if (!$isLayoutContainerNode(node)) {
            return null;
        }

        const output: string[] = ["===COL==="];
        const itemsPercentages = gridTemplateToPercentages(node.getTemplateColumns())

        node.getChildren().forEach((layoutItem, index) => {
            if (!$isLayoutItemNode(layoutItem)) {
                return
            }
            output.push(`---${itemsPercentages[index]}---`)
            output.push($convertToMarkdownString(MARKDOWN_TRANSFORMERS, layoutItem))
        })

        output.push("===/COL===")

        return output.join('\n');
    },
    regExpEnd: {
        regExp: LAYOUTCONTAINER_REG_EXP_END,
    },
    regExpStart: LAYOUTCONTAINER_REG_EXP_START,
    replace: (
        rootNode,
        _children,
        _startMatch,
        _endMatch,
        linesInBetween,
        _isImport,
    ) => {
        let items: {percentage: number, node: LayoutItemNode}[] = []
        let currentChildren = ""
        let currentItem: {percentage: number, node: LayoutItemNode} | undefined = undefined
        
        const storeCurrentInArray = () => {
            if (currentChildren && currentItem) {
                $convertFromMarkdownString(currentChildren, MARKDOWN_TRANSFORMERS, currentItem.node);
            }
            if (currentItem) {
                if (!currentChildren) {
                    currentItem.node.append($createParagraphNode())
                }
                items.push(currentItem)
            }
        }

        linesInBetween?.forEach((line) => {
            const match = line.match(LAYOUTITEM_REG_EXP)
            if (match) {
                
                storeCurrentInArray()
            
                currentItem = {
                    percentage: Number(match[1]),
                    node: $createLayoutItemNode()
                }
                currentChildren = ""
                return
            }

            if (currentItem) {
                currentChildren += line + "\n"
            }

        })

        storeCurrentInArray()

        const allPercentages = items.map((item) => item.percentage)
        const gridTemplate = percentagesToGridTemplate(allPercentages)
        const container = $createLayoutContainerNode(gridTemplate);

        items.forEach((item) => {
            container.append(
                item.node
            )
        })
   
        rootNode.append(container)

    },
    type: 'multiline-element',
};

const gridTemplateToPercentages = (gridTemplate: string) => {
    // Split the grid template into individual 'fr' values
    const frValues = gridTemplate.split(' ').map(value => parseFloat(value.replace('fr', '')));
    
    // Calculate the total sum of the fr values
    const totalFr = frValues.reduce((sum, value) => sum + value, 0);
    
    // Convert each fr value to a percentage
    const percentages = frValues.map(value => value / totalFr * 100)
    
    return percentages;
}

const percentagesToGridTemplate = (percentages: number[]) => {
    const minPercentage = Math.min(...percentages);
    
    // Calculate the fractional values based on the smallest percentage
    const fractionalValues = percentages.map(value => value / minPercentage);
    
    // Join the fractional values into a string for grid-template
    return fractionalValues.map(fr => `${fr}fr`).join(' ');
}

// Very primitive table setup
const TABLE_ROW_REG_EXP = /^(?:\|)(.+)(?:\|)\s?$/;
const TABLE_ROW_DIVIDER_REG_EXP = /^(\| ?:?-*:? ?)+\|\s?$/;

export const TABLE: ElementTransformer = {
    dependencies: [TableNode, TableRowNode, TableCellNode],
    export: (node: LexicalNode) => {
        if (!$isTableNode(node)) {
            return null;
        }

        const output: string[] = [];

        for (const row of node.getChildren()) {
            const rowOutput = [];
            if (!$isTableRowNode(row)) {
                continue;
            }

            let isHeaderRow = false;
            for (const cell of row.getChildren()) {
                // It's TableCellNode so it's just to make flow happy
                if ($isTableCellNode(cell)) {
                    rowOutput.push(
                        //@ts-ignore
                        $convertToMarkdownString(MARKDOWN_TRANSFORMERS, cell).replace(
                            /\n/g,
                            '\\n',
                        ),
                    );
                    if (cell.__headerState === TableCellHeaderStates.ROW) {
                        isHeaderRow = true;
                    }
                }
            }

            output.push(`| ${rowOutput.join(' | ')} |`);
            if (isHeaderRow) {
                output.push(`| ${rowOutput.map((_) => '---').join(' | ')} |`);
            }
        }

        return output.join('\n');
    },
    regExp: TABLE_ROW_REG_EXP,
    replace: (parentNode, _1, match) => {
        // Header row
        if (TABLE_ROW_DIVIDER_REG_EXP.test(match[0])) {
            const table = parentNode.getPreviousSibling();
            if (!table || !$isTableNode(table)) {
                return;
            }

            const rows = table.getChildren();
            const lastRow = rows[rows.length - 1];
            if (!lastRow || !$isTableRowNode(lastRow)) {
                return;
            }

            // Add header state to row cells
            lastRow.getChildren().forEach((cell) => {
                if (!$isTableCellNode(cell)) {
                    return;
                }
                cell.setHeaderStyles(
                    TableCellHeaderStates.ROW,
                    TableCellHeaderStates.ROW,
                );
            });

            // Remove line
            parentNode.remove();
            return;
        }

        const matchCells = mapToTableCells(match[0]);

        if (matchCells == null) {
            return;
        }

        const rows = [matchCells];
        let sibling = parentNode.getPreviousSibling();
        let maxCells = matchCells.length;

        while (sibling) {
            if (!$isParagraphNode(sibling)) {
                break;
            }

            if (sibling.getChildrenSize() !== 1) {
                break;
            }

            const firstChild = sibling.getFirstChild();

            if (!$isTextNode(firstChild)) {
                break;
            }

            const cells = mapToTableCells(firstChild.getTextContent());

            if (cells == null) {
                break;
            }

            maxCells = Math.max(maxCells, cells.length);
            rows.unshift(cells);
            const previousSibling = sibling.getPreviousSibling();
            sibling.remove();
            sibling = previousSibling;
        }

        const table = $createTableNode();

        for (const cells of rows) {
            const tableRow = $createTableRowNode();
            table.append(tableRow);

            for (let i = 0; i < maxCells; i++) {
                tableRow.append(i < cells.length ? cells[i] : $createTableCell(''));
            }
        }

        const previousSibling = parentNode.getPreviousSibling();
        if (
            $isTableNode(previousSibling) &&
            getTableColumnsSize(previousSibling) === maxCells
        ) {
            previousSibling.append(...table.getChildren());
            parentNode.remove();
        } else {
            parentNode.replace(table);
        }

        table.selectEnd();
    },
    type: 'element',
};

function getTableColumnsSize(table: TableNode) {
    const row = table.getFirstChild();
    return $isTableRowNode(row) ? row.getChildrenSize() : 0;
}

const $createTableCell = (textContent: string): TableCellNode => {
    textContent = textContent.replace(/\\n/g, '\n');
    const cell = $createTableCellNode(TableCellHeaderStates.NO_STATUS);
    $convertFromMarkdownString(textContent, MARKDOWN_TRANSFORMERS, cell);
    return cell;
};

const mapToTableCells = (textContent: string): Array<TableCellNode> | null => {
    const match = textContent.match(TABLE_ROW_REG_EXP);
    if (!match || !match[1]) {
        return null;
    }
    return match[1].split('|').map((text) => $createTableCell(text));
};

export const MARKDOWN_TRANSFORMERS: Array<Transformer> = [
    TABLE,
    LAYOUT,
    IMAGE,
    CHECK_LIST,
    ...ELEMENT_TRANSFORMERS,
    ...MULTILINE_ELEMENT_TRANSFORMERS,
    ...TEXT_FORMAT_TRANSFORMERS,
    ...TEXT_MATCH_TRANSFORMERS,
];