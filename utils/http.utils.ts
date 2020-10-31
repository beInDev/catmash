export interface HttpError extends Error {
  statusCode: number;
}

/**
 * Custom HttpError objects for easier handling
 *
 * @export
 * @param {number} code
 * @param {string} message
 * @returns {HttpError}
 */
export function createError(code: number, message: string): HttpError {
  const error = (new Error(message) as unknown) as HttpError;
  error.statusCode = code;
  return error;
}
