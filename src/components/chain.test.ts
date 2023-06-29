import { makeChain } from "./chain";

describe("makeChain", () => {
  it("should make a chain", () => {
    makeChain();
  });
});

const chain = makeChain();

describe("chainRun", () => {
  it("should run the chain", async () => {
    const result = await chain.call({ input: "hello world" });
    const response = JSON.parse(result.response);
    expect(response).toHaveProperty("diagram");
    expect(response).toHaveProperty("response");
  }, 3000);
});
