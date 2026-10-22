export function toGoogleDrivePreviewUrl(shareLinkOrId) {
  const value = String(shareLinkOrId).trim()
  const linkMatch = value.match(/(?:\/file\/d\/|[?&]id=)([\w-]+)/)
  const fileId = linkMatch ? linkMatch[1] : value

  if (!/^[\w-]{10,}$/.test(fileId)) {
    throw new TypeError('Provide a valid Google Drive file share URL or file ID.')
  }

  return `https://drive.google.com/file/d/${fileId}/preview`
}
