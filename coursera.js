/**
 * git init
 * 
 * git status
 * 
 * git add .
 * 
 * git commit -m "first commit"
 * 
 * git log --oneline
 * 
 * hello
 * 
 * To check out the index.html from the second commit, find the number of
 *  the second commit using the git log, and then type the following at the prompt:
 * 
 * git checkout <second commit's number> index.html
 * 
 * To discard the effect of the previous operation 
 * and restore index.html to its state at the end of the third commit, type:
 * 
 * git reset HEAD index.html
 * 
 * Then type the following at the prompt:
 * 
 * git checkout -- index.html
 * 
 * You can also use git reset to reset the staging area to the last commit without disturbing the working directory.
 * 
 * git pull --rebase origin master
 * 
 *  git push -u origin master
 * 
 * git remote add origin <repository URL>
 * 
 * git push -u origin master
 * 
 * $ git remote rm origin
 * 
 * git clone <repository URL>
 * 
 * git push origin master:some-new-branch-name
 * 
 * npm init
 * 
 * npm audit fix // Fix vulnurability
 * 
 * alias npp='notepad++ -multiInst -nosession'
 * 
 * git config core.editor "notepad++ -multiInst -nosession"
 * 
 * git config --global -e
 * 
 * alias 'subl= "/c/Program Files/Sublime Text 3/subl.exe"'
 * 
 *  subl Filename.txt
 * 
 * $ export GIT_EDITOR="subl --wait --new-window"
 * 
 * $ git remote -v
 * 
 * use "git rebase --edit-todo" to view and edit
 * 
 * use "git commit --amend" to amend the current commit
 * 
 * use "git rebase --continue" once you are satisfied with your changes
 * 
 * git branch -a
 *
 * git branch -d <branch name> //to remove branch
 * 
 * git fetch -p // update branch locally
 * 
 * $ git tag -a v1.4 -m "my version 1.4"
$ git tag
v0.1
v1.3
v1.4
$ git tag v1.4-lw
$ git tag
* git remote -v // Show online/remote github

npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save

npm start // Starts lite server

npm install font-awesome@4.7.0 --save
 http://fontawesome.io/ 

npm install bootstrap-social@5.1.1 --save // social icons
https://lipis.github.io/bootstrap-social/

    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
 
 npm install -g less@2.7.2 // install less file
 $ lessc css/styles.less styles.css // start less

 $ npm install --save-dev node-sass@4.7.2 // Install Sass

 git branch -v -a // See all remote branches
  git config --global --edit // Call editor to manually edit global var




  #################### For manglin scripts ####################
 npm install --save-dev rimraf@2.6.2 // Helps clean folder
   npm -g install copyfiles@2.0.0 // Helps copy file from one folder to another

   npm install -g imagemin-cli@3.0.0 --unsafe-perm=true --allow-root // Helps compress images
  
  
   npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7 // compres and uglify css and js
  ######################## Mangle stops #########################

  ############## GRUNT INSTALLATION ###########
   npm install -g grunt-cli@1.2.0 // Helps us use grunt
   npm install grunt@1.0.2 --save-dev // Set up grunt locally
npm install --save-dev grunt-sass@2.1.0 // Grunt to convert scss to css
npm install --save-dev time-grunt@1.4.0 jit-grunt@0.10.0  // Use time stamp and push necessar grunt dependencies into file
$ npm install --save-dev grunt-contrib-watch@1.0.0 // Grunt watch to watch for changes
$ npm install --savwe-dev grunt-browser-sync@2.2.0 // Server files from our project to browser

$ npm install --save-dev grunt-contrib-copy@1.0.0 grunt-contrib-clean@1.1.0 // Allows us copy and clean folders
$ npm install --save-dev grunt-contrib-imagemin@2.0.1 // for compressing images


 npm install grunt-contrib-concat@1.0.1 --save-dev
 npm install grunt-contrib-cssmin@2.2.1 --save-dev
 npm install grunt-contrib-htmlmin@2.4.0 --save-dev
 npm install grunt-contrib-uglify@3.3.0 --save-dev
 npm install grunt-filerev@2.3.1 --save-dev
 npm install grunt-usemin@3.1.1 --save-de

 grunt biuld --force /7 builds dist folder
   ############# END GRUNT #########################

   

   ######################## GULP #########################

     npm install -g gulp-cli@2.0.1 // installs gulp
     npm install gulp@3.9.1 --save-dev // Install gulp locally

     npm install gulp-sass@3.1.0  // For sass
     npm browser-sync@2.23.6 --save-dev // For browser sync to config both one after another.

   ######################### END GULP #########################


   Check update of all dependecies in package.json and prompt for update
   $ npm i -g npm-check-updates
   $ ncu -u

   $ npm outdated // Show outdated dependencies
*/