import { Bucket } from "@pulumi/aws/s3";
import { ComponentResource, ComponentResourceOptions } from "@pulumi/pulumi";

export class BucketComponent extends ComponentResource {

    public readonly bucket: Bucket;
    constructor(name: string, opts: ComponentResourceOptions) {
        super("index:BucketComponent", name, {}, opts);

        this.bucket = new Bucket(name);
    }
}