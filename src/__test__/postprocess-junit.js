const fs = require('fs');
const jsdom = require('jsdom');
const path = require('path');

const currentPath = process.cwd();

const inputFile = path.join(currentPath, 'raw-report.xml');
const outputFile = path.join(currentPath, 'report.xml');


try {
    const xmlString = fs.readFileSync(inputFile, 'utf8');

    let dom = new jsdom.JSDOM(xmlString, { contentType: 'text/xml' });
    const doc = dom.window.document;

    doc.querySelectorAll('failure').forEach(node => node.removeAttribute('type'))
    doc.querySelectorAll('failure').forEach(node => node.removeAttribute('message'));

    // Write the customized XML to a new file
    fs.writeFile(outputFile, dom.serialize(), (err) => {
        if (err) {
            console.error(`Error writing customized JUnit XML file: ${err}`);
            return;
        }

        console.log(`Customized JUnit report saved to ${outputFile}`);
    });

} catch (err) {
    console.error(err);
}
