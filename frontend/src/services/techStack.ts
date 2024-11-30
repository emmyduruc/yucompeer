
const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log('backendUrl:....', backendUrl);

export const createTechStack = {
    fetchProvidersByCategory: async (category: string) => {
        const response = await fetch(`http://localhost:3100/tech-stack/providers?category=${category}`);
        if (!response.ok) throw new Error('Failed to fetch providers');
        return response.json();
    },
    fetchTechStack: async () => {
        try {
            const response = await fetch('http://localhost:3100/tech-stack');
            if (!response.ok) throw new Error('Failed to fetch tech stack');
            return response.json();
        }
        catch (err) {
            console.log(err);
        }
    }
}