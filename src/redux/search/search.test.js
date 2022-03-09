import { addToSearch } from './search';

it('should return the payload and set the type to "SEARCH/ADD"',
  () => {
    const action = addToSearch('word');
    expect(action.type).toBe('SEARCH/ADD');
  });
