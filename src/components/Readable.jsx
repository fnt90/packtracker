export default function DateTime({ dateString }) {
  // Constants
  const readableDate = dateString.split("T")[0];
  const readableTime = dateString.split("T")[1].substring(0, 5);

  return (
    <span className="datespan">
      {readableDate} at {readableTime}
    </span>
  );
}
