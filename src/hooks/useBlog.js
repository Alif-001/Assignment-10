import { useEffect, useState } from "react";

// fetching data

const useBlog = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return [blogs, setBlog];
};

export default useBlog;
