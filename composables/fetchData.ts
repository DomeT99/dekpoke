import { useComponentStore } from "~~/store/componentStore";

export class CallData<T> {
  
  async useGet(url: string, dataArray: Array<T>) {
    const store = useComponentStore();

    try {
      if (dataArray.length <= 0) {
        const { data, pending } = await useLazyFetch<T[]>(url);

        _forEach(data.value, (data: T) => dataArray.push(data));

        store.isLoading = pending.value;
      }
    } catch (e) {
      throw e;
    }
  }
}
