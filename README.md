# Inclusive Language Check GitHub Action

Check for inclusive language in Issues and Pull Requests. If non-inclusive language is found suggest to the author to change their language to more incluive alternatives.

* [Usage](#usage)
* [License](#license)

## Usage

To use this action in your project, please follow the [instructions on GitHub](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow) for initiating a workflows folder structure in your repository, if you have not done so already. 

Once you have your workflow structure set up, you can create a new workflow YAML file inside `/.github/workflows/` that contains the following:

``` 
name: Check Inclusive Language
on: [issues, pull_request]
jobs:
  check-language:
    runs-on: ubuntu-latest
    steps:
    - name: check-language
      uses: benhayehudi/inclusive-language-github-action@master
    env:
      GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```

At this point, any `opened`, `reopened` or `edited` event `action` will trigger the action to post a comment encouraging inclusion if the text in that action contains a word from the non-inclusive word list contained in [language.js](data/language.js).

## License

This project is under the [MIT License](LICENSE.txt)