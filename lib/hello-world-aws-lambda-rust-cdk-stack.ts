import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";

import { Construct } from "constructs";

export class HelloWorldAwsLambdaRustCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const HELLO_HANDLER = "HelloHandler";
    const OBJECT_KEY = "hello-world-aws-lambda-rust-runtime";

    new lambda.Function(this, HELLO_HANDLER, {
      runtime: lambda.Runtime.PROVIDED_AL2023,
      code: lambda.Code.fromBucket(this.getBucket(), OBJECT_KEY),
      handler: "bootstrap",
      environment: {
        RUST_BACKTRACE: "1",
      },
      tracing: lambda.Tracing.ACTIVE,
    });
  }

  getBucket(): s3.IBucket {
    const BUCKET_NAME = "hello-world-aws-lambda-rust-runtime";
    return s3.Bucket.fromBucketName(this, "lambda-bucket", BUCKET_NAME);
  }
}
