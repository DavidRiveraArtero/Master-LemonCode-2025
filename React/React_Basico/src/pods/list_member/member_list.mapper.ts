import * as vm from "./member_list.vm";
import * as am from "./api";

export const mapMemberEntityAMToVM = (
  member: am.ListMember
): vm.ListMember => ({
  avatarUrl: member.avatar_url,
  id: member.id,
  name: member.login,
});

export const mapMembersEntityToVM = (
  members: am.ListMember[],
): vm.ListMember[] => members.map((member) => mapMemberEntityAMToVM(member));
