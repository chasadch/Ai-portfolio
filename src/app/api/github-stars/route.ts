export async function GET(req: Request) {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };
  if (token && token.trim().length > 0) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(
      'https://api.github.com/repos/yuvraj0412s/Yuvi_portfolio',
      {
        headers,
        // A small cache to reduce hitting the API on every request in dev
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return Response.json(
        { error: 'Failed to fetch stars', status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count ?? 0 });
  } catch (err) {
    return Response.json(
      { error: 'Unexpected error fetching stars' },
      { status: 500 }
    );
  }
}