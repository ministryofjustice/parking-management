const calculate = require('../calculate');

const mockParkingData = [
    { "weight": 1, "userId": 3 },
    { "weight": 3, "userId": 54 },
    { "weight": 2, "userId": 99 },
    { "weight": 3, "userId": 59 },
    { "weight": 1, "userId": 62 },
    { "weight": 3, "userId": 95 },
    { "weight": 3, "userId": 48 },
    { "weight": 2, "userId": 22 },
    { "weight": 2, "userId": 91 },
    { "weight": 3, "userId": 63 },
    { "weight": 1, "userId": 68 },
    { "weight": 3, "userId": 97 },
    { "weight": 2, "userId": 26 },
    { "weight": 3, "userId": 24 },
    { "weight": 3, "userId": 83 },
    { "weight": 3, "userId": 1 },
    { "weight": 3, "userId": 67 },
    { "weight": 2, "userId": 11 },
    { "weight": 2, "userId": 37 },
    { "weight": 2, "userId": 84 }
];

describe('Calculation Service', () => {
    it('should return the top 14 weights', () => {
        const results = calculate(mockParkingData);
        expect(results.filter(r => r.weight === 3).length).toEqual(10);
        expect(results.length).toEqual(14);
    });
});