import { select, pie, arc, scaleOrdinal, schemeCategory10 } from 'd3';
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core';

const metadata = {
    name: 'Custom Pie Chart',
    id: 'rawgraphs.custompiechart',
    categories: ['proportions'],
    description: 'A simple pie chart visualization based on categorical data.',
    code: 'https://github.com/your-repo/custom-piechart',
    tutorial: 'https://your-tutorial-link.com',
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
    const sizeKey = mapping.yvalueChart?.value || 'yvalueChart';
    const labelKey = mapping.xlabelChart?.value || 'xlabelChart';
    const colorKey = mapping.color?.value || labelKey;

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
    const color = scaleOrdinal(schemeCategory10);

    const svg = select(svgNode)
        .attr('width', showLegend ? width + legendWidth : width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pieData = pie().value(d => d.size)(data);
    const arcGenerator = arc().innerRadius(0).outerRadius(radius);

    const arcs = svg.selectAll('.arc')
        .data(pieData)
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('d', arcGenerator)
        .attr('fill', d => colorScale ? colorScale(d.data.color) : color(d.data.color));

    arcs.append('text')
        .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', 'white')
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
    background: {
        type: 'color',
        label: 'Background Color',
        default: '#ffffff',
        group: 'colors',
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
