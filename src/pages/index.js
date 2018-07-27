import React from 'react'
import Link from 'gatsby-link'
import Code from '../components/syntax'

const IndexPage = () => (
  <div>
    <h1>Hello Developers! &nbsp;<i className="em em-wave"></i></h1>
    <h3>Welcome to the GitHub Workshop by GDG Indore</h3>
    <p>For this exercise you will be contributing to this project with your profile details.
    Once your pull request is merged, your profile will be visible in the <Link to="/submissions/">Submissions </Link>section of this page.
      Excited? <i className="em em-grinning_face_with_star_eyes"></i> Let&apos;s begin!
    </p>

    <h3>Step 1</h3>
    <p>
      Visit the <a target="_blank" href="https://github.com/codeIndore/git-flow-workshop"> GitHub repository </a> of this project and fork the project to your account.
       Click on the fork button on the top right corner of the repository page to do it. Once done, GitHub will take you to the forked copy in your account.
      <Code code="https://github.com/codeIndore/git-flow-workshop"/>
    </p>
    <h3>Step 2.1</h3>
    <p>
      Clone the forked repository to your local machine. Click on the big green button saying "Clone or download" and copy the https url of your repository.
      Open the terminal on Linux or Mac or the Git Bash on Windows. Now navigate to your desired directory and type the following command. Replace the link with the URL of your repository and hit Enter.
      <Code code="git clone https://github.com/YOUR_USERNAME/git-flow-workshop.git"/>
    </p>
    <h3>OR</h3>
    <h3>Step 2.2</h3>
    <p>
        Use the GitHub web editor to make the required changes in the next steps. For this workshop, use this method only if the previous method does not work for you.
    </p>
    <h3>Step 3</h3>
    <p>
      Before you start working on any changes, create an Issue in the repository to notify the maintainers of your activity.
      This may change for different projects so be sure to check the contributing guidelines of any project you wish to contribute to.
      For this exercise, open a new issue stating that you need to add your profile and get the issue assigned to yourself.
    </p>
    <h3>Step 4</h3>
    <p>
      You will be making the desired changes now. First move to the cloned directory.
      <Code code="cd git-flow-workshop"/>
      Before you make any changes to the code, make sure you&apos;re working on a different branch and not in the master branch. To create a new branch,
      enter the following command while in the git repository.
      <Code code="git branch YOUR_USERNAME-profile"/>
      Replace <i>YOUR_USERNAME</i> with your GitHub username. Branch names can be anything as long as they are distinct from each other. For the purpose of this exercise
      , use the recommended branch name, i.e. USERNAME-profile. For example: <i>git branch adeen-s-profile</i>.<br/>
       Once the new branch has been created, switch to the newly created branch. To do so, execute the following command.
      <Code code="git checkout YOUR_BRANCH_NAME"/>
    </p>
    <h3>Step 5</h3>
    <p>
      In your <i className="em em-card_file_box"></i> file manager/terminal/editor navigate to the downloaded repo. Open the sub-directory <i className="em em-file_folder"></i><b>src/profiles/</b>. and create a new <b>.md</b> file with your username as the filename with a <b>.md</b> extension.<br/>
      It should look like <b>YOUR_USER_NAME.md</b>, <i>eg: adeen-s.md </i><br/>
      Open this file in your favourite editor and fill the details as below in the frontmatter of the markdown file.
      <br/>
      <br/>
      <i className="em em-page_facing_up"></i><i>YOUR_USER_NAME.md</i>
      <p className="code">
      ---<br/>
      username: YOUR_USER_NAME<br/>
      fullname: YOUR_FULL_NAME<br/>
      ---
      </p>
      <p>
        Note that the hyphens "---" are also part of the file. Once you finish adding the content, save the file.
      </p>
    </p>
    <h3>Step 6</h3>
    <p>
      Commit and push the changes<i className="em em-white_check_mark"></i><br/>
      First you need to stage all the changes you made. To do so, execute following command from the project root directory
      <Code code="git add ."/>
      The above command stages all the changes, now commit these changes with a suitable message.
      <Code code='git commit -m "YOUR_COMMIT_MESSAGE"'/>
    </p>
    <h3>Step 7</h3>
    <p>
      Let's push the changes to your repository!<i className="em em-arrow_up"></i> execute the following command to push all the changes to the forked copy in your GitHub account.
      <Code code="git push -u origin YOUR_BRANCH_NAME"/>
    </p>
    <h3>Step 8</h3>
    <p>
      Now, open your web browser and visit the <a target="_blank" href="https://github.com/codeIndore/git-flow-workshop"> original repository on GitHub</a>. If the changes have been pushed to your forked copy, there will be an option saying "New Pull Request" in the original repository.
      Click on this option, and on the next page choose the master branch of the original repo as the <i>base fork</i> and your created-branch name on your fork as the <i>head fork</i> (Choose branch you created and not the master branch). Then click on the create pull request button.<br />
      Now add the commit message and describe the purpose of the pull request before you submit the pull request and you are all done!<br />
      Wait for a reviewer to review your PR and merge it into master.<br /><br /> Once it has been successfully merged, your profile will be visible in the submissions tab of this website. <i className="em em-trophy"></i>
    </p>
  </div>
)

export default IndexPage
