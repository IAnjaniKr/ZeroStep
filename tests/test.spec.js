import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const { expect } = chai;


test('zerostep example 1', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await page.goto('https://google.com/')
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai('Press enter', aiArgs)
})

test('zerostep example 2', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  expect(headerText).to.equal('Supercharge your Playwright tests with AI')
})

test('zerostep example 3', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  await expect(ai('Get the header text')).to.be.rejectedWith('The ai() function is missing the required arguments')
})

test('zerostep example 4', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await page.goto('https://google.com/')
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai('Press enter', aiArgs)
  const searchBoxValue = await page.$eval('#search-box', (el) => el.value)
  expect(searchBoxValue).to.equal('')
})

test('zerostep example 5', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await page.goto('https://google.com/')
  await expect(ai(`Type "${headerText}" in the search box`)).to.be.rejectedWith('The ai() function is missing the required arguments');
})

test('zerostep example 6', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  expect(headerText).to.equal('Expected Header Text')
})

test('zerostep example 7', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const footerText = await ai('Get the footer text', aiArgs)
  expect(footerText).not.to.equal('')
})

test('zerostep example 8', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  await ai('Click on a link', aiArgs)
  const currentURL = page.url()
  expect(currentURL).to.equal('Expected URL')
})

test('zerostep example 9', async ({ page, context }) => {
  const newPage = await context.newPage()
  await newPage.goto('https://google.com/')
  const currentURL = newPage.url()
  expect(currentURL).to.equal('https://google.com/')
})