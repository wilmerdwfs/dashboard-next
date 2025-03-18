class HttpGetService {
    private API_URL: string;
  
    constructor(apiUrl: string) {
      this.API_URL = apiUrl;
    }
  
    async getData<T>(url: string, params: Record<string, any> = {}): Promise<{ data: T | null; error: string | null }> {
      const queryString = new URLSearchParams(params as any).toString();
      const fullUrl = `${this.API_URL}${url}${queryString ? "?" + queryString : ""}`;
  
      try {
        const response = await fetch(fullUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
  
        const result = await response.json();


        return { data: result.data as T, error: null }
        
      } catch (error) {
        return { data: null, error: error instanceof Error ? error.message : "Error desconocido" };
      }
    }
  }
  
  export default HttpGetService;