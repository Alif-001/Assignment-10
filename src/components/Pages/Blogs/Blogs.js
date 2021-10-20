import React from "react";
import { Container, Row } from "react-bootstrap";
import useBlog from "../../../hooks/useBlog";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs] = useBlog();
  return (
    <div className="services">
      <Container>
        <h1 className="mt-5">Blogs</h1>
        <hr className="bg-danger" />
        <Row xs={1} md={2} lg={3}>
          {blogs
            // @ts-ignore
            .map((blog) => (
              <Blog blog={blog} key={blog.id}></Blog>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
