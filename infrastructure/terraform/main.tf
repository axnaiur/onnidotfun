provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

resource "aws_ecs_cluster" "onni_cluster" {
  name = "onni-cluster"
}

# Additional ECS tasks, load balancers, etc.
# ...
