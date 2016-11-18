import counter from './index';

describe('reducers', () => {
	describe('counter', () => {
		it('should provide the initial state', () => {
			expect(counter(undefined,{})).toBe(0)
		})
		it('should handle INCREMENT action', () => {
			expect(counter(1, {type: 'INCREMENT'})).toBe(2)
		})
	})
})