// TODO: Create a function that returns a license badge based on which license is passed in
let licenseString;
let licenseRender;

function renderLicenseBadge(license) {
  if (license.licenses === 'MIT') {
    licenseString = 'mit'
  } else if (license.licenses === 'The Unlicense') {
    licenseString =  'unlicense'
  } else if (license.licenses === 'Boost Software License 1.0') {
    licenseString = 'bsl-1.0'
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(licenseString) {
  if (licenseString === 'mit') {
    licenseRender = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseString=== 'unlicense') {
    licenseRender =  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (licenseString === 'bsl-1.0') {
    licenseRender = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
}

function splitContributions(data) {
  let contString = data.contribute;
  let contArr = contString.split(',');
  for (i = 0; i < contArr.length; i++) {
    return `[${contArr[i]}](https://github.com/${contArr[i]})`;
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  splitContributions(data);
  renderLicenseBadge(data);
  renderLicenseLink(licenseString);
  return `# ${data.name}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseRender}

  ## Contributing
  ${splitContributions(data)}

  ## Tests
  ${data.test}

  ## Questions
  Please reach out to me through github at [${data.github}](https://github.com/${data.github}) or by email at ${data.email}

  `;
}

module.exports = generateMarkdown;

