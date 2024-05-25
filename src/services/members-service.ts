import { CreateMemberCommand } from "@/entities/members";

class MembersService {
  public async register(payload: CreateMemberCommand) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  }
}

export default MembersService;
