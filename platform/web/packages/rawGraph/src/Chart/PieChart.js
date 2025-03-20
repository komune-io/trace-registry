import { select, pie, arc, scaleOrdinal, schemeCategory10 } from 'd3';
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core';
import {piechart} from "@rawgraphs/rawgraphs-charts";

const metadata = {
    name: 'Pie Chart',
    id: 'registry.piechart',
    categories: ['proportions'],
    description: 'A simple pie chart visualization based on categorical data.',
    code: 'https://github.com/komune-io/trace-registry',
    icon: piechart.metadata.icon
};

const dimensions = [
    {
        id: 'xlabelChart',
        name: 'Category',
        validTypes: ['string'],
        required: true,
    },
    {
        id: 'yvalueChart',
        name: 'Value',
        validTypes: ['number'],
        required: true,
        operation: 'sum',
        aggregation: true,
        aggregationDefault: 'sum',
    },
    {
        id: 'color',
        name: 'Color',
        validTypes: ['string'],
        required: false,
    },
];

const mapData = function (data, mapping, dataTypes, dimensions) {
    const sizeKey = mapping.yvalueChart?.value;
    const labelKey = mapping.xlabelChart?.value;
    const colorKey = mapping.color?.value;

    const sizeAggregator = getDimensionAggregator(
        'yvalueChart',
        mapping,
        dataTypes,
        dimensions
    );

    return data.map(d => ({
        label: d[labelKey],
        size: sizeAggregator(d[sizeKey] ? [d[sizeKey]] : [0]),
        color: d[colorKey] || labelKey,
    }));
};

function render(svgNode, data, visualOptions, mapping, originalData, styles) {
    const { width, height, background, showLegend, legendWidth, colorScale } = visualOptions;

    select(svgNode).selectAll('*').remove();

    const radius = Math.min(width, height) / 2;

    const svg = select(svgNode)
        .attr('width', showLegend ? width + legendWidth : width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pieData = pie().value(d => d.size).sort(null)(data);
    const arcGenerator = arc().innerRadius(0).outerRadius(radius);

    const getAngle = d => {
        const angle = (180 / Math.PI * (d.startAngle + d.endAngle) / 2 - 90);
        return angle > 90 ? angle - 180 : angle; // Ensure labels on small slices are rotated correctly
    };
    const arcs = svg.selectAll('.arc')
        .data(pieData)
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('d', arcGenerator)
        .attr('fill', d => colorScale ? colorScale(d.data.color) : color(d.data.color));

    arcs.append('text')
        .attr('transform', d => {
            const pos = arcGenerator.centroid(d);
            const angle = getAngle(d);
            const textLength = d.data.label.length * 16; // Approximate text width
            const arcWidth = Math.abs(d.endAngle - d.startAngle) * radius;
            return arcWidth > textLength ? `translate(${pos})` : `translate(${pos}) rotate(${angle})`;
        })
        .attr('dy', 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', 'white')
        .style('font-weight', 'bold')
        .text(d => d.data.label);
}

const visualOptions = {
    width: {
        type: 'number',
        label: 'Width',
        default: 800,
        group: 'artboard',
    },
    height: {
        type: 'number',
        label: 'Height',
        default: 600,
        group: 'artboard',
    },
    showLegend: {
        type: 'boolean',
        label: 'Show legend',
        default: false,
        group: 'artboard',
    },
    legendWidth: {
        type: 'number',
        label: 'Legend width',
        default: 200,
        group: 'artboard',
        disabled: {
            showLegend: false,
        },
        container: 'width',
        containerCondition: {
            showLegend: true,
        },
    },
    colorScale: {
        type: 'colorScale',
            label: 'Color scale',
            dimension: 'color',
            default: {
                scaleType: 'ordinal',
                    interpolator: 'schemeCategory10',
                },
        group: 'colors',
    },
};

export default {
    metadata,
    dimensions,
    mapData,
    render,
    visualOptions,
};
