const GitHub = require("octocat");
const TOKEN = process.env.TOKEN;
const client = new GitHub({
  token: TOKEN,
});

async function test() {
  const repos = await client.request("GET /orgs/{org}/repos", {
    org: "org",
  });
  console.log(repos);
}

test();
