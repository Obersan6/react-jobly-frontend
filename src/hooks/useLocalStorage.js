import { useState, useEffect } from "react";

/**
 * Custom hook to manage localStorage with state synchronization.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {*} initialValue - The initial value to be stored if no existing value is found.
 * @returns {[*, Function]} - The stored value and a function to update it.
 */
function useLocalStorage(key, initialValue) {
  // Get stored value from localStorage or use the provided initial value.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return initialValue;
    }
  });

  // Update localStorage when storedValue changes.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
