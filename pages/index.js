import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Chat App</h1>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/chatroom">Chat Room</Link>
    </div>
  );
};

export default Home;
