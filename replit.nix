{ pkgs }:

{
  deps = [
    # Node.js 22 LTS — matches the Dockerfile base image and CI pipeline.
    pkgs.nodejs_22
  ];
}
