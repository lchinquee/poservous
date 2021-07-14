  // Function to generate markdown for README
  function generateResults(data) {
    return `# ${data.title}
    
    ${renderLicenseBadge(data)}
  
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
    ${renderLicenseLink(data)}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    Want to see more of my work? Check out my GitHub page:
    [${data.username}](https://github.com/${data.username}) 
  
    If you have any questions, feel free to contact me via email:
    ${data.email}
  
  `;
  }
  
  module.exports = generateResults;