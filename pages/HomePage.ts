import {expect, Page} from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {
    }

    async assertHomeLoaded() {
        await expect(this.page.locator('h1')).toBeVisible();
    }
}