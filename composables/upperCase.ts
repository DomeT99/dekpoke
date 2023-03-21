export const useUpperCase = (title: string) =>
  title?.charAt(0).toLocaleUpperCase() + title!.slice(1);
