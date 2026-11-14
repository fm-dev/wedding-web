import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "The theme must initialize before the application loads");

for (const stored of [null, "light", "dark", "invalid", "storage-error"]) {
  for (const systemDark of [false, true]) {
    test(`initial theme: saved=${stored}, systemDark=${systemDark}`, () => {
      let appliedTheme;
      runInNewContext(script, {
        localStorage: {
          getItem(key) {
            assert.equal(key, "theme");
            if (stored === "storage-error") throw new Error("Storage blocked");
            return stored;
          },
        },
        window: {
          matchMedia(query) {
            assert.equal(query, "(prefers-color-scheme: dark)");
            return { matches: systemDark };
          },
        },
        document: {
          documentElement: {
            classList: {
              toggle(name, enabled) {
                assert.equal(name, "dark");
                appliedTheme = enabled;
              },
            },
          },
        },
      });
      const expected = stored === "dark" ? true : stored === "light" ? false : systemDark;
      assert.equal(appliedTheme, expected);
    });
  }
}
