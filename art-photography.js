var xlsx = require("xlsx")
var fs = require('fs')
var dataPathExcelToRead = "book-covers/Art-Photography/Art-Photography.xlsx"
var wb = xlsx.readFile(dataPathExcelToRead)
var sheetName = wb.SheetNames[0]
var sheetValue = wb.Sheets[sheetName]
var htmlData = xlsx.utils.sheet_to_html(sheetValue);
console.log(htmlData)