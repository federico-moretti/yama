git pull origin master
yarn
yarn build

rm -rf backup
mv prod backup
mv build prod
