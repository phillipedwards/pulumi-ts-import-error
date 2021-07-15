import { createBucket } from "./component";
import { BucketComponent } from "./bucket-component";

// Create an AWS resource (S3 Bucket) w/ arrow function
const bucket = createBucket();

// Create an AWS resource (S3 Bucket) w/ class
const resource = new BucketComponent("my-bucket", {});

// Export the name of the bucket(s)
export const bucketId = bucket.id;
export const resourceBucketId = resource.bucket.id;