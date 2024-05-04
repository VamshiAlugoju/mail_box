import { useEffect, useState } from "react";
import { httpMethods } from "../types/customTypes";
import axios from "axios";

export default function useAxios<T, U>(url: string, method: httpMethods) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<U | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response);

        setData(response.data);
      } catch (err) {
        console.log(err);

        //  setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
