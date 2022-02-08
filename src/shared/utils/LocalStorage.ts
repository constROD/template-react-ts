class LocalStorageUtil {
  static set(key: string, value: unknown): void {
    localStorage[key] = value;
  }

  static get(key: string): string {
    if (!localStorage[key]) return '';
    return localStorage[key] as string;
  }

  static getAll(): { [key: string]: unknown } {
    return localStorage as { [key: string]: unknown };
  }

  static clear(): void {
    localStorage.clear();
  }
}

export default LocalStorageUtil;
