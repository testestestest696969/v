import crypto from "crypto";
import { SALT } from "./salt";

const SECRET = process.env.API_SECRET!;

export function validateBackendToken(
  id: string,
  xt: string,
  ts: number,
  token: string,
) {
  if (Date.now() - ts > 8000) return false;

  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(`${SALT}:${id}:${xt}:${ts}`) // ← mirrors generateBackendToken
    .digest("hex");

  return expected === token;
}
