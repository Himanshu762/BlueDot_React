export const getCategoryColor = (category: string) => {
    const normalizedCategory = category.toLowerCase().trim();

    const colorMap: Record<string, string> = {
        'wildlife': '#8ea8a7',
        'cleanup drives': '#b4a063',
        'conservation': '#6f7da2',
        'afforestation': '#de977b',
        'native afforestation': '#de977b',
        'lake restoration': '#566d5b',
    };

    return colorMap[normalizedCategory] || '#8ea8a7'; // Default to first color if not found
};

export const categoryTextColor = '#f3ecd9';
