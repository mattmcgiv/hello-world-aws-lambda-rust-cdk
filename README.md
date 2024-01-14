# "Hello World" AWS Lambda (Rust) CDK

This project uses CDK to create a lambda function from a zip file in S3.

In this case the lambda was built and then deployed to s3 using the https://github.com/awslabs/aws-lambda-rust-runtime project:

`cargo lambda build --release`

`cargo lambda deploy --s3-bucket hello-world-aws-lambda-rust-runtime`

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
