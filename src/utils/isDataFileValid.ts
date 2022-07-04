export function isDataFileValid(data: string): boolean {
  try {
    const parsedJson = JSON.parse(data);

    if (!parsedJson) {
      return false;
    }

    if (typeof parsedJson !== 'object') {
      return false;
    }

    if (!parsedJson.products) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}
