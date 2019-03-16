# Setup Travis CI

Let's get this repository set for TravisCI so that TravisCI can run the unit/integration tests and then notify the GitHub Hooks for the same.

## Steps

### Setup CI using TravisCI

- Create an account on [TravisCI.org](https://travis-ci.org)
- Add your GitHub project repository from TravisCI Dashboard
- In your local repo for the same project, add a new file, `.travis.yml` at the root of the project folder
  - Add the langauge for your project
  - You can also add the version of your language
  - You can also add `after success` tasks (What to so after all the tests are successful)
    - Like we want the code coverage report once all test cases are passed
- Let's get the Badge 😍 (Don't forgot to choose the branch while checking for the badge)
- Push the changes to GitHub

#### Example `.travis.yml` file

```yml
language: node_js
node_js:
  - '8.9.3'
after_success:
  - npm install -D coveralls
  - npm run coverage
  - npm run coveralls
```

### Setup Coveralls for Code Coverage Badge

- Go to [Coveralls.io](https://coveralls.io/)
- Add your GitHub project repo
- Click on `Details`, you'll get your repo token
- Scroll down further to get the Code Coverage Badge
- Choose markdown and paste the code in `README.md` 😍
- In your local project repo, create a `.coveralls.yml`
- Push the changes to GitHub

#### Example `.coveralls.yml` file

```yml
service_name: travis
repo_token: your_token
```
