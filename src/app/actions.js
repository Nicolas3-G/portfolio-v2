'use server'

export async function emailKey() {
  return process.env.EMAIL_SERVICE_KEY;
}