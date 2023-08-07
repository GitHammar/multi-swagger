# multi-swagger
Static website capable of hosting multiple Swagger configs

## Steps:

- npm install
- npm run build
- aws s3 cp ./dist s3://<bucket-name> --recursive
