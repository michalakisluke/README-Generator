// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseString;

function renderLicenseBadge(license) {
  if (license.licenses === 'null') {
    return '';
  } else if (license.licenses === 'MIT') {
    licenseString = 'mit'
  } else if (license.licenses === 'The Unlicense') {
    licenseString =  'unlicense'
  } else if (license.licenses === 'Boost Software License 1.0') {
    licenseString = 'bsl-1.0'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
  ${licenseString}
  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  Please reach out to me through github at ${data.github}(https://github.com/${data.github}) or by email at ${data.email}

  `;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
