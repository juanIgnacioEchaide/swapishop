import {renderHook} from '@testing-library/react-hooks';
import {useQuery} from '@tanstack/react-query';
import {useCharacterStore} from '../../app/store/characters';
import {getAllPeople} from '../../app/services';
import useCharacterData from '../../app/hooks/UseCharacters';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('../store', () => ({
  useCharacterStore: jest.fn(() => ({
    characters: [],
    setCharacters: jest.fn(),
    setPagination: jest.fn(),
    pagination: {},
  })),
}));

jest.mock('../services', () => ({
  getAllPeople: jest.fn(),
  getPeopleByPage: jest.fn(),
}));

jest.mock('../helpers', () => ({
  getPageNumberFromString: jest.fn(),
  getTotalPages: jest.fn(),
}));

describe('useCharacterData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('triggers getAllPeople when page value is undefined', async () => {
    const mockResults = [{id: 1, name: 'Character 1'}];
    const mockCount = 10;
    const mockNext = 'next-page';
    const mockPrevious = 'previous-page';

    (getAllPeople as jest.Mock).mockResolvedValue({
      results: mockResults,
      count: mockCount,
      next: mockNext,
      previous: mockPrevious,
    });

    const {result, waitForNextUpdate} = renderHook(() => useCharacterData());

    await waitForNextUpdate();

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ['characters', undefined],
      queryFn: expect.any(Function),
    });

    expect(useCharacterStore().setCharacters).toHaveBeenCalledWith(mockResults);
    expect(useCharacterStore().setPagination).toHaveBeenCalledWith({
      current: 1,
      next: expect.any(Number),
      previous: expect.any(Number),
      totalPages: expect.any(Number),
    });

    expect(result.current.isLoading).toBe(false);
  });
});
