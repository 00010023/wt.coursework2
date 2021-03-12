# Server side

## Which framework does stands for back-end?

As it was asked on the requirements of the coursework, I picked up Express.js
framework as the backend part of my application. Actually, I coded a REST API on
Express with (CRUD) compatible operations that will handle each request
regarding its type.

## How to run the application (a step-by-step noob included instructions)

### Windows users:

Hello Windows users, damn again! Ok so let's get started. To be mentioned...

I assume that you have already cloned my project. If you didn't, just spawn a
terminal somewhere then execute the following command:

```shell
git clone https://github.com/00010023/wt.coursework2.git 00010023
```

Now, if enter `dir` command, we will see that we have cloned my project into the
current directory and result should be something like that:

```
Directory of C:\Users\Genemator\bla\bla\bla

xx/xx/2021  09:00 PM    <DIR>          .
xx/xx/2021  09:00 PM    <DIR>          ..
xx/xx/2021  09:00 PM    <DIR>          00010023
xx/xx/2021  09:00 PM    <DIR>          Bla
xx/xx/2021  09:00 PM    <DIR>          Bla
               x File(s)             x bytes
               x Dir(s)              x bytes free
```

Yay, now we have the source codes stored in our PC. Now, open my project through
terminal.

```shell
cd 00010023
```

### UNIX Typo / GNU Linux users

Hola my Amigos! Dear UNIX|Linux users, my friends, I've already prepared
everything for you and made the process of launching quite easier compared to
Windows shits.

So firstly, if you have cloned my application, skip this step. If you don't,
then do it by executing this:

```shell
git clone https://github.com/00010023/wt.coursework2.git 00010023 && cd 00010023
```

Now, for those who already downloaded my project, just spawn a terminal session
inside my project. OK, let's list all my files (in my case, I use `ls -la`).
Approximately, it should look like this:

```
drwxr-xr-x genemator staff 736 B  Mon Mar  8 21:33:11 2021  .
drwxr-xr-x genemator staff 1.3 KB Mon Mar  8 20:54:43 2021  ..
.rw-r--r-- genemator staff  10 KB Mon Mar  8 20:54:49 2021  .DS_Store
drwxr-xr-x genemator staff 512 B  Mon Mar  8 21:54:51 2021  .git
drwxrwxr-x genemator staff  96 B  Tue Mar  2 23:47:57 2021  .github
.rw-r--r-- genemator staff  41 B  Sun Mar  7 23:05:00 2021  .gitignore
drwxr-xr-x genemator staff 416 B  Mon Mar  8 21:55:14 2021  .idea
.rw-r--r-- genemator staff  37 B  Sun Mar  7 11:55:02 2021  .prettierignore
.rw-r--r-- genemator staff  28 B  Mon Mar  8 00:46:37 2021  .prettierrc.json
drwxr-xr-x genemator staff 128 B  Mon Mar  8 18:25:38 2021  assets
drwxrwxr-x genemator staff 544 B  Sun Mar  7 07:29:09 2021  client
drwxr-xr-x genemator staff 352 B  Sun Mar  7 23:57:13 2021  docs
.rwxr-xr-x genemator staff 338 B  Sun Mar  7 23:18:56 2021  install.sh
.rw-rw-r-- genemator staff  34 KB Tue Mar  2 06:07:20 2021  license
drwxr-xr-x genemator staff 288 B  Mon Mar  8 20:54:49 2021  node_modules
.rw-r--r-- genemator staff 973 B  Mon Mar  8 20:55:19 2021  package.json
.rw-rw-r-- genemator staff 1.5 KB Mon Mar  8 18:33:12 2021  readme.md
drwxr-xr-x genemator staff 288 B  Mon Mar  8 20:34:09 2021  scripts
drwxr-xr-x genemator staff 480 B  Sun Mar  7 05:35:14 2021  server
.rwxr-xr-x genemator staff 1.2 KB Sun Mar  7 23:18:56 2021  serverland.sh
.rwxr-xr-x genemator staff 110 B  Sun Mar  7 13:18:42 2021  update.sh
.rwxr-xr-x genemator staff 623 B  Sun Mar  7 23:18:56 2021  upload.sh
.rw-r--r-- genemator staff 1.2 KB Sun Mar  7 23:18:33 2021  yarn.lock
```

I've already wrote a few shell scripts that will ease our next procedures, so
all you have to do is run:

```shell
# If you have npm
npm run client

# If you have yarn
yarn client
```

It will start the client side of application in a matter of time. Head to the
[http://localhost:3000](http://localhost:3000) on your borwser to checkout the
result.
