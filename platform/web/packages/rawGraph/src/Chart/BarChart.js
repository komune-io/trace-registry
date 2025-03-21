import { select, scaleBand, scaleLinear, axisBottom, axisLeft } from 'd3';
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core';
import {barchart} from "@rawgraphs/rawgraphs-charts";

const metadata = {
    name: 'Bar Chart',
    id: 'rawgraphs.custombarchart',
    categories: ['proportions'],
    description: 'A grouped vertical bar chart for categorical comparisons.',
    code: 'https://github.com/komune-io/trace-registry',
    icon: barchart.metadata.icon
};

const dimensions = [
    {
        id: 'category',
        name: 'Category',
        validTypes: ['string'],
        required: true,
    },
    {
        id: 'series',
        name: 'Series',
        validTypes: ['string'],
        required: true,
    },
    {
        id: 'value',
        name: 'Value',
        validTypes: ['number'],
        required: true,
        operation: 'sum',
        aggregation: true,
        aggregationDefault: 'sum',
    },
];

const mapData = function (data, mapping, dataTypes, dimensions) {
    const categoryKey = mapping.category?.value;
    const seriesKey = mapping.series?.value;
    const valueKey = mapping.value?.value;

    const valueAggregator = getDimensionAggregator(
        'value',
        mapping,
        dataTypes,
        dimensions
    );

    return data.map(d => ({
        category: d[categoryKey],
        series: d[seriesKey],
        value: valueAggregator(d[valueKey] ? [d[valueKey]] : [0]),
    }));
};

function render(svgNode, data, visualOptions, mapping, originalData, styles) {
    const { width, height, background, colorScale } = visualOptions;

    select(svgNode).selectAll('*').remove();

    const longestLabelLength = Math.max(...data.map(d => d.category.length));
    const dynamicBottomMargin = Math.min(200, Math.max(100, longestLabelLength * 6));

    const margin = { top: 40, right: 40, bottom: dynamicBottomMargin, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = select(svgNode)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const categories = [...new Set(data.map(d => d.category))];
    const series = [...new Set(data.map(d => d.series))];

    const x0 = scaleBand().domain(categories).range([0, chartWidth]).padding(0.2);
    const x1 = scaleBand().domain(series).range([0, x0.bandwidth()]).padding(0.05);
    const y = scaleLinear()
        .domain([0, Math.max(...data.map(d => d.value))])
        .nice()
        .range([chartHeight, 0]);

    svg.append('g')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(axisBottom(x0))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-0.8em")
        .attr("dy", "0.15em")
        .attr("transform", "rotate(-45)")
        .call(text => text.each(function() {
            const bbox = this.getBBox();
            if (bbox.x + bbox.width > chartWidth) {
                select(this).attr("dx", "-1.2em").style("text-anchor", "end");
            }
        }));

    svg.append('g').call(axisLeft(y));

    const bars = svg.append('g');

    bars.selectAll('g')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x0(d.category) + x1(d.series))
        .attr('y', d => y(d.value))
        .attr('width', x1.bandwidth())
        .attr('height', d => chartHeight - y(d.value))
        .attr('fill', d => colorScale ? colorScale(d.series) : 'steelblue');
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
    colorScale: {
        type: 'colorScale',
        label: 'Color scale',
        dimension: 'series',
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
