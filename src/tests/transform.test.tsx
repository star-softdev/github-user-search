import { transformUsers } from "../utils/transformUsers";

describe("transformUsers", () => {
  it("transforms raw API data into GitHubUser[]", () => {
    const raw = [
      {
        id: 1,
        login: "octocat",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/octocat",
        extra_field: "ignore me",
      },
    ];

    const transformed = transformUsers(raw);

    expect(transformed).toEqual([
      {
        id: 1,
        login: "octocat",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/octocat",
      },
    ]);
  });
});
