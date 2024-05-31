import {test,expect} from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import {CartPage} from './pages/CartPage';

test ('pom',async({page})=>{
    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123')

    //home page
    const home=new HomePage(page)
    await home.addProductToCart("Nexus 6")

    await page.waitForTimeout(3000)
    await home.gotoCart();

    //cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);


});