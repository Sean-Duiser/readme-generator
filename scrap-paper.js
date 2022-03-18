inquirer
    .prompt(questions)
    .then((answers) => {
        const readMeTemplate = `
            # Title
            ${answers['title']}
            ## Description
            ${answers['description']}
            ## Table of Contents
            ${answers['installation']}
            ## Installation
            ${answers['usage']}
            ## Usage
            ${answers['contributions']}
            ## License
            ${answers['tests']}
            ## Contributing
            ${answers['license']}
            ## Tests
            ${answers['gitHub']}
            ## Questions
            ${answers['email']}`
        fs.writeFile('README.md', readMeTemplate, (err) => {
            err ? console.error(err) : console.log('success!')
        });
    });