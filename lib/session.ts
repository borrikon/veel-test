import { cookies } from "next/headers";

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookiesStore = await cookies();
  cookiesStore.set("session", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const cookie = await cookies();
  cookie.delete("session");
}
