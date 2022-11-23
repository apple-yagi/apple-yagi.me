import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  // ポートフォリオサイトにアクセスする
  await page.goto("/");

  // Twitterのリンクをクリックすると、自分のTwitterアカウントに遷移すること
  await page.getByRole("link", { name: "Twitter" }).click();
  await expect(page).toHaveURL("https://twitter.com/apple_yagi");

  // ポートフォリオサイトに戻る
  await page.goto("/");

  // GitHubのリンクをクリックすると、自分のGitHubアカウントに遷移すること
  await page.getByRole("link", { name: "GitHub" }).first().click();
  await expect(page).toHaveURL("https://github.com/apple-yagi");

  // ポートフォリオサイトに戻る
  await page.goto("/");

  // Zennのリンクをクリックすると、自分のZennアカウントに遷移すること
  await page.getByRole("link", { name: "Zenn" }).first().click();
  await expect(page).toHaveURL("https://zenn.dev/apple_yagi");

  // ポートフォリオサイトに戻る
  await page.goto("/");

  // Qiitaのリンクをクリックすると、自分のQiitaアカウントに遷移すること
  await page.getByRole("link", { name: "Qiita" }).first().click();
  await expect(page).toHaveURL("https://qiita.com/apple-yagi");
});
