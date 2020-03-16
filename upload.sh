#!/bin/bash
HOST='ftp.g-tek.tech'
USER='g-tek.tech'
PASS='54d6d250148c'
#TARGETFOLDER='/From-Scratch'
TARGETFOLDER='/public_html'
SOURCEFOLDER="/home/kaustubh/Desktop/PROJECTS/oynos-scss/dist/oynos-scss"

lftp -f "
set ftp:ssl-allow no
open $HOST
user $USER $PASS
lcd $SOURCEFOLDER
mirror --reverse --exclude-glob-from=/home/kaustubh/Desktop/PROJECTS/oynos-scss/upload-excludes.txt --delete --verbose $SOURCEFOLDER $TARGETFOLDER
bye
"