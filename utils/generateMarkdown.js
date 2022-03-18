// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (data.license) {
    case 'apache': var apacheLicense = document.createElement('img');
      apacheLicense.setAttribute('src', 'https://img.shields.io/badge/license-apache-blue');
      'README.md'.appendFile(apacheLicense);
      break;
    case 'GNU': var GNULicense = document.createElement('img');
      GNULicense.setAttribute('src', 'https://img.shields.io/badge/license-GNU-blue');
      'README.md'.appendFile(GNULicense);
      break;
    case 'MIT': var MITLicense = document.createElement('img');
      MITLicense.setAttribute('src', 'https://img.shields.io/badge/license-MIT-blue');
      'README.md'.appendFile(MITLicense);
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data['title']}
  ## Description
  ${data['description']}
  ## Installation
  ${data['installation']}
  ## Usage
  ${data['usage']}
  ## Contributing
  ${data['contributions']}
  ## License
  ${data['license']}
  ## Tests
  ${data['tests']}
  ## GitHub
  ${data['gitHub']}
  ## Questions
  ${data['email']}
  `;
}

module.exports = generateMarkdown;
