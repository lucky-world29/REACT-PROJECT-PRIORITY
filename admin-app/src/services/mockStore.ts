type Identifiable = { id: string };
const wait = <T,>(value: T): Promise<T> => new Promise(resolve => setTimeout(() => resolve(value), 180));

export const createMockService = <T extends Identifiable>(key: string, seed: T[]) => ({
    async getAll() { return wait(JSON.parse(localStorage.getItem(key) || 'null') ?? seed); },
    async create(item: T) { const items = await this.getAll(); const next = [...items, item]; localStorage.setItem(key, JSON.stringify(next)); return wait(item); },
    async update(id: string, changes: Partial<T>) { const items = await this.getAll(); const next = items.map((item: T) => item.id === id ? { ...item, ...changes } : item); localStorage.setItem(key, JSON.stringify(next)); return wait(next.find((item: T) => item.id === id) as T); },
    async remove(id: string) { const items = await this.getAll(); localStorage.setItem(key, JSON.stringify(items.filter((item: T) => item.id !== id))); return wait(undefined); },
    reset() { localStorage.removeItem(key); },
});
