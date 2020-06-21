/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
describe('Example', () => {
  it('should have type text name ', async () => {
    await element(by.id('inputname')).typeText('Tran Nhat Duy');
  });
  it('should have a type text age', async () => {
    await element(by.id('inputage')).typeText('19');
  });
  it('should have type text name ', async () => {
    await element(by.id('inputname')).clearText();
  });
});
