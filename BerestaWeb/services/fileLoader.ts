export async function loadFile(path: string): Promise<string>
{
    const res = await fetch(path);
    if(!res.ok) {throw new Error(`Failed to load file: ${path}`);}
    return await res.text();
}