"# MEAN_IONIC2" 

$ git config --global user.name "Endri Azizi"
$ git config --global user.email endri.azizi@gmail.com

$ git config --list

$ git init

$ git commit -m "Set up the Project and Dependencies, create the Main Server File"


Getting Started With MEAN_IONIC2
===================================

## Set up the Project and Dependencies

We are going to set up our package.json file first, which will allow us to install all of the dependencies for our application, and it also describes how we want to run the server. When we deploy this server to Heroku, since we have the start property set to node server.js, Heroku will know to start the server by invoking the server.js file. If you were to run this server locally using Node, you would just type node server.js in the terminal to start the server.


## Some links for more in depth learning
### Hands on / interactive learning
* [Learn Version Control with Git](https://www.git-tower.com/learn/ebook) A website for learning Git. Appears to cost money but has a free html book.


### Purely text based resources
* [Git: No Deep Sh*t](http://rogerdudler.github.io/git-guide/) A super simplified way of explaining git, basically a cheatsheet.



The Git Flow
==================

The following snippet is designed to explain Vincent Driessen's [git branching model](http://nvie.com/posts/a-successful-git-branching-model/), at least as well as I understand it. Special thanks to [Stephen Koch](https://twitter.com/skoch) for being the true master here.

A way to think about Git and Github.
------------
Milestones of milestones of milestones. In other words:

- Open up a text editor.
- Type "Hello World".
- Save this file.
  - You have now created a "milestone" on your hard drive of this text.
	- You can now retreive that milestone by double clicking it to re-open it in your text editor.
	

		git commit -am "By typing this command I am saving a collection of saved files."

- This is great because now we can roll back to old versions of files without having to retype. Aka "source control".
- However, wouldn't it be great if we could further save milestones in the cloud?
	- Aka milestones of milestones of milestones.
		- Github -> Git -> Save
- Github is two things:
	- git, in the cloud
	- a social network around source code
- All you need to do to push to Github:

		git push origin master

- Now one could "clone" that repository on another computer and not just get the latest code but the complete revision history on another computer.



Setting up
------------
Assuming your project is in a folder named "Project" on your Desktop.

### Starting from scratch
	cd ~/Desktop/Project
	git init
	git checkout -b develop
	touch README.md

- Open the README.md file you just created in your text editor. Describe your project. I've provided a basic template below for what it's worth. Save it.
- Go to Github (or Bitbucket or whereever you want to save your code in the cloud). Create a new project.
	- If you're on Github, ***do not check*** Initialize this project with a README since you just made one.
- Determine your SSH clone url. On Github it's probably something like ***git@github.com:USERNAME/PROJECT.git***. Should be on the project's page somewhere.
- Add your remote.
	
		git remote add origin {{the link you just copied}}

- Breaking that down
	- git :: The git command
	- remote add :: We're adding a remote connection for this repository
	- origin :: We're naming the remote "origin". You can also call this "github" or "bananasauraus" if you'd like.


### Cloning an existing repository.

- Determine your SSH clone url. On Github it's probably something like ***git@github.com:USERNAME/PROJECT.git***. Should be on the project's page somewhere.

		cd ~/Desktop
		git clone {{the link you just copied}} Project

- This creates a directory named "Project", clones the repository there and adds a remote named "origin" back to the source.

		cd Project
		git checkout develop

- If that last command fails

		git checkout -b develop

Updating/The Development Cycle
------------
You now have a git repository, likely with two branches: master and develop. Now bake these laws into your mind and process:

####You will never commit to ***master*** directly.
####You will never commit to ***develop*** directly.

Instead, you will create ***feature branches*** on your machine that exist for the purpose of solving singular issues. You will always base your features off the develop branch.

		git checkout develop
		git checkout -b my-feature-branch

This last command creates a new branch named "my-feature-branch" based off of develop. You can name that branch whatever you like. You should not have to push it to Github unless you intend to work on multiple machines on that feature.

Make changes.

	git add .
	git commit -am "I have made some changes."

This adds any new files to be tracked and makes a commit. Now let's add them to develop.

	git checkout develop
	git merge --no-ff my-feature-branch
	git push origin develop

Releasing
------------
Finished with your project?

- Create a feature branch as normal.
- Update the version history in the README.md file
- Update this to develop as normal.

		git checkout master
		git merge --no-ff develop
		git push origin master
		git tag v1.0.0
		git push origin v1.0.0

Replace 1.0.0 in the snippet here with your appropriate versions. Now you have a tag saved.



ionic2-roles@0.1.0 C:\Users\u0i6910\Documents\MEAN_IONIC2
+-- bcrypt-nodejs@0.0.3
+-- body-parser@1.18.2
| +-- bytes@3.0.0
| +-- content-type@1.0.4
| +-- debug@2.6.9
| +-- depd@1.1.1
| +-- http-errors@1.6.2
| | +-- inherits@2.0.3
| | +-- setprototypeof@1.0.3
| | `-- statuses@1.4.0
| +-- iconv-lite@0.4.19
| +-- on-finished@2.3.0
| | `-- ee-first@1.1.1
| +-- qs@6.5.1
| +-- raw-body@2.3.2
| | `-- unpipe@1.0.0
| `-- type-is@1.6.15
|   +-- media-typer@0.3.0
|   `-- mime-types@2.1.17
|     `-- mime-db@1.30.0
+-- cors@2.8.4
| +-- object-assign@4.1.1
| `-- vary@1.1.2
+-- express@4.16.2
| +-- accepts@1.3.4
| | `-- negotiator@0.6.1
| +-- array-flatten@1.1.1
| +-- content-disposition@0.5.2
| +-- cookie@0.3.1
| +-- cookie-signature@1.0.6
| +-- encodeurl@1.0.1
| +-- escape-html@1.0.3
| +-- etag@1.8.1
| +-- finalhandler@1.1.0
| | `-- statuses@1.3.1
| +-- fresh@0.5.2
| +-- merge-descriptors@1.0.1
| +-- methods@1.1.2
| +-- parseurl@1.3.2
| +-- path-to-regexp@0.1.7
| +-- proxy-addr@2.0.2
| | +-- forwarded@0.1.2
| | `-- ipaddr.js@1.5.2
| +-- range-parser@1.2.0
| +-- safe-buffer@5.1.1
| +-- send@0.16.1
| | +-- destroy@1.0.4
| | +-- mime@1.4.1
| | `-- statuses@1.3.1
| +-- serve-static@1.13.1
| +-- setprototypeof@1.1.0
| +-- statuses@1.3.1
| `-- utils-merge@1.0.1
+-- jsonwebtoken@7.4.3
| +-- joi@6.10.1
| | +-- hoek@2.16.3
| | +-- isemail@1.2.0
| | +-- moment@2.19.1
| | `-- topo@1.1.0
| +-- jws@3.1.4
| | +-- base64url@2.0.0
| | `-- jwa@1.1.5
| |   +-- buffer-equal-constant-time@1.0.1
| |   `-- ecdsa-sig-formatter@1.0.9
| +-- lodash.once@4.1.1
| +-- ms@2.0.0
| `-- xtend@4.0.1
+-- mongoose@4.12.4
| +-- async@2.1.4
| | `-- lodash@4.17.4
| +-- bson@1.0.4
| +-- hooks-fixed@2.0.0
| +-- kareem@1.5.0
| +-- mongodb@2.2.33
| | +-- es6-promise@3.2.1
| | +-- mongodb-core@2.1.17
| | | `-- require_optional@1.0.1
| | |   +-- resolve-from@2.0.0
| | |   `-- semver@5.4.1
| | `-- readable-stream@2.2.7
| |   +-- buffer-shims@1.0.0
| |   +-- core-util-is@1.0.2
| |   +-- isarray@1.0.0
| |   +-- process-nextick-args@1.0.7
| |   +-- string_decoder@1.0.3
| |   `-- util-deprecate@1.0.2
| +-- mpath@0.3.0
| +-- mpromise@0.5.5
| +-- mquery@2.3.2
| | +-- bluebird@3.5.1
| | `-- sliced@0.0.5
| +-- muri@1.3.0
| +-- regexp-clone@0.0.1
| `-- sliced@1.0.1
+-- morgan@1.9.0
| +-- basic-auth@2.0.0
| `-- on-headers@1.0.1
+-- passport@0.3.2
| +-- passport-strategy@1.0.0
| `-- pause@0.0.1
+-- passport-jwt@2.2.1
`-- passport-local@1.0.0
