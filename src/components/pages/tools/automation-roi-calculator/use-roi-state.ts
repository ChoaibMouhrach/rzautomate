import { useEffect, useRef, useState } from "react";
import {
  applyField,
  defaultInputs,
  fromSearchParams,
  toSearchParams,
  withPreset,
  type NumericField,
  type TaskId,
} from "@/lib/roi";

export const useRoiState = () => {
  const [inputs, setInputs] = useState(defaultInputs);
  const [isLoaded, setIsLoaded] = useState(false);
  const touched = useRef(new Set<NumericField>());

  useEffect(() => {
    const { parsed, provided } = fromSearchParams(
      new URLSearchParams(window.location.search),
    );
    provided.forEach((field) => touched.current.add(field));
    if (parsed.task || provided.size > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- the shared link is read once after hydration so server and client markup match
      setInputs((current) => ({
        ...withPreset(current, parsed.task ?? current.task, provided),
        ...parsed,
      }));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const isDefault =
      JSON.stringify(inputs) === JSON.stringify(defaultInputs);
    const query = isDefault ? "" : `?${toSearchParams(inputs)}`;
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${query}`,
    );
  }, [inputs, isLoaded]);

  const setField = (field: NumericField, value: number) => {
    touched.current.add(field);
    setInputs((current) => applyField(current, field, value));
  };

  const setTask = (task: TaskId) =>
    setInputs((current) => withPreset(current, task, touched.current));

  return { inputs, setField, setTask };
};
