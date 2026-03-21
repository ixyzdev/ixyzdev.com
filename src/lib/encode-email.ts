export function encodeEmail(email: string): string {
  return Buffer.from(email).toString('base64')
}
