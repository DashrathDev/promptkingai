const { test, expect } = require("@playwright/test");
const store = "https://play.google.com/store/apps/details?id=com.promtking.app";
test("responsive gallery, navigation, assets and product rules", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(
    page.getByRole("button", { name: /like|favorite/i }),
  ).toHaveCount(0);
  for (const [width, columns] of [
    [1440, 4],
    [820, 2],
    [390, 1],
    [320, 1],
  ]) {
    await page.setViewportSize({ width, height: 950 });
    await expect(page.locator(".prompt-grid").first()).toBeVisible();
    const count = await page
      .locator(".prompt-grid")
      .first()
      .evaluate(
        (el) => getComputedStyle(el).gridTemplateColumns.split(" ").length,
      );
    expect(count).toBe(columns);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeHidden();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Categories", exact: true })
    .click();
  await expect(page).toHaveURL(/\/categories$/);
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeHidden();
  await page.goto("/");
  const links = await page
    .locator('a[href*="play.google.com"]')
    .evaluateAll((a) => a.map((x) => x.href));
  expect(links.length).toBeGreaterThan(3);
  expect(links.every((x) => x === store)).toBe(true);
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  }
  await expect
    .poll(() =>
      page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.every((i) => i.complete && i.naturalWidth > 0),
        ),
    )
    .toBe(true);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "docs/home-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "docs/home-mobile.png", fullPage: true });
});
test("search, category, detail copy and FAQs", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/explore");
  const input = page.getByRole("searchbox");
  await input.fill("couple");
  await expect(page.locator(".prompt-card")).toHaveCount(1);
  await input.fill("zzzz-no-such-prompt");
  await expect(
    page.getByRole("heading", { name: "No prompts found" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear search" }).click();
  await expect(page.locator(".prompt-card")).toHaveCount(8);
  await page.goto("/category/cinematic");
  expect(await page.locator(".prompt-card").count()).toBeGreaterThan(0);
  await page.goto("/prompt/cinematic-black-outfit-portrait");
  await expect(page.locator("h1")).toHaveCount(1);
  await page.getByRole("button", { name: "Copy Prompt", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Prompt copied" }),
  ).toBeVisible();
  const clip = await page.evaluate(() => navigator.clipboard.readText());
  expect(clip).toBe(await page.locator(".prompt-text").innerText());
  await expect(page.locator("details")).toHaveCount(5);
  await page
    .getByText("Does Prompt King generate the image?", { exact: true })
    .click();
  await expect(
    page.getByText(
      "No. Prompt King helps users discover and copy prompts that can be used with compatible AI tools.",
      { exact: true },
    ),
  ).toBeVisible();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "docs/prompt-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(
    await page
      .locator(".detail-layout")
      .evaluate(
        (el) => getComputedStyle(el).gridTemplateColumns.split(" ").length,
      ),
  ).toBe(1);
  await page.screenshot({ path: "docs/prompt-mobile.png", fullPage: true });
});
test("all sitemap routes, metadata, internal links, and 404", async ({
  page,
  request,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (m) => new URL(m[1]).pathname,
  );
  const titles = new Set();
  for (const url of urls) {
    const response = await page.goto(url);
    expect(response.status(), url).toBe(200);
    await expect(page.locator("h1"), url).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://promptkingai.com${url === "/" ? "/" : url}`,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    expect(
      await page
        .locator("a[href]")
        .evaluateAll(
          (a) => a.filter((x) => x.getAttribute("href") === "#").length,
        ),
    ).toBe(0);
  }
  const response = await page.goto("/prompt/not-a-real-prompt");
  expect(response.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Prompt not found" }),
  ).toBeVisible();
  expect((await request.get("/robots.txt")).status()).toBe(200);
});
