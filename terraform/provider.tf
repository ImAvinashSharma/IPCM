terraform {
  required_providers {
    linode = {
      source = "linode/linode"
    }
  }
}

provider "linode" {
  token = "cd91672a19fe8f60680420e6317248c925614512395645099c54be25448912e2"
}
