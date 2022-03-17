inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Please enter a description for your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide usage information.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please provide test instructions.',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'Please select a license for your application.',
            name: 'license',
            choices: [
                {name: 'Apache', value: 'apache'},
                {name: 'GNU', value: 'GNU'},
                {name: 'MIT', value: ' MIT'},
            ]
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'gitHub',
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
        }
    ])
    .then(answers => {
        fs.writeFile('seanREADME.md', JSON.stringify(answers, null, 2), (err) => {
            err ? console.error(err) : console.log('success!')
        });
    });