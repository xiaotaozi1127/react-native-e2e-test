import wd from 'wd';
import config from '../e2e-config';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Simple Appium Example', () => {
  beforeAll(async () => await driver.init(config));
  afterAll(async () => await driver.quit());

  it('should render correct view', async () => {
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  });

  it('state should change when button click', async () => {
    expect(await driver.hasElementByAccessibilityId('button')).toBe(true);
    await driver.elementByAccessibilityId('button')
      .click()

    const num = await driver.elementByAccessibilityId('counter').text();
    expect(num).toBe('1');
  });
});
