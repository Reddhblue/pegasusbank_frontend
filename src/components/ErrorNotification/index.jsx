export default function ({ message, show }) {
  if (!show) return <></>;

  return (
    <div className="fixed right-3 top-3 p-5 border w-[80%] max-w-[400px] rounded-2xl bg-yellow-100">
      <p>{message}</p>
    </div>
  );
}
