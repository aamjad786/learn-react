// @ts-ignore
import {apiSlice, useLazyGetApiQuery, usePostApiMutation} from "./apiSlice.ts";

interface ApiHooks {
    getApi: ReturnType<typeof useLazyGetApiQuery>[0];
    postApi: ReturnType<typeof usePostApiMutation>[0];
}

class ApiService {


    private getApiRequest: ApiHooks['getApi'];

    private postApiRequest: ApiHooks['postApi'];

    constructor(hooks: ApiHooks) {
        this.getApiRequest = hooks.getApi;
        this.postApiRequest = hooks.postApi;
    }


    // GET request with path and query parameters
    async get(urlTemplate: string, pathParams?: any, queryParams?: any, headers?: Headers): Promise<any> {
        return this.getApiRequest(urlTemplate).unwrap();
    }

    // POST request
    async post(url: string, body: any, headers?: Headers): Promise<any> {
        return this.postApiRequest(url, body, headers);
    }

    // PUT request
    async put(url: string, body: any, headers?: Headers): Promise<any> {
        return this.postApiRequest(url, body, headers);
    }
}

// Export a singleton instance
// Custom hook to initialize ApiService with hooks
export const useApiService = () => {
    const [getApi] = useLazyGetApiQuery();
    const [postApi] = usePostApiMutation();


    const hooks: ApiHooks = {
        getApi,
        postApi,
    };

    return new ApiService(hooks);
};