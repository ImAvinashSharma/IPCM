resource "linode_instance" "web_server" {
  label     = "web-server"
  type      = "g6-standard-2"
  region    = "ap-west"
  image     = "linode/ubuntu20.04"
  root_pass = var.password
}

# Use Ansible to install software on the instance
resource "null_resource" "ansible" {
  depends_on = [linode_instance.web_server]

  provisioner "local-exec" {
    command     = "ansible-playbook -i '${linode_instance.web_server.ip_address},' playbook.yml"
    working_dir = "../ansible"
    environment = {
      ANSIBLE_HOST_KEY_CHECKING = "false"
    }
  }
}
