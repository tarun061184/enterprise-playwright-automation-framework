import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {USERS} from '../../utils/testData';

test('Valid login should succeed', async ({page}) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(USERS.valid.username, USERS.valid.password);
    await login.assertLoginSuccess();
});