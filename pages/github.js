import Layout from "../Components/Layout";
import Error from "./_error";

const github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout footer={false}>
      <div>
      <div className="container-git">
        <h1 className='user-git'>{user.name}</h1>
        <img className='image-git' src={user.avatar_url} alt="" style={{ width: "300px" }} />
        <a className='go-git' href={user.html_url} target="_blank" alt={user.name}>
          Go to Github 👈
        </a>
      </div>

      </div>
    </Layout>
  );
};

github.proptypes = {};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Jofregf");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default github;
