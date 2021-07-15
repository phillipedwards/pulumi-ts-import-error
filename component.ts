import { Bucket } from "@pulumi/aws/s3"

export const createBucket = (): Bucket => {
    return new Bucket("test-bucket");
}
