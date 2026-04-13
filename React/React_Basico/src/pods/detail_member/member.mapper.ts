import * as am from "./api"
import * as vm from "./member.vm"

export const mapMemberEntityAMToVM = (member: am.Member):vm.Member => ({
      login:member.login,
      avatarUrl: member.avatar_url,
      company: member.company,
      htmlUrl: member.html_url,
      type: member.type,
      name:member.name
    }) 