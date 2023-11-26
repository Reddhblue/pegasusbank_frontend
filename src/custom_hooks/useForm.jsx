import axios from "axios";
import { useState } from "react";

export default function useForm({ formData, submitOptions }) {
  const [_formData, setFormData] = useState(formData);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const { url, method } = submitOptions;

  const updateField = (fieldName, value) => {
    setFormData((formData) => ({
      ...formData,
      [fieldName]: value,
    }));
  };

  const submit = async (config = null) => {
    // if (isLoading) return;
    setIsLoading(true);

    const _FD = new FormData();
    submitOptions.form_type === "multipart/form-data" &&
      Object.keys(_formData).forEach((key) => _FD.append(key, _formData[key]));

    try {
      let res;
      const FD =
        submitOptions.form_type === "multipart/form-data" ? _FD : _formData;
      if (method === "POST") {
        res = await axios.post(url, FD, config);
      } else if (method === "PUT") {
        res = await axios.put(url, FD, config);
      } else if (method === "PATCH") {
        res = await axios.patch(url, FD, config);
      } else if (method === "GET") {
        res = await axios.get(url, config);
      }

      setResponse(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(
        error?.response?.data && {
          message:
            error?.response?.data?.error || error?.response?.data?.message,
        }
      );
      setIsLoading(false);
    }
  };

  return [_formData, updateField, submit, isLoading, response, error];
}
