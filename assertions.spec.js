const{test,expect} = require('@playwright/test');
test('asseryions',async({page})=>{
   await page.goto('https://demo.nopcommerce.com/register');
   //expect urlhave
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
   //expect have
   await expect(page).toHaveTitle('nopCommerce demo store. Register')
   //visible
   const logoElement = await page.locator('.header-logo');
   await expect(logoElement).toBeVisible();
   //enabel
   const search = await page.locator('#small-search-box-form');
   await expect(search).toBeEnabled();
   //radio or check box selected ot not
   const male=await page.locator('#gender-female');
   await male.click()//select radio button
   await expect(male).toBeChecked();
   //check box
   const newsletter=await page.locator('#Newsletter');
   await expect(newsletter).toBeChecked();
   //have attribute or not
   const register=await page.locator('#register-button');
   await expect(register).toHaveAttribute('type','submit');
   //tohave text
   await expect(await page.locator('.page-title h1')).toHaveText('Register')

   //to contain text
   await expect(await page.locator('.page-title h1')).toContainText('Reg')
//to have value
const Email=await page.locator('#Email')
await Email.fill('test@gmail.com');
await expect(Email).toHaveValue('test@gmail.com');
//haveCount
const options=await page.locator('select[name="DateOfBirthMonth"] option')
await expect(options).toHaveCount(13);

})