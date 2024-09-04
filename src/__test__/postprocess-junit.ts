import fs from 'fs';
import xml2js from 'xml2js'

const inputFile = '../..//report.xml';
const outputFile = '../../report.xml';


try {
    const data = fs.readFileSync(inputFile, 'utf8');
    console.log("🚀 ~ data:", data)
    const testSuites = data.testsuites.testsuite;

    testSuites.forEach((testSuite) => {
        if (testSuite.testcase) {
            testSuite.testcase.forEach((testCase) => {
                testCase.$.customAttribute = 'customValue';
            });
        }
    });

    // Convert the modified object back to XML
    const builder = new xml2js.Builder();
    const customizedXml = builder.buildObject(data);

    // Write the customized XML to a new file
    fs.writeFile(outputFile, customizedXml, (err) => {
        if (err) {
            console.error(`Error writing customized JUnit XML file: ${err}`);
            return;
        }

        console.log(`Customized JUnit report saved to ${outputFile}`);
    });

} catch (err) {
    console.error(err);
}
