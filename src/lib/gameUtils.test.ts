import { describe, it, expect, vi } from 'vitest';
import { formatTime } from './gameUtils';

// Mock the phosphor icons module
vi.mock('@phosphor-icons/react', () => ({
    Heart: vi.fn(),
    Star: vi.fn(),
    Moon: vi.fn(),
    Sun: vi.fn(),
    Cloud: vi.fn(),
    Lightning: vi.fn(),
    Fire: vi.fn(),
    Drop: vi.fn(),
}));

describe('gameUtils', () => {
    describe('formatTime', () => {
        it('formats time correctly for seconds less than 60', () => {
            expect(formatTime(0)).toBe('0:00');
            expect(formatTime(5)).toBe('0:05');
            expect(formatTime(59)).toBe('0:59');
        });

        it('formats time correctly for minutes', () => {
            expect(formatTime(60)).toBe('1:00');
            expect(formatTime(125)).toBe('2:05');
            expect(formatTime(659)).toBe('10:59');
        });
    });
});