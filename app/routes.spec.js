import routes from './routes';

describe('routes', () => {
  it('should has four routes', () => {
    expect(routes.length).toBe(4);
  });
});
