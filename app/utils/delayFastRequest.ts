const MIN_TIME = 500;

export async function delayFastRequest<T>(request: Function): Promise<T> {
  const start = Date.now();
  const result = await request();
  const elapsedTime = Date.now() - start;

  if (elapsedTime < MIN_TIME) {
    await new Promise((resolve) => setTimeout(resolve, MIN_TIME - elapsedTime));
  }

  return result;
}
