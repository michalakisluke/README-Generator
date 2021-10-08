const writeFile = require('./utils/writeFile');
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: 'What is the name of your project? (Required)',
         validate: nameInput => {
            if (nameInput) {
                return true;
            } 
            else {
                console.log('Please enter the project name!');
                return false;
            }
         }
        },
        {
         type: 'input',
         name: 'description',
         message: 'Enter a project description. (Required)',
         validate: descInput => {
            if (descInput) {
                return true;
            } 
            else {
                console.log('Please enter a description!');
                return false;
            }
         }
        },
        {
         type: 'input',
         name: 'installation',
         message: 'Please enter any installation requirements for this project, or n/a if there are none.',
         validate: instInput => {
             if (instInput) {
                return true;
             } 
             else {
                console.log('Please enter a response!');
                return false;
             }
            }
        },
        {
         type: 'input',
         name: 'usage',
         message: 'Please enter usage instructions.',
         validate: useInput => {
             if (useInput) {
                return true;
             } 
             else {
                console.log('Please enter a usage instructions!');
                return false;
             }
            }
        },
        {
         type: 'list',
         name: 'licenses',
         message: 'Please choose a license for your project.',
         choices: ['MIT', 'The Unlicense', 'Boost Software License 1.0']
        },
        {
         type: 'input',
         name: 'contribute',
         message: 'Please enter any contributors github usernames, seperated by commas.'
        },
        {
         type: 'input',
         name: 'test',
         message: 'Please enter any testing requirements.'            
        },
        {
         type: 'input',
         name: 'email',
         message: 'Please enter your email address',
         validate: emailInput => {
            if (emailInput) {
               return true;
            } 
            else {
               console.log('Please enter your email!');
               return false;
            }
           }
        },
        {
         type: 'input',
         name: 'github',
         message: 'Please enter your github username',
         validate: gitInput => {
            if (gitInput) {
               return true;
            } 
            else {
               console.log('Please enter your github username!');
               return false;
            }
           }
        }
    ]);  
};

promptUser()
.then(answer => {
   return generateMarkdown(answer)
})
.then(readmeMD => {
   return writeFile(readmeMD)
})
.catch(err => {
   console.log(err);
});

