#!/bin/bash
# sh git_push.sh
read -p "Enter commit message: " commit_msg
git add .
git commit -m "$commit_msg"
git push origin main
echo "Changes pushed to GitHub."
read -p "Press any key to continue..."
