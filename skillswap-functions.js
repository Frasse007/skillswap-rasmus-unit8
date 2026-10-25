export function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }
    return skills.filter(skill => skill.category === category); 
}

export function calculateTotalCost(hourlyRate, hours) {
    return hourlyRate * hours;
}

export function matchSkillsToUser(userNeeds, skills) {
    
}