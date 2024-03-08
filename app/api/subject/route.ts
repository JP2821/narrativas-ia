import { kv } from '@vercel/kv'

export async function POST(req: Request) {
  const json = await req.json()
  const { id, title, messages } = json

  const createdAt = Date.now()
  const userId = "global";
  const payload = {
    id,
    title,
    userId,
    createdAt,
    path: `/chat/`,
    messages: messages
  }

  await kv.hmset(`chat:${id}`, payload)
  await kv.zadd(`user:chat:${userId}`, {
    score: createdAt,
    member: `chat:${id}`
  })

  return new Response(JSON.stringify(payload));
}