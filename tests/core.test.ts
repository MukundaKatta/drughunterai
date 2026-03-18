import { describe, it, expect } from "vitest";
import { Drughunterai } from "../src/core.js";
describe("Drughunterai", () => {
  it("init", () => { expect(new Drughunterai().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Drughunterai(); await c.process(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Drughunterai(); await c.process(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
