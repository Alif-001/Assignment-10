import { useEffect, useState } from "react";

// fetching data

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;
