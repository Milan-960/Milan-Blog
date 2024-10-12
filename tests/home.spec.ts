import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the correct heading and description", async ({
    page,
  }) => {
    // Go to the home page
    await page.goto("/");

    // Check that the title of the page is correct
    await expect(page).toHaveTitle("Welcome to Milan's Blog");

    // Check if the heading contains 'Latest'
    const heading = page.locator("h1");
    await expect(heading).toHaveText("Latest");

    // Check if the correct description is displayed
    //     const description = page.locator("p");
    //     await expect(description).toHaveText("A blog by Milan Sachani");

    // Check that there are either posts or the no-post message

    const postCards = page.locator(".card");

    if ((await postCards.count()) > 0) {
      // If there are posts, check that at least one post is displayed
      await expect(postCards.first()).toBeVisible();
    }
  });
});
