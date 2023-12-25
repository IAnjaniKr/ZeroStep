import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'
const { expect } = require('chai');


test('Demo Open Cart', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
  
    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    const headerText = await ai('Get the header text', aiArgs)
    await page.goto('https://demo.opencart.com/')
    await ai(`Type "${headerText}" in the search box`, aiArgs)
    await ai('Press enter', aiArgs)
  })

test('GetHeaderTextAndVerifyItIsCorrect', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
  
    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    const headerText = await ai('Get the header text', aiArgs)
    expect(headerText).toBe('Expected Header Text')
  })

test('VerifyErrorWhenSearchBoxIsEmpty', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
  
    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    await ai('Press enter', aiArgs)
    const errorMessage = await ai('Get the error message', aiArgs)
    expect(errorMessage).toBe('Expected Error Message')
  })

test('ClickProductAndAddToCart', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
  
    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    await ai('Click on a product', aiArgs)
    await ai('Add product to cart', aiArgs)
    const successMessage = await ai('Get the success message', aiArgs)
    expect(successMessage).toBe('Expected Success Message')
  })

test('VerifyWarningMessageForInvalidSearchTerm', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
  
    // An object with page and test must be passed into every call
    const aiArgs = { page, test }
    await ai('Type an invalid search term', aiArgs)
    await ai('Press enter', aiArgs)
    const warningMessage = await ai('Get the warning message', aiArgs)
    expect(warningMessage).toBe('Expected Warning Message')
  })