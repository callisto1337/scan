export function isDataFileValid(data: string): boolean {
  try {
    const parsedJson = JSON.parse(data);

    if (!parsedJson) {
      return false;
    }

    if (typeof parsedJson !== 'object') {
      return false;
    }

    return !!parsedJson.data;
  } catch (error) {
    return false;
  }
}
