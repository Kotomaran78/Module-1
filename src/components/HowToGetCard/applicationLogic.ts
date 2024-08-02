import { useState } from 'react';
import axios from 'axios';
import { FormData, SelectData } from './types';

export const useApplicationLogic = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SelectData[]>([]);
  const [selectedResult, setSelectedResult] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);

  const urlHost = 'https://8080-kotomaran78-dockercompo-usoyjrpml5c.ws-us115.gitpod.io';

  const fetchStatus = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`${urlHost}/admin/application/${id}`);
      setStatus(response.data.status);
      localStorage.setItem('status', JSON.stringify(response.data.status));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${urlHost}/application`, values);
      setResults(response.data);
      localStorage.setItem('results', JSON.stringify(response.data));
      fetchStatus(response.data[0].applicationId);
      localStorage.setItem('applicationId', response.data[0].applicationId);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectResult = async (values: SelectData) => {
    setLoading(true);
    try {
      await axios.post(`${urlHost}/application/apply`, values);
      setSelectedResult(true);
      localStorage.setItem('selectedResult', JSON.stringify(true));
      fetchStatus(values.applicationId);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    results,
    setResults,
    selectedResult,
    setSelectedResult,
    status,
    fetchStatus,
    handleFormSubmit,
    handleSelectResult,
  };
};
