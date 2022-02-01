import Layout from "../Components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout footer={false}>
      <p>
        {statusCode
          ? `Could not load your user data: Status code ${statusCode}`
          : "Coud not get that page, sorry."}
      </p>
    </Layout>
  );
};

export default _error;
