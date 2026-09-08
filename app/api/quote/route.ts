import { getQuote } from "@/lib/quote";

export async function GET() {
  const quote = await getQuote();
  return Response.json(quote, {
    headers: { "Cache-Control": "public, s-maxage=20, stale-while-revalidate=60" },
  });
}
