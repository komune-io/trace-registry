import { select, scaleLinear, scalePoint, line, axisBottom, axisLeft } from 'd3';
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core';
import { barchart, linechart } from "@rawgraphs/rawgraphs-charts";

const metadata = {
    name: 'Line Chart',
    id: 'registry.linechart',
    categories: ['trends'],
    description: 'A line chart for tracking changes over a continuous variable.',
    code: 'https://github.com/komune-io/trace-registry',
    icon: linechart.metadata.icon
};

const dimensions = [
    { id: 'series', name: 'Series', validTypes: ['string'], required: true },
    { id: 'xValue', name: 'X-axis', validTypes: ['number'], required: true },
    { id: 'yValue', name: 'Y-axis', validTypes: ['number'], required: true, operation: 'sum', aggregation: true, aggregationDefault: 'sum' },
    { id: 'xLabel', name: 'X-axis Label', validTypes: ['string'], required: false },
    { id: 'yLabel', name: 'Y-axis Label', validTypes: ['string'], required: false },
];

const mapData = function (data, mapping, dataTypes, dimensions) {
    const seriesKey = mapping.series?.value;
    const xKey = mapping.xValue?.value;
    const yKey = mapping.yValue?.value;
    const xLabelKey = mapping.xLabel?.value;
    const yLabelKey = mapping.yLabel?.value;

    const yAggregator = getDimensionAggregator('yValue', mapping, dataTypes, dimensions);

    return data.map(d => ({
        series: d[seriesKey],
        xValue: +d[xKey],
        yValue: yAggregator(d[yKey] ? [d[yKey]] : [0]),
        xLabel: d[xLabelKey] || '',
        yLabel: d[yLabelKey] || '',
    }));
};

function render(svgNode, data, visualOptions, mapping, originalData, styles) {
    const { width, height, background, colorScale } = visualOptions;

    select(svgNode).selectAll('*').remove();

    const margin = { top: 40, right: 150, bottom: 80, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = select(svgNode)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const seriesNames = [...new Set(data.map(d => d.series))];
    const xValues = [...new Set(data.map(d => d.xValue))].sort((a, b) => a - b);

    const xScale = scalePoint().domain(xValues).range([0, chartWidth]).padding(0.5);
    const yScale = scaleLinear()
        .domain([0, Math.max(...data.map(d => d.yValue))])
        .nice()
        .range([chartHeight, 0]);

    svg.append('g')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(axisBottom(xScale));

    svg.append('g').call(axisLeft(yScale));

    svg.append("text")
        .attr("x", chartWidth / 2)
        .attr("y", chartHeight + margin.bottom - 20)
        .style("text-anchor", "middle")
        .text(data.length > 0 ? data[0].xLabel : "");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -chartHeight / 2)
        .attr("y", -margin.left + 20)
        .style("text-anchor", "middle")
        .text(data.length > 0 ? data[0].yLabel : "");

    const lineGenerator = line()
        .x(d => xScale(d.xValue))
        .y(d => yScale(d.yValue));

    const labelPositions = [];

    seriesNames.forEach(series => {
        const seriesData = data.filter(d => d.series === series);

        svg.append('path')
            .datum(seriesData)
            .attr('fill', 'none')
            .attr('stroke', colorScale ? colorScale(series) : 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', lineGenerator);

        const lastPoint = seriesData[seriesData.length - 1];
        labelPositions.push({
            series,
            x: xScale(lastPoint.xValue),
            y: yScale(lastPoint.yValue),
            lastPoint
        });
    });

    labelPositions.sort((a, b) => a.y - b.y);

    let lastY = -Infinity;
    labelPositions.forEach((position, i) => {
        let offset = 0;
        if (position.y - lastY < 15) {
            offset = (i - labelPositions.filter(p => Math.abs(p.y - position.y) < 15).length) * 15;
        }
        lastY = position.y - offset;

        svg.append("text")
            .attr("x", position.x + 10)
            .attr("y", position.y - 10 - offset)
            .style("font-size", "12px")
            .style("fill", colorScale ? colorScale(position.series) : 'steelblue')
            .style("text-anchor", "start")
            .style("dominant-baseline", "middle")
            .text(position.series);
    });
}

const visualOptions = {
    width: { type: 'number', label: 'Width', default: 800, group: 'artboard' },
    height: { type: 'number', label: 'Height', default: 600, group: 'artboard' },
    background: { type: 'color', label: 'Background Color', default: '#ffffff', group: 'colors' },
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
