import { renderHook, act } from '@testing-library/react-hooks';
import { useRadioState } from '../Radio';

export const sharedRadioAssertions = (result: any) => {
    act(() => {
        result.current.onChange({ currentTarget: {} } as any);
    });

    expect(result.current.state).toBeUndefined();

    act(() => {
        result.current.onChange({ currentTarget: {} } as any);
    });

    expect(result.current.state).toBe(true);
};

describe('useRadioState tests', () => {
    it('should work with boolean values', () => {
        const { result } = renderHook(() => useRadioState());

        expect(result.current).toMatchObject({
            state: expect.any(Boolean),
            setState: expect.any(Function),
            onChange: expect.any(Function),
        });

        sharedRadioAssertions(result);
    });
});