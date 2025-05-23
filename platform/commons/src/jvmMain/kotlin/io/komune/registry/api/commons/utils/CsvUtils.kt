package io.komune.registry.api.commons.utils

import com.fasterxml.jackson.databind.ObjectWriter
import com.fasterxml.jackson.dataformat.csv.CsvMapper
import com.fasterxml.jackson.dataformat.csv.CsvSchema
import org.apache.commons.csv.CSVFormat
import org.apache.commons.csv.CSVParser
import org.apache.commons.csv.QuoteMode
import java.io.BufferedReader
import java.io.ByteArrayOutputStream
import java.io.InputStream
import java.io.OutputStream
import java.io.Reader
import kotlin.math.max

fun InputStream.toCsvParser(delimiter: Char): CSVParser {
    return toCsvParser(2, listOf(delimiter))
}

fun InputStream.toCsvParser(columnCount: Int, potentialDelimiters: Collection<Char> = listOf(',', ';')): CSVParser {
    val reader = this.bufferedReader(Charsets.UTF_8)
    val delimiter = reader.detectDelimiter(potentialDelimiters, columnCount)
    reader.removeUtf8Bom()
    return reader.toCsvParser(delimiter ?: ',')
}

private fun Reader.toCsvParser(delimiter: Char): CSVParser {
    return CSVFormat.DEFAULT.builder().also {
        it.setHeader()
        it.setDelimiter(delimiter)
        it.setAllowMissingColumnNames(true)
        it.setTrim(true)
        it.setIgnoreHeaderCase(true)
        it.setQuoteMode(QuoteMode.MINIMAL)
    }.get().parse(this)
}

private fun BufferedReader.detectDelimiter(availableDelimiters: Collection<Char>, minColumnCount: Int = 2): Char? {
    mark(1024)
    val headerLine = readLine()
        ?: return null
    reset()

    val minOccurrenceCount = max(minColumnCount - 1, 1)

    return availableDelimiters.firstOrNull { delimiter ->
        headerLine.count { it == delimiter } >= minOccurrenceCount
    }
}

/**
 * Remove UTF-8 '﻿' unreadable character at the beginning of the buffer if present
 */
private fun BufferedReader.removeUtf8Bom() {
    val utf8Bom = 0xfeff
    mark(1)
    if (read() != utf8Bom) {
        reset()
    }
}

fun csvWriter(columns: CsvColumns): ObjectWriter = CsvMapper().writer().with(columns.toCsvSchema())

fun ObjectWriter.writeToByteArray(values: Any): ByteArray = ByteArrayOutputStream().use { output ->
    output.writeCsvEncoding()
    writeValue(output, values)
    output.toByteArray()
}

fun OutputStream.writeCsvEncoding() {
    write(0xEF)
    write(0xBB)
    write(0xBF)
}

abstract class CsvColumns {
    protected abstract val columnNames: Iterable<String>

    fun toCsvSchema(): CsvSchema {
        return CsvSchema.builder()
            .setUseHeader(true)
            .setColumnSeparator(',')
            .setNullValue("")
            .addColumns(columnNames, CsvSchema.ColumnType.NUMBER_OR_STRING)
            .build()
    }
}
