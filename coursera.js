victory/**
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
 * $ git clone -b feature/Bewerberliste https://gitea.sensin.eu/STZSensIn/Online-Application.git // Clone a particular branch
 *
 * $ git merge origin/feature/Bewerberliste  --allow-unrelated-histories /7 Allow unrelated history
 *
 *  git rebase --abort // Undo rebase
 *
 * $ git push --force --set-upstream origin master:programming // Force push to another branch
 *
 * $ git ls-tree --name-only -r master // See files on a branch
 * git log --name-status
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

git checkout -- index.html // unstage

git rm --cached <filename> // unstage

npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save

npm install lite-server --save-dev
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
  npm install --save-dev onchange@3.3.0 parallelshell@3.0.2 // watching sass not for mangling

 npm install --save-dev rimraf@2.6.2 // Helps clean folder dist
   npm -g install copyfiles@2.0.0 // Helps copy font file from one folder to another

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
 npm install grunt-usemin@3.1.1 --save-dev

npm install grunt-contrib-compass --save-dev /7 For error correction
 grunt build --force // builds dist folder
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

   $ npm i gh-pages // Creating gh-pages from terminal

   $ git push origin --delete feature/login delete remote branch

   $ git branch -d feature/login // delete local branch

   $ yarn add font-awesome@4.7.0 // yarn add font
   $ yarn add bootstrap-social@5.1.1
   $ yarn add react-router-dom@4.2.2 // Integerates react router

   $ yarn global add create-react-app@1.5.2

   $ create-react-app confusion

   $ yarn start

   $ git commit --amend -m "Update roles for netlify-cms git gateway"
   $ git commit -m "Subject" -m "Description..."


   ##### REDUX #########################

   $ yarn add redux@3.7.2
   $ yarn add react-redux@5.0.7
   $ yarn add react-redux-form@1.16.8
   # npm install --save redux // To install also React library.

   $ npm install --save redux react-redux

   ###########################################
   ####################

   $ git checkout otherbranch myfile.txt // Pull in a branch from dest to current branch
   $ git reset --soft HEAD~1 // Undo a commit
   $ git reset --hard HEAD~1 // Destructive!!!! Takes you to last commit.
   $ git revert HEAD // Restes your head
   $ git reset --merge ORIG_HEAD

   ################# Redux Thunk ################

   $ yarn add redux-thunk@2.2.0
   $ yarn add redux-logger@3.0.6
   $ npm install --save redux-thunk

   ##################### End Thunk ##################

   ############## Installing JSON server ###############

      $ npm install json-server -g // install json-server as global model
      $ json-server --watch db.json -p 3001 -d 2000 // Starts json server. "-d 200" for 2 sec delay.
      "-p 3001" where our port runs.
  ############### End JSON #############################



  ################### React animation ################

  $ yarn add react-transition-group@2.3.0
  $ npm insrtall react-transition-group@2.3.0
  $ yarn add react-animation-components@3.0.0
  $ yarn add prop-types@15.6.0
  ##################### End Animation ######################


  $ git push origin --all // This pushes all local branches to remote
  $ git push origin --tag // This pushes all local tags to remote

  $ git push origin --mirror // This pushes all locals including remotes to remote

  ##################### Vue 2 #####################

  $ npm install --global vue-cli // Set up Vue
  $ vue init webpack-simple myproject // creat project
  $ npm install axios --save // Installing axios.

  $ vue init webpack routing // For routing
  ########################## End vue #######################

  ######################### Vue 3 #########################

  $ npm install -g @vue/cli // Installs Vue CLI
  $ vue create modal-project // or use any other name. Use manually feature. Remove linter and press enter. choose v3. don't save for future projects or do.

  ######################## End Vue 3 ######################


  $ git branch -a // See invisible branches
  $ $ gitk --all & // Shows git other window

  $ git fsck --lost-found // Show all lost and found

  $ npm install -g firebase-tools // Install and prepare Firebase for hosting

  $ npm install moment --save // For formatting time in Vue
  $ npm install vue-chat-scroll --save


  ################## Django ####################

  $ pip install virtualenvwrapper-win
  $ pip3 install django
  $ python manage.py runserver // Starts python's virtual server
  $ python manage.py makemigrations // Create python table for sessions
  $ python manage.py migrate // Create python table for sessions
  $ python manage.py startapp historical_data // This gives you a simple project and an app called historical_data.
  $ python manage.py dbshell // initiate django sqlite db
  $ .table // open table
  
  ##############################################

  ####################  node.js express #################
  
  $ npm install --save express
  $ git clone https://github.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React.git // Clone new node.js package. Have node installed locally
  $ cd lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/ to CD into the main directory
  $ curl -X POST http://localhost:3333/login/Jason  // For POST rout
  $ curl localhost:3333 // To ping that particular script.
  $ node expressAppLevelMiddleware.js // Start a script with server
  $ curl http://localhost:3333?password=pwd123 // To add values to url


  // Inorder to be able to run this server you need to install
   the express,react,react-dom and express-react-views package by 
   executing the command below in the terminal.

  $ npm install --save express react react-dom express-react-views 
  $ node expressTemplate.js
  $ curl localhost:3333/Jessica

  $ npm install --save-dev nodemon // Install this gto make server run all the time.

  $ npm install --save dotenv ibm-watson  // This express server needs to use the .env for which we have to install the dotenv package
  ##################### END  #############################
  


  ##################### REACT ########################

  $ npx create-react-app todoapp // To create react default package
  $ npm install // Install any missing module
  $ npm start

  ######################## END ########################


  #####################  CMD NTWK ##############################

  $ netstat -ano show listening and established  processes
  // Means network statistics
  $ netstat /?   // For help
  $ netstat -a // checks all the connections
  $ netstat -b // checks all the connections to the internet
  $ netstat -bn // checks all the connections to the internet and port
  $ netstat -bno // checks all the connections to the internet and port and PID
  ###################### END ##############################


  ################## Cleaning Junk ########################

   WIN + R => type "wsreset" => enter => then push enter
   WIN + R => type "temp" => delete all
   WIN + R => type "prefetch" => delete all
   goto C => Windows => softwaredistribution => download => delete all
   goto search => type "Disk cleanup" => select what to clean up and push enter also 
    // clean up system for broken rgistry
   goto search => type "restor point" => choose C: => configure => delete restore point

   $ ipconfig/flushdns  // To flush DNS cache
  $ WIN + R => cmd => SHFT+CNTL+ENTER for admin mode
  $ The at command type.  DISM /Online /Cleanup-Image /ScanHealth
   WIN + i opens settings. Click the Update & Security option and select Recovery.

  #################### END ################################

  ################### To find virus ########################

  $ cd  // to go to C:/WINDOWS/system32
  $ attrib  // to check for .inf or .exe file. If any, you have virus
  // It also checks for READ-ONLY files and with it you can change a file'S accessibility


  To delete:

  $ attrib -s -h -r -a -i autorun.inf
  $ del autorun.inf
  Then move into system32
  $ cd win*
  $ cd system32
  $ attrib
  Search for SH or HR by the left wint .inf or .exe
  ################### END ##################################


  ##################### IBM and Services ##########################

  $ npm install --save ibmwatson
  Goto cloud.ibm.com/login to create a service.
  Goto catalog => services // Then search for the service
  Select and choose "Dallas" and lite version for free version.
  Behold is your key and url.
  Then after creat .env file and add into it as follows:
  
  .env:

  API_KEY=AzRb3tutpZGXs88fS-BOkfROaUM6EGXMraQl7KjqP8ro
  API_URL=https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/9a922860-f667-4cc3-8732-f848134af409

  after run 

  $ npm install --save dotenv // Install dotenv to use the .env file in the server application using the following command.

  
  #################### END IBM ############################


  #################### Find Keylogger ######################
  RAT // Remote access trojan
  $ netstat -ano show listening and established  processes
  // Means network statistics
  $ netstat /?   // For help
  $ netstat -a // checks all the connections
  $ netstat -b // checks all the connections to the internet
  $ netstat -bn // checks all the connections to the internet and port
  $ netstat -bno // checks all the connections to the internet and port and PID
  $ netstat -b -o 5 // 

  netstat: The netstat is a useful command for checking internet and network connections.
-b attribute: displays the executable involved in creating each connection or listening port.
-o attribute: displays the owning process id associated with each connection.
integer:  An integer used to display results multiple times with specified 
number of seconds between displays. It continues until stopped by command ctrl+c.
  
YOU are looking for autorun.exe or autorun.inf // Those are malicious


$ netstat -b -o 5>>sus-mal.txt // Prints the output to file


-a	Displays all connections and listening ports
-b	Displays the executable involved in creating each connection or listening port. (Added in XP SP2.)
-e	Displays Ethernet statistics
-f	Displays Fully Qualified Domain Names for foreign addresses. (In Windows Vista/7 only)
-n	Displays addresses and port numbers in numerical form
-o	Displays the owning process ID associated with each connection
-p proto	Shows connections for the protocol specified by proto; proto may be any of: TCP, UDP, TCPv6, or UDPv6.
-r	Displays the routing table
-s	Displays per-protocol statistics
-t	Displays the current connection offload state, (Windows Vista/7)
-v	When used in conjunction with -b, will display sequence of components involved in
 creating the connection or listening port for all executables. (Windows XP SP2, SP3)


State	Description
CLOSED	Indicates that the server has received an ACK signal from the client and the connection is closed
CLOSE_WAIT	Indicates that the server has received the first FIN signal from the client and the connection is in the process of being closed
ESTABLISHED	Indicates that the server received the SYN signal from the client and the session is established
FIN_WAIT_1	Indicates that the connection is still active but not currently being used
FIN_WAIT_2	Indicates that the client just received acknowledgment of the first FIN signal from the server
LAST_ACK	Indicates that the server is in the process of sending its own FIN signal
LISTENING	Indicates that the server is ready to accept a connection
SYN_RECEIVED	Indicates that the server just received a SYN signal from the client
SYN_SEND	Indicates that this particular connection is open and active
TIME_WAIT	Indicates that the client recognizes the connection as still active but not currently being used
  ###################### END ##############################


  ######################## Screenshot ########################
  Goto search and type psr and select Steps Recorder.
  ######################### END #############################

  ###################### Safe mode Android #################
    Press hold power button of android and press and hold power of option for safe mode
    on safe mode you can uninstall sturbon apps
  ####################### END ############################


  ######################### Tools #############################
  Windump
  Tshark
  ######################### END ###############################
  https://sqliteonline.com/   ==> for online sql
*/
