export default function Input({ setData }) {
  return (
    <>
      내용 :{' '}
      <input
        type="text"
        onChange={(e) => {
          setData((data) => ({ ...data, content: e.target.value }));
        }}
      />
    </>
  );
}
