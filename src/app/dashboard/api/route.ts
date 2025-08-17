// app/api/hello/route.ts
export async function GET(request: Request) {
  return new Response("Hello World", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
