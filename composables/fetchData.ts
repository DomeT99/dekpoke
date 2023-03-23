import { useComponentStore } from "~~/store/componentStore";

export class CallData<T> {
  async useGet(url: string, dataArray: Array<T>) {
    const componentStore = useComponentStore();

    try {
      if (dataArray.length <= 0) {
        const { data, pending } = await useLazyFetch<T[]>(url);

        if (!data.value) {
          throw createError({
            statusCode: 404
          });
        }

        _forEach(data.value, (data: T) => dataArray.push(data));

        componentStore.isLoading = pending.value;
      } else {
        return false;
      }
    } catch (e) {
      showError({ statusCode: 404, statusMessage: "Data Not Found" });
    }
  }
}
