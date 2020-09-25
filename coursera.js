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
 */