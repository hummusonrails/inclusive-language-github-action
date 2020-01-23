const { languageList } = require('./data/language');
const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {
  events: ['issues', 'pull_request']
  const owner = tools.context.payload.repository.owner.login;
  const repo = tools.context.payload.repository.name;

  if (tools.context.event == 'issue') {
    // Issue details
    const action = tools.context.payload.issue.action
    const title = tools.context.payload.issue.title
    const user = tools.context.payload.issue.user
    const body = tools.context.payload.issue.body
    const issue_number = tools.context.payload.issue.id
  } else if (tools.context.event == 'pull_request') {
  // Pull Request details
    const action = tools.context.payload.pull_request.action
    const title = tools.context.payload.pull_request.title
    const user = tools.context.payload.pull_request.user
    const body = tools.context.payload.pull_request.body
  }

  // Combine title and body and split into array of substrings
  let combined_string = title.concat(body);
  let combined_array = combined_string.split(" ");

  // Check if text includes anything from language list
  if (languageList.indexOf(combined_array) != -1) {
    await tools.github.issues.createComment({
      owner: owner,
      repo: repo,
      issue_number: issue_number,
      body: inclusionMsg
    });
  } else {
    console.log("No language violations found!");
  }
});

const inclusionMsg = `
  Hi there, ${user}! 👋
  \n\n
  We are happy to see you being active in our GitHub organization and want to encourage that activity!\n
  We are also mindful of cultivating an inclusive space and encourage you to avoid language that detracts from
  that inclusivity. Words such as "guys", "dumb" and "crazy" detract from the overall culture where everyone feels valued
  and appreciated in our community.\n
  Please review your recent contribution and revise for inclusivity.\n
  If you are interested in reading more, we recommend this guide from the Government of British Columbia: 
  https://www2.gov.bc.ca/assets/gov/careers/all-employees/working-with-others/words-matter.pdf
  \n\n
  Thank you for helping us create a space where all want to contribute! 💙
`;
