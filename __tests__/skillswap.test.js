const { filterSkillsByCategory } = require('../skillswap-functions');

const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

describe('Skills Filtering Tests', () => {
    test('should filter skills by all and return all', () => {
        const result = filterSkillsByCategory(skills, "All");
        expect(result).toBe(skills)
    });

    test('should filter skills by a specific category', () => {
        const result = filterSkillsByCategory(skills, "Programming");
        expect(result).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    test('checks for an empty array when no matches', () => {
        const result = filterSkillsByCategory(skills, 'Cooking');
        expect(result).toEqual([]);
    });
});