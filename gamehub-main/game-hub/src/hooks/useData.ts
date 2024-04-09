import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchReponse <T>{
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestParams?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchReponse<T>>(endpoint, {signal: controller.signal, ...requestParams})
      .then((res) => {setData(res.data.results); setLoading(false)})
      .catch((err) => {if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
    });
    
    return () => controller.abort()
  },deps ? [...deps] : []);

  return {data, error, isLoading}
}

export default useData 