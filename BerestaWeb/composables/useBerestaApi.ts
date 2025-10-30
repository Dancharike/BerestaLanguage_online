export async function useBerestaApi(code: string)
{
    const res = await fetch("http://localhost:5000/api/Run",
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({code}),
    });

    if(!res.ok) {throw new Error(`Server error: ${res.status}`)}
    return await res.json();
}
