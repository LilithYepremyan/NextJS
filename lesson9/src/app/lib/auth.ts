import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import Database from "better-sqlite3";
import { Lucia, TimeSpan } from "lucia";
import { cookies } from "next/headers";

const db = new Database("auth.db");

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "session",
});

export const lucia = new Lucia(adapter, {
  sessionExpiresIn: new TimeSpan(30, "s"),
  sessionCookie: {
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
});

export const createAuthSession = async (id: string) => {
  const session = await lucia.createSession(id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
};

export const verifyAuth = async () => {
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }
  const result = await lucia.validateSession(sessionCookie.value);
  try {
    if (result.session) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    } else {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {}
  return result;
};

export const destroySession = async () => {
  const result = await verifyAuth();
  if (result.session) {
    await lucia.invalidateSession(result.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }
};
