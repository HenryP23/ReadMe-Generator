// function to generate markdown for README

/** */
function generateMarkdown(data) {
  return `# ${data.title}

- [Description](#Description)
- [Installation](#Installation)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)



## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
[Github Profile](https://github.com/${data.questions})  
You can contact me through my email ${data.email}


`
};

module.exports = generateMarkdown;
