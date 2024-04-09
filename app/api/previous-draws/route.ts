export async function POST(request: Request): Promise<Response> {
    const payload = await request.json();

    try {
        const response: Response = await fetch('https://global-winning-numbers-check.vercel.app/api/lottery-compare', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (! response.ok) {
            const errorMessage = await response.text();
            return Response.json({ message: errorMessage }, { status: response.status });
        }

        const result = await response.json();
        return Response.json(result, { status: response.status });
    } catch (error) {
        console.log(error);
        return Response.json('Oops. Something went wrong', { status: 500 })
    }
}
