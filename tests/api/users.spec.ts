import {expect, test} from '@playwright/test';

test('Get users API', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
});